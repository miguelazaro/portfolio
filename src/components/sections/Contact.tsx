'use client';

import { useState, type FormEvent } from 'react';
import { IconArrowUpRight } from '@tabler/icons-react';
import { useLanguage } from '@/context/LanguageContext';
import styles from '@/app/portfolio.module.css';

export function Contact() {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [loading, setLoading] = useState(false);
    const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        setNotification(null);
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (response.ok) {
                setNotification({ type: 'success', message: t('contact.success') });
                setFormData({ name: '', email: '', message: '' });
            } else {
                setNotification({ type: 'error', message: data.error || t('contact.error') });
            }
        } catch {
            setNotification({ type: 'error', message: t('contact.errorConnection') });
        } finally {
            setLoading(false);
        }
    };
    return (
        <section className={styles.section} id="contact" aria-labelledby="contact-heading">
            <div className={styles.sectionHead}><h2 id="contact-heading" className={styles.sectionTitle}>{t('contact.title')}</h2><span className={styles.sectionIndex}>04 / {t('contact.sectionLabel')}</span></div>
            <div className={styles.contactGrid}>
                <div className={styles.prose}>
                    <p>{t('contact.description')}</p>
                    <div className={styles.contactLinks}>
                        <a className={styles.textLink} href="mailto:miguel.lazaro.2003@gmail.com">miguel.lazaro.2003@gmail.com <IconArrowUpRight size={15} /></a>
                        <a className={styles.textLink} href="https://www.linkedin.com/in/miguel-lazaro-dev/" target="_blank" rel="noopener noreferrer">LinkedIn <IconArrowUpRight size={15} /></a>
                        <a className={styles.textLink} href="https://wa.me/522382485234" target="_blank" rel="noopener noreferrer">WhatsApp <IconArrowUpRight size={15} /></a>
                    </div>
                </div>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <label>{t('contact.name')}<input name="name" autoComplete="name" required maxLength={120} placeholder={t('contact.namePlaceholder')} value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} /></label>
                    <label>{t('contact.email')}<input name="email" type="email" autoComplete="email" required maxLength={254} placeholder={t('contact.emailPlaceholder')} value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} /></label>
                    <label>{t('contact.message')}<textarea name="message" required maxLength={5000} rows={4} placeholder={t('contact.messagePlaceholder')} value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} /></label>
                    {notification && <p className={styles.notice} role={notification.type === 'error' ? 'alert' : 'status'}>{notification.message}</p>}
                    <button type="submit" className={styles.button + ' ' + styles.primary} disabled={loading}>{loading ? t('contact.sending') : t('contact.send')} <IconArrowUpRight size={16} /></button>
                </form>
            </div>
        </section>
    );
}
export default Contact;
