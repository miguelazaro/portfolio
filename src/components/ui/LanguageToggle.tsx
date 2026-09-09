'use client';

import { useLanguage } from '@/context/LanguageContext';
import styles from '@/app/portfolio.module.css';

export function LanguageToggle() {
    const { language, setLanguage } = useLanguage();
    return <button type="button" className={styles.control} onClick={() => setLanguage(language === 'es' ? 'en' : 'es')} aria-label={language === 'es' ? 'Switch to English' : 'Cambiar a español'} title={language === 'es' ? 'Switch to English' : 'Cambiar a español'}>{language === 'es' ? 'EN' : 'ES'}</button>;
}
