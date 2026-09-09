'use client';

import Image from 'next/image';
import { IconArrowUpRight } from '@tabler/icons-react';
import { useLanguage } from '@/context/LanguageContext';
import { useState } from 'react';
import { ProjectModal } from './ProjectModal';
import { projectsDataConfig, type Project } from '@/data/projects';
import styles from '@/app/portfolio.module.css';

const coverNames: Record<string, string> = { nodatix: 'Nodatix', evenrent: 'Evenrent', 'presta-prenda': 'Fideguardian', 'mvpx-pos': 'MVPX AI' };

export function Projects() {
    const { t } = useLanguage();
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    return (
        <section className={styles.section} id="projects" aria-labelledby="projects-heading">
            <div className={styles.sectionHead}>
                <h2 className={styles.sectionTitle} id="projects-heading">{t('projects.heading')}</h2>
                <span className={styles.sectionIndex}>01 / {String(projectsDataConfig.length).padStart(2, '0')} {t('projects.count')}</span>
            </div>
            <div className={styles.projectGrid}>
                {projectsDataConfig.map((project, index) => (
                    <article key={project.id} className={styles.projectCard} data-project-card={project.id}>
                        <div className={styles.projectCover} data-project={project.id}>
                            {project.images.length ? (
                                <Image src={project.images[0]} alt={t(project.titleKey)} fill sizes="(max-width: 560px) 100vw, (max-width: 1100px) 50vw, 506px" className={styles.projectImage} />
                            ) : (
                                <div className={styles.coverText}>
                                    <div className={styles.coverTop}><span>{t('projects.cover')}</span><span>{String(index + 1).padStart(2, '0')}</span></div>
                                    <p className={styles.coverName}>{coverNames[project.id]}</p>
                                    <p className={styles.coverLabel}>{project.coverLabelKey && t(project.coverLabelKey)}</p>
                                </div>
                            )}
                        </div>
                        <div className={styles.projectBody}>
                            <div className={styles.projectMeta}>
                                <span>{project.statusKey ? t(project.statusKey) : t('projects.projectLabel')}</span>
                                {project.date && <span>{project.date}</span>}
                            </div>
                            <h3>{t(project.titleKey)}</h3>
                            <p className={styles.projectDescription}>{t(project.descKey)}</p>
                            <p className={styles.projectTech}>{project.technologies.slice(0, 4).join(' · ')}</p>
                            <div className={styles.projectActions}>
                                <button type="button" className={styles.button + ' ' + styles.detailsButton} onClick={() => setSelectedProject(project)} aria-label={t('projects.viewDetails') + ': ' + t(project.titleKey)} aria-haspopup="dialog">
                                    {t('projects.viewDetails')} <IconArrowUpRight size={18} aria-hidden="true" />
                                </button>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
            {selectedProject && <ProjectModal opened onClose={() => setSelectedProject(null)} project={selectedProject} />}
        </section>
    );
}
export default Projects;
