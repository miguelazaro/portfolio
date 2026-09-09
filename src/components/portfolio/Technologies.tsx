'use client';

import { IconBrandReact, IconBrandNextjs, IconBrandTypescript, IconBrandNodejs, IconDatabase, IconLayoutDashboard, IconServer, IconTools, IconArrowUpRight } from '@tabler/icons-react';
import { useLanguage } from '@/context/LanguageContext';
import shared from './portfolio.module.css';
import styles from './technologies.module.css';

const primaryStack = [
    { name: 'React', icon: IconBrandReact },
    { name: 'Next.js', icon: IconBrandNextjs },
    { name: 'TypeScript', icon: IconBrandTypescript },
    { name: 'Node.js', icon: IconBrandNodejs },
    { name: 'PostgreSQL', icon: IconDatabase },
];

const groups = [
    {
        id: 'frontend', icon: IconLayoutDashboard, label: { es: 'Frontend', en: 'Frontend' },
        technologies: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Vue.js', 'Tailwind CSS', 'Zustand', 'React Query', 'Vite'],
        project: 'presta-prenda', projectLabelKey: 'projects.project4.title',
        example: {
            es: 'React y TypeScript para autenticación OTP y recuperación de cuentas; Zustand y React Query para gestionar el estado.',
            en: 'React and TypeScript for OTP authentication and account recovery; Zustand and React Query for state management.',
        },
    },
    {
        id: 'backend', icon: IconServer, label: { es: 'Backend', en: 'Backend' },
        technologies: ['Node.js', 'Express', 'PHP', 'Python', 'Prisma', 'APIs REST', 'Server Actions', 'Zod', 'tRPC'],
        project: 'nodatix', projectLabelKey: 'projects.nodatix.title',
        example: {
            es: 'Backend por capas con Server Actions, validación con Zod y acceso a datos mediante Prisma.',
            en: 'Layered backend with Server Actions, Zod validation and data access through Prisma.',
        },
    },
    {
        id: 'data', icon: IconDatabase, label: { es: 'Bases de datos y servicios', en: 'Databases and services' },
        technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'MariaDB', 'Supabase', 'Firebase'],
        project: 'nodatix', projectLabelKey: 'projects.nodatix.title',
        example: {
            es: 'PostgreSQL y Supabase para persistencia, autenticación y almacenamiento, con políticas RLS para aislar los datos por negocio.',
            en: 'PostgreSQL and Supabase for persistence, authentication and storage, with RLS policies for per-business data isolation.',
        },
    },
    {
        id: 'tools', icon: IconTools, label: { es: 'Pruebas y herramientas', en: 'Testing and tools' },
        technologies: ['Vitest', 'Node Native Test Runner', 'Git', 'GitHub', 'Docker', 'Postman'],
        project: 'nodatix', projectLabelKey: 'projects.nodatix.title',
        example: {
            es: 'Pruebas con Vitest sobre servicios, validaciones y reglas de negocio del CRM.',
            en: 'Vitest tests covering the CRM’s services, validation and business rules.',
        },
    },
];

export function Technologies({ onSelectProject }: { onSelectProject: (id: string) => void }) {
    const { language, t } = useLanguage();
    const es = language === 'es';

    return (
        <section id="technologies" className={`${shared.section} ${styles.section}`} aria-labelledby="technologies-title">
            <div className={shared.sectionHeader}>
                <div>
                    <p className={shared.eyebrow}>{es ? 'TECNOLOGÍAS' : 'TECHNOLOGIES'}</p>
                    <h2 id="technologies-title">{es ? 'Herramientas' : 'Tools'}<br /><span>{es ? 'que utilizo.' : 'I work with.'}</span></h2>
                </div>
                <p>{es ? 'Mi stack principal y las tecnologías que he utilizado en mis proyectos y formación.' : 'My main stack and the technologies I have used in projects and training.'}</p>
            </div>

            <div className={styles.primary}>
                <h3>{es ? 'Stack principal' : 'Main stack'}</h3>
                <ul>{primaryStack.map(item => <li key={item.name}><item.icon size={24} stroke={1.5} aria-hidden="true" /><span>{item.name}</span></li>)}</ul>
            </div>

            <div className={styles.groups}>
                {groups.map(group => (
                    <div key={group.id} className={styles.group}>
                        <h3><group.icon size={20} stroke={1.5} aria-hidden="true" />{group.label[language]}</h3>
                        <ul className={styles.list}>{group.technologies.map(name => <li key={name}>{name}</li>)}</ul>
                        <div className={styles.example}>
                            <h4>{es ? 'Aplicado en proyectos' : 'Used in projects'}</h4>
                            <p>{group.example[language]}</p>
                            <a href="#projects" onClick={() => onSelectProject(group.project)}>{t(group.projectLabelKey)}<IconArrowUpRight size={15} aria-hidden="true" /></a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
