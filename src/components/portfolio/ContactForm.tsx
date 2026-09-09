'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import { IconArrowUpRight, IconCheck, IconAlertCircle } from '@tabler/icons-react';
import { useLanguage } from '@/context/LanguageContext';
import styles from './portfolio.module.css';

type Status = 'idle' | 'sending' | 'success' | 'error' | 'connection';

export function ContactForm() {
    const { language, t } = useLanguage();
    const [status, setStatus] = useState<Status>('idle');
    const pending = useRef<AbortController | null>(null);
    const es = language === 'es';

    useEffect(() => () => { pending.current?.abort(); }, []);

    async function submit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (pending.current) return;
        const form = event.currentTarget;
        const data = new FormData(form);
        const payload = {
            name: String(data.get('name') ?? '').trim(),
            email: String(data.get('email') ?? '').trim(),
            message: String(data.get('message') ?? '').trim(),
        };

        for (const key of ['name', 'email', 'message'] as const) {
            const field = form.elements.namedItem(key) as HTMLInputElement | HTMLTextAreaElement;
            field.setCustomValidity(payload[key] ? '' : (es ? 'Completa este campo.' : 'Please fill out this field.'));
            if (!field.reportValidity()) return;
        }

        const controller = new AbortController();
        pending.current = controller;
        const timeout = window.setTimeout(() => controller.abort(), 20000);
        setStatus('sending');
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
                signal: controller.signal,
            });
            const result = await response.json();
            if (response.ok && result.success === true) {
                form.reset();
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('connection');
        } finally {
            window.clearTimeout(timeout);
            pending.current = null;
        }
    }

    const error = status === 'error' || status === 'connection';
    return (
        <form className={styles.contactForm} onSubmit={submit} aria-label={es ? 'Formulario de contacto' : 'Contact form'}>
            <p className={styles.formIntro}>{es ? 'Cuéntame sobre tu proyecto o la oportunidad que tienes en mente.' : 'Tell me about your project or the opportunity you have in mind.'}</p>
            <fieldset disabled={status === 'sending'} aria-busy={status === 'sending'}>
                <legend className={styles.srOnly}>{es ? 'Tu mensaje' : 'Your message'}</legend>
                <label htmlFor="contact-name"><span>01 / {t('contact.name')}</span><input id="contact-name" name="name" autoComplete="name" required maxLength={120} placeholder={t('contact.namePlaceholder')} onInput={event => event.currentTarget.setCustomValidity('')} /></label>
                <label htmlFor="contact-email"><span>02 / {t('contact.email')}</span><input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} placeholder={t('contact.emailPlaceholder')} onInput={event => event.currentTarget.setCustomValidity('')} /></label>
                <label htmlFor="contact-message"><span>03 / {t('contact.message')}</span><textarea id="contact-message" name="message" required maxLength={5000} rows={4} placeholder={t('contact.messagePlaceholder')} onInput={event => event.currentTarget.setCustomValidity('')} /></label>
                <button className={`${styles.primary} ${styles.sendButton}`} type="submit">{status === 'sending' ? t('contact.sending') : t('contact.send')}<IconArrowUpRight size={18} aria-hidden="true" /></button>
            </fieldset>
            <div className={styles.formStatus} role="status" aria-live="polite" aria-atomic="true">
                {status === 'sending' && <p>{t('contact.sending')}</p>}
                {status === 'success' && <p className={styles.success}><IconCheck size={18} aria-hidden="true" />{t('contact.success')}</p>}
            </div>
            {error && <p className={styles.formError} role="alert"><IconAlertCircle size={18} aria-hidden="true" /><span>{t(status === 'connection' ? 'contact.errorConnection' : 'contact.error').replace(/\.$/, '')}. {es ? 'Tu mensaje se conserva. Puedes reintentar o escribirme por correo.' : 'Your message is saved in this form. Try again or contact me by email.'}</span></p>}
        </form>
    );
}
