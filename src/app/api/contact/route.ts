import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const invalid = () => NextResponse.json({ error: 'Revisa los campos del formulario.' }, { status: 400 });

export async function POST(request: Request) {
    let body: unknown;
    try {
        body = await request.json();
    } catch {
        return invalid();
    }
    if (!body || typeof body !== 'object' || Array.isArray(body)) return invalid();
    const input = body as Record<string, unknown>;
    const limits = { name: 120, email: 254, message: 5000 } as const;
    for (const key of Object.keys(limits) as (keyof typeof limits)[]) {
        if (typeof input[key] !== 'string' || !input[key].trim() || input[key].length > limits[key]) return invalid();
    }
    const name = (input.name as string).trim();
    const email = (input.email as string).trim();
    const message = (input.message as string).trim();
    if (/\r|\n/.test(name) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return invalid();
    // Preserve support for the optional field accepted by the previous form.
    if (input.suggestions !== undefined && (typeof input.suggestions !== 'string' || input.suggestions.length > 5000)) return invalid();
    const suggestions = typeof input.suggestions === 'string' ? input.suggestions.trim() : '';

    if (!process.env.RESEND_API_KEY) {
        return NextResponse.json({ error: 'El envío no está disponible. Intenta más tarde.' }, { status: 503 });
    }
    try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const { data, error } = await resend.emails.send({
            from: process.env.RESEND_FROM_EMAIL || 'Portafolio <onboarding@resend.dev>',
            to: ['miguel.lazaro.2003@gmail.com'],
            replyTo: email,
            subject: `Nuevo mensaje de ${name} - Portafolio`,
            // Plain text preserves line breaks and keeps submitted markup inert.
            text: [
                'Nuevo mensaje desde tu portafolio',
                `Nombre: ${name}`,
                `Email: ${email}`,
                '',
                message,
                ...(suggestions ? ['', 'Sugerencias / Feedback:', suggestions] : []),
            ].join('\n'),
        });
        if (error || !data?.id) {
            return NextResponse.json({ error: 'No se pudo enviar el mensaje. Intenta de nuevo.' }, { status: 502 });
        }
        return NextResponse.json({ success: true, messageId: data.id });
    } catch {
        return NextResponse.json({ error: 'No se pudo enviar el mensaje. Intenta de nuevo.' }, { status: 502 });
    }
}
