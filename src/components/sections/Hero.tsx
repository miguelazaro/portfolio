'use client';

import { IconArrowDown, IconArrowUpRight } from '@tabler/icons-react';
import { useLanguage } from '@/context/LanguageContext';
import styles from '@/app/portfolio.module.css';

export function Hero() {
    const { t } = useLanguage();
    return (
        <section id="home" className={styles.hero} aria-labelledby="hero-title">
            <div>
                <p className={styles.eyebrow}>{t('hero.title')}</p>
                <h1 id="hero-title">Miguel Ángel<br />Lázaro<span style={{ color: 'var(--accent)' }}>.</span></h1>
                <p className={styles.intro}>{t('hero.description')}</p>
                <div className={styles.actions}>
                    <a className={styles.button + ' ' + styles.primary} href="#projects">{t('hero.projects')} <IconArrowDown size={16} /></a>
                    <a className={styles.textLink} href="/cv/curriculum_vitae_lazaro.pdf#toolbar=0" target="_blank" rel="noopener noreferrer">{t('hero.cv')} <IconArrowUpRight size={15} /></a>
                </div>
            </div>
            <aside className={styles.heroAside}>
                <p className={styles.availability}>{t('hero.available')}</p>
                <p>{t('hero.location')}</p>
                <div className={styles.actions} style={{ marginTop: 12 }}>
                    <a className={styles.textLink} href="https://github.com/miguelazaro" target="_blank" rel="noopener noreferrer">GitHub <IconArrowUpRight size={14} /></a>
                    <a className={styles.textLink} href="https://www.linkedin.com/in/miguel-lazaro-dev/" target="_blank" rel="noopener noreferrer">LinkedIn <IconArrowUpRight size={14} /></a>
                </div>
            </aside>
        </section>
    );
}
