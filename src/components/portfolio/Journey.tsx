'use client';

import { IconArrowUpRight } from '@tabler/icons-react';
import { useLanguage } from '@/context/LanguageContext';
import styles from './portfolio.module.css';

const work = [
    {
        id: 'nodatix', company: 'Nodatix', start: '2026-04', end: '2026-08',
        technologies: ['Next.js', 'TypeScript', 'Prisma', 'Supabase', 'PostgreSQL', 'Vitest'],
    },
    {
        id: 'mvpx', company: 'MVPX AI', start: '2026-01', end: '2026-04',
        technologies: ['React', 'TypeScript', 'Node.js', 'Zustand', 'React Query', 'Node Native Test Runner'],
    },
];

const education = [
    { id: 'degree', start: '2024-08', end: '2026-04' },
    { id: 'tsu', start: '2022-08', end: '2024-07' },
];

const certificates = [
    { id: 'tester', issuer: 'Capacítate para el Empleo, Fundación Carlos Slim' },
    { id: 'excel', issuer: 'Testing Program' },
    { id: 'aws', issuer: 'NECTEC' },
];

export function Journey() {
    const { language, t } = useLanguage();
    const formatter = new Intl.DateTimeFormat(language === 'es' ? 'es-MX' : 'en-US', {
        month: 'short', year: 'numeric', timeZone: 'UTC',
    });
    const period = (start: string, end: string) => (
        <span className={styles.journeyPeriod}>
            <time dateTime={start}>{formatter.format(new Date(`${start}-01T00:00:00Z`))}</time>
            <span aria-hidden="true"> — </span>
            <span className={styles.srOnly}>{language === 'es' ? ' hasta ' : ' to '}</span>
            <time dateTime={end}>{formatter.format(new Date(`${end}-01T00:00:00Z`))}</time>
        </span>
    );

    return (
        <section id="experience" className={styles.section} aria-labelledby="journey-title">
            <div className={styles.sectionHeader}>
                <div>
                    <p className={styles.eyebrow}><span>04</span> {t('experience.sectionLabel')}</p>
                    <h2 id="journey-title">{t('experience.title')} <span>{t('experience.titleHighlight')}.</span></h2>
                </div>
                <a className={styles.cv} href="/cv/curriculum_vitae_lazaro.pdf#toolbar=0" target="_blank" rel="noopener noreferrer">{t('hero.cv')}<IconArrowUpRight size={18} aria-hidden="true" /></a>
            </div>

            <div className={styles.journeyGroup}>
                <h3 className={styles.journeyLabel}>{t('experience.work')}</h3>
                <ol className={styles.workHistory}>
                    {work.map(item => (
                        <li key={item.id} className={styles.workEntry}>
                            <div className={styles.workDate}>
                                {period(item.start, item.end)}
                                <span className={styles.journeyLocation}>{t('experience.location')}</span>
                            </div>
                            <div className={styles.workContent}>
                                <h4>{item.company}</h4>
                                <p className={styles.workRole}>{t(`experience.${item.id}.title`)}</p>
                                <p className={styles.workDescription}>{t(`experience.${item.id}.desc`)}</p>
                                <p className={styles.workStack}>{item.technologies.join(' · ')}</p>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>

            <div className={styles.journeyGroup}>
                <h3 className={styles.journeyLabel}>{t('experience.education')}</h3>
                <ol className={styles.educationHistory}>
                    {education.map(item => (
                        <li key={item.id}>
                            {period(item.start, item.end)}
                            <h4>{t(`experience.${item.id}.title`)}</h4>
                            <p>Universidad Tecnológica de Tehuacán</p>
                            <span className={styles.journeyLocation}>{t('experience.location')}</span>
                        </li>
                    ))}
                </ol>
            </div>

            <div className={styles.journeyGroup}>
                <h3 className={styles.journeyLabel}>{t('experience.certifications')}</h3>
                <ul className={styles.certificateHistory}>
                    {certificates.map(item => (
                        <li key={item.id}>
                            <time dateTime="2023">2023</time>
                            <div><h4>{t(`experience.${item.id}.title`)}</h4><p>{item.issuer}</p></div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
