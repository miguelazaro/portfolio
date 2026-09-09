import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';

// Exercise the actual route with an in-memory mail provider; never send email.
const source = fs.readFileSync(new URL('../src/app/api/contact/route.ts', import.meta.url), 'utf8');
const compiled = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;

function harness({ configured = true, sender, send = async () => ({ data: { id: 'test-id' }, error: null }) } = {}) {
    const calls = [];
    const routeModule = { exports: {} };
    vm.runInNewContext(compiled, {
        exports: routeModule.exports,
        process: { env: { RESEND_API_KEY: configured ? 'test-key' : undefined, RESEND_FROM_EMAIL: sender } },
        require(name) {
            if (name === 'next/server') return { NextResponse: { json: (value, init) => Response.json(value, init) } };
            if (name === 'resend') return { Resend: class {
                emails = { send: async payload => { calls.push(payload); return send(payload); } };
            } };
            throw new Error(`Unexpected dependency: ${name}`);
        },
    });
    return { calls, post: body => routeModule.exports.POST(new Request('http://localhost/api/contact', {
        method: 'POST', body: JSON.stringify(body), headers: { 'Content-Type': 'application/json' },
    })), raw: routeModule.exports.POST };
}

const valid = { name: 'Miguel', email: 'sender@example.com', message: 'Hola, tengo una propuesta.' };

test('rejects malformed JSON, missing fields, wrong types, whitespace, invalid email and oversized input before sending', async () => {
    const h = harness();
    const invalid = [null, [], {}, { ...valid, name: 3 }, { ...valid, name: '  ' },
        { ...valid, name: 'Name\nHeader' }, { ...valid, email: 'wrong' }, { ...valid, message: {} },
        { ...valid, message: ' ' }, { ...valid, name: 'n'.repeat(121) },
        { ...valid, email: 'e'.repeat(255) }, { ...valid, message: 'm'.repeat(5001) },
        { ...valid, suggestions: [] }];
    for (const input of invalid) assert.equal((await h.post(input)).status, 400);
    assert.equal((await h.raw(new Request('http://localhost/api/contact', { method: 'POST', body: '{' }))).status, 400);
    assert.equal(h.calls.length, 0);
});

test('uses the recipient and reply-to correctly and sends user markup as plain text', async () => {
    const h = harness({ sender: 'Portfolio <contact@example.com>' });
    const response = await h.post({ ...valid, name: '  Miguel  ', message: '<b>Texto</b>\nSegunda línea', suggestions: 'Feedback' });
    assert.equal(response.status, 200);
    assert.equal((await response.json()).success, true);
    assert.equal(h.calls.length, 1);
    const mail = h.calls[0];
    assert.equal(mail.from, 'Portfolio <contact@example.com>');
    assert.equal(mail.to[0], 'miguel.lazaro.2003@gmail.com');
    assert.equal(mail.replyTo, valid.email);
    assert.equal(mail.subject, 'Nuevo mensaje de Miguel - Portafolio');
    assert.equal(mail.html, undefined);
    assert.ok(mail.text.includes('<b>Texto</b>\nSegunda línea'));
    assert.ok(mail.text.includes('Feedback'));
});

test('reports unavailable configuration without calling the provider', async () => {
    const h = harness({ configured: false });
    assert.equal((await h.post(valid)).status, 503);
    assert.equal(h.calls.length, 0);
});

test('does not report success when the provider rejects, throws or omits the message id', async () => {
    for (const send of [async () => ({ error: { message: 'private provider error' } }),
        async () => { throw new Error('private provider error'); }, async () => ({ data: {}, error: null })]) {
        const h = harness({ send });
        const response = await h.post(valid);
        assert.equal(response.status, 502);
        assert.ok(!(await response.text()).includes('private provider error'));
    }
});
