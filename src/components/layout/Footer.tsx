'use client';

import { useLanguage } from '@/context/LanguageContext';
import styles from '@/app/portfolio.module.css';

export function Footer() {
    const { t } = useLanguage();
    return <footer className={styles.shell + ' ' + styles.footer}><span>{t('footer.rights')}</span><div className={styles.footerLinks}><a className={styles.textLink} href="https://github.com/miguelazaro" target="_blank" rel="noopener noreferrer">GitHub</a><a className={styles.textLink} href="#home">{t('nav.home')} ↑</a></div></footer>;
}
