'use client';

import { useLanguage } from '@/context/LanguageContext';
import styles from '@/app/portfolio.module.css';

export function About() {
    const { t } = useLanguage();
    return (
        <section className={styles.section} id="about" aria-labelledby="about-heading">
            <div className={styles.sectionHead}><h2 id="about-heading" className={styles.sectionTitle}>{t('about.title')} {t('about.titleHighlight')}</h2><span className={styles.sectionIndex}>02 / {t('about.sectionLabel')}</span></div>
            <div className={styles.twoColumns}>
                <div className={styles.prose}>
                    {['about.intro', 'about.skills', 'about.tools', 'about.background', 'about.languages'].map(key => <p key={key}>{t(key)}</p>)}
                </div>
                <ul className={styles.skillList}>
                    {[1, 2, 3, 4].map(index => <li key={index}><h3>{t('about.value' + index)}</h3><p>{t('about.value' + index + 'Desc')}</p></li>)}
                </ul>
            </div>
        </section>
    );
}
