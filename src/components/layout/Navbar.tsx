'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ThemeToggle, LanguageToggle } from '../ui';
import styles from '@/app/portfolio.module.css';

const sections = ['projects', 'about', 'experience', 'contact'];

export function Navbar({ preview = false }: { preview?: boolean }) {
    const { t } = useLanguage();
    const [active, setActive] = useState('');
    useEffect(() => {
        const update = () => {
            let current = '';
            for (const id of sections) {
                const element = document.getElementById(id);
                if (element && element.getBoundingClientRect().top <= 180) current = id;
            }
            setActive(current);
        };
        window.addEventListener('scroll', update, { passive: true });
        return () => window.removeEventListener('scroll', update);
    }, []);
    return (
        <header className={styles.header}>
            <a href="#main" className="skip-link">{t('nav.skip')}</a>
            <nav className={styles.shell + ' ' + styles.nav} aria-label={t('nav.label')}>
                <a href="#home" className={styles.brand} aria-label={t('nav.home')}>ml<span>.</span></a>
                <div className={styles.navLinks}>
                    {sections.map(id => <a key={id} href={(preview && id !== 'projects' ? '/' : '') + '#' + id} aria-current={active === id ? 'location' : undefined}>{t('nav.' + id)}</a>)}
                </div>
                <div className={styles.controls}><LanguageToggle /><ThemeToggle /></div>
            </nav>
        </header>
    );
}
