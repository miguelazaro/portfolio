'use client';

import { useLanguage } from '@/context/LanguageContext';
import styles from '@/app/portfolio.module.css';

export function Experience() {
    const { t } = useLanguage();
    
    const experiences = [
        {
            type: 'work',
            title: t('experience.nodatix.title'),
            company: 'Nodatix',
            period: '04/2026 – 08/2026',
            description: t('experience.nodatix.desc'),
            technologies: ['Next.js', 'TypeScript', 'Prisma', 'Supabase', 'PostgreSQL', 'Vitest']
        },
        {
            type: 'work',
            title: t('experience.mvpx.title'),
            company: 'MVPX AI',
            period: '01/2026 – 04/2026',
            description: t('experience.mvpx.desc'),
            technologies: ['React', 'TypeScript', 'Node.js', 'Zustand', 'React Query', 'Node Native Test Runner']
        },
        {
            type: 'education',
            title: t('experience.degree.title'),
            company: 'Universidad Tecnológica de Tehuacán',
            period: '08/2024 – 04/2026',
            description: t('experience.location'),
            technologies: []
        },
        {
            type: 'education',
            title: t('experience.tsu.title'),
            company: 'Universidad Tecnológica de Tehuacán',
            period: '08/2022 – 07/2024',
            description: t('experience.location'),
            technologies: []
        },
        {
            type: 'certification',
            title: t('experience.tester.title'),
            company: 'Capacítate para el Empleo, Fundación Carlos Slim',
            period: '2023',
            description: t('experience.testerDesc'),
            technologies: ['Testing', 'QA']
        },
        {
            type: 'certification',
            title: t('experience.excel.title'),
            company: 'Testing Program',
            period: '2023',
            description: t('experience.excelDesc'),
            technologies: ['Excel']
        },
        {
            type: 'certification',
            title: t('experience.aws.title'),
            company: 'NECTEC',
            period: '2023',
            description: t('experience.awsDesc'),
            technologies: ['AWS']
        }
    ];

    const groups = [
        { type: 'work', label: 'experience.work' },
        { type: 'education', label: 'experience.education' },
        { type: 'certification', label: 'experience.certifications' },
    ];
    return (
        <section className={styles.section} id="experience" aria-labelledby="experience-heading">
            <div className={styles.sectionHead}><h2 id="experience-heading" className={styles.sectionTitle}>{t('experience.title')} {t('experience.titleHighlight')}</h2><span className={styles.sectionIndex}>03 / {t('experience.sectionLabel')}</span></div>
            {groups.map(group => (
                <div key={group.type}>
                    <h3 className={styles.subheading}>{t(group.label)}</h3>
                    <ol className={styles.timeline}>
                        {experiences.filter(exp => exp.type === group.type).map(exp => (
                            <li key={exp.title}>
                                <span className={styles.timelineDate}>{exp.period}</span>
                                <div>
                                    <h3>{exp.title}</h3>
                                    <h4>{exp.company}</h4>
                                    <p>{exp.description}</p>
                                    {exp.technologies.length > 0 && <p style={{ fontSize: 11, marginTop: 12 }}>{exp.technologies.join(' · ')}</p>}
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            ))}
        </section>
    );
}
export default Experience;
