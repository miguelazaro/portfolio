'use client';

import { Modal } from '@mantine/core';
import Image from 'next/image';
import { IconArrowUpRight } from '@tabler/icons-react';
import { useLanguage } from '@/context/LanguageContext';
import type { Project } from '@/data/projects';
import styles from '@/app/portfolio.module.css';

interface ProjectModalProps { opened: boolean; onClose: () => void; project: Project; }

export function ProjectModal({ opened, onClose, project }: ProjectModalProps) {
    const { t } = useLanguage();
    const hasRepository = !!project.repoLink && /^https?:\/\//.test(project.repoLink);
    return (
        <Modal opened={opened} onClose={onClose} size={760} centered padding={0} title={t(project.titleKey)} closeButtonProps={{ 'aria-label': t('projects.close') }}
            classNames={{ content: styles.modalContent, header: styles.modalHeader, title: styles.modalTitle, body: styles.modalBody }} overlayProps={{ backgroundOpacity: .55 }} transitionProps={{ duration: 0 }}>
            <div className={styles.modalMeta}>
                {project.statusKey && <span>{t(project.statusKey)}</span>}
                {project.date && <span>{project.date}</span>}
            </div>
            {project.images.map((src, index) => (
                <div className={styles.modalMedia} key={src}>
                    <Image src={src} fill sizes="(max-width: 760px) 90vw, 700px" className={styles.projectImage} alt={t(project.titleKey) + ' — ' + (index + 1)} />
                </div>
            ))}
            <div className={styles.prose}><p>{t(project.descExtendedKey)}</p></div>
            {project.roleKey && <section className={styles.modalSection}><h3>{t('projects.modal.role')}</h3><p>{t(project.roleKey)}</p></section>}
            <section className={styles.modalSection}><h3>{t('projects.modal.modules')}</h3><ul>{project.modulesKey.map(key => <li key={key}>{t(key)}</li>)}</ul></section>
            <section className={styles.modalSection}><h3>{t('projects.modal.technologies')}</h3><ul className={styles.modalTech}>{project.technologies.map(tech => <li key={tech}>{tech}</li>)}</ul></section>
            {hasRepository && <div className={styles.actions}><a className={styles.button} href={project.repoLink} target="_blank" rel="noopener noreferrer">{t('projects.viewCode')} <IconArrowUpRight size={16} /></a></div>}
        </Modal>
    );
}
