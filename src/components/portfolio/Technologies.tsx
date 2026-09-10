'use client';

import type { CSSProperties } from 'react';
import {
    IconBrandReact, IconBrandNextjs, IconBrandTypescript, IconBrandNodejs,
    IconBrandPhp, IconBrandLaravel, IconBrandPython, IconBrandJavascript,
    IconBrandVue, IconBrandTailwind, IconBrandVite, IconBrandMysql,
    IconBrandMongodb, IconBrandFirebase, IconBrandSupabase, IconBrandPrisma,
    IconBrandStripe, IconBrandGit, IconBrandGithub, IconBrandDocker, IconBrandRedux,
    IconDatabase, IconLayoutDashboard, IconServer, IconTools, IconArrowUpRight,
    IconCode, IconCloud, IconTestPipe, IconApi,
} from '@tabler/icons-react';
import { useLanguage } from '@/context/LanguageContext';
import shared from './portfolio.module.css';
import styles from './technologies.module.css';

type Technology = { icon?: typeof IconBrandReact; color?: string; monogram?: string };

// Brand colors belong to the technology, independently of the portfolio palette.
// Unbranded concepts and monochrome marks follow the text color of the theme.
const technologies: Record<string, Technology> = {
    React: { icon: IconBrandReact, color: '#61DAFB' },
    'Next.js': { icon: IconBrandNextjs },
    TypeScript: { icon: IconBrandTypescript, color: '#3178C6' },
    'Node.js': { icon: IconBrandNodejs, color: '#5FA04E' },
    PostgreSQL: { icon: IconDatabase, color: '#336791' },
    PHP: { icon: IconBrandPhp, color: '#777BB4' },
    Laravel: { icon: IconBrandLaravel, color: '#FF2D20' },
    Python: { icon: IconBrandPython, color: '#3776AB' },
    JavaScript: { icon: IconBrandJavascript, color: '#F7DF1E' },
    'Vue.js': { icon: IconBrandVue, color: '#4FC08D' },
    'Tailwind CSS': { icon: IconBrandTailwind, color: '#06B6D4' },
    Vite: { icon: IconBrandVite, color: '#646CFF' },
    MySQL: { icon: IconBrandMysql, color: '#4479A1' },
    MongoDB: { icon: IconBrandMongodb, color: '#47A248' },
    MariaDB: { icon: IconDatabase },
    Firebase: { icon: IconBrandFirebase, color: '#DD2C00' },
    Supabase: { icon: IconBrandSupabase, color: '#3FCF8E' },
    Prisma: { icon: IconBrandPrisma },
    'Stripe API': { icon: IconBrandStripe, color: '#635BFF' },
    Git: { icon: IconBrandGit, color: '#F05032' },
    GitHub: { icon: IconBrandGithub },
    Docker: { icon: IconBrandDocker, color: '#2496ED' },
    Redux: { icon: IconBrandRedux, color: '#764ABC' },
    Express: { monogram: 'ex' },
    Zustand: { monogram: 'Z', color: '#A1826B' },
    'React Query': { monogram: 'RQ', color: '#FF4154' },
    Zod: { monogram: 'Z', color: '#3E67B1' },
    Vitest: { icon: IconTestPipe, color: '#6E9F18' },
    'Node Native Test Runner': { icon: IconTestPipe, color: '#5FA04E' },
    Postman: { monogram: 'P', color: '#FF6C37' },
    tRPC: { monogram: 'tR', color: '#2596BE' },
    'APIs REST': { icon: IconApi },
    'Server Actions': { icon: IconCode },
    'Service Workers': { icon: IconCloud },
};

const primaryStack = ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'];
const otherTechnologies = [
    'PHP', 'Laravel', 'Python', 'Vue.js', 'Vite', 'Redux', 'MongoDB', 'MariaDB',
    'Firebase', 'tRPC', 'APIs REST', 'Git', 'GitHub', 'Docker', 'Postman',
];

function TechnologyList({ names, className }: { names: string[]; className?: string }) {
    return (
        <ul className={className} data-reveal="technologies">
            {names.map(name => {
                const technology = technologies[name];
                const Icon = technology.icon;
                return (
                    <li key={name} className={styles.technology} style={{ '--technology-color': technology.color ?? 'var(--text)' } as CSSProperties}>
                        <span className={styles.technologyIcon} aria-hidden="true">
                            {Icon ? <Icon size={22} stroke={1.7} /> : (
                                <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <text x="12" y="17" textAnchor="middle" fill="currentColor">{technology.monogram}</text>
                                </svg>
                            )}
                        </span>
                        <span>{name}</span>
                    </li>
                );
            })}
        </ul>
    );
}

const groups = [
    {
        id: 'frontend', icon: IconLayoutDashboard, label: { es: 'Frontend', en: 'Frontend' },
        technologies: ['React', 'TypeScript', 'Zustand', 'React Query'],
        project: 'presta-prenda', projectLabelKey: 'projects.project4.title',
        example: {
            es: 'React y TypeScript para autenticación OTP y recuperación de cuentas; Zustand y React Query para gestionar el estado.',
            en: 'React and TypeScript for OTP authentication and account recovery; Zustand and React Query for state management.',
        },
    },
    {
        id: 'backend', icon: IconServer, label: { es: 'Web e integraciones', en: 'Web and integrations' },
        technologies: ['Express', 'Node.js', 'JavaScript', 'Tailwind CSS', 'MySQL', 'Service Workers', 'Stripe API'],
        project: 'nutridev', projectLabelKey: 'projects.project1.title',
        example: {
            es: 'Express sirve la interfaz y gestiona el backend de NutriDev. MySQL para los datos, Service Workers para soporte offline y Stripe para pagos con webhooks.',
            en: 'Express serves NutriDev’s interface and handles its backend. MySQL for data, Service Workers for offline support and Stripe for payments with webhooks.',
        },
    },
    {
        id: 'data', icon: IconDatabase, label: { es: 'Arquitectura y datos', en: 'Architecture and data' },
        technologies: ['Next.js', 'Prisma', 'Zod', 'Server Actions', 'PostgreSQL', 'Supabase', 'Vitest'],
        project: 'nodatix', projectLabelKey: 'projects.nodatix.title',
        example: {
            es: 'Backend por capas con Server Actions, Zod y Prisma. PostgreSQL y Supabase con RLS para aislar cada negocio; Vitest para validar las reglas del CRM.',
            en: 'Layered backend with Server Actions, Zod and Prisma. PostgreSQL and Supabase with RLS to isolate each business; Vitest to test the CRM’s rules.',
        },
    },
    {
        id: 'tools', icon: IconTools, label: { es: 'Backend y pruebas', en: 'Backend and testing' },
        technologies: ['Node.js', 'Node Native Test Runner'],
        project: 'mvpx-pos', projectLabelKey: 'projects.pos.title',
        example: {
            es: 'Componentes del backend para operaciones multiempresa y pruebas automatizadas con Node Native Test Runner, durante mi estadía en MVPX AI.',
            en: 'Backend components for multi-tenant operations and automated tests with Node Native Test Runner during my internship at MVPX AI.',
        },
    },
];

export function Technologies({ onSelectProject }: { onSelectProject: (id: string) => void }) {
    const { language, t } = useLanguage();
    const es = language === 'es';

    return (
        <section id="technologies" className={`${shared.section} ${styles.section}`} aria-labelledby="technologies-title">
            <div className={shared.sectionHeader} data-reveal>
                <div>
                    <p className={shared.eyebrow}>{es ? 'TECNOLOGÍAS' : 'TECHNOLOGIES'}</p>
                    <h2 id="technologies-title">{es ? 'Herramientas' : 'Tools'}<br /><span>{es ? 'que utilizo.' : 'I work with.'}</span></h2>
                </div>
                <p>{es ? 'Mi stack principal y las tecnologías que he utilizado en mis proyectos y formación.' : 'My main stack and the technologies I have used in projects and training.'}</p>
            </div>

            <div className={styles.primary}>
                <h3>{es ? 'Stack principal' : 'Main stack'}</h3>
                <TechnologyList names={primaryStack} />
            </div>

            <div className={styles.other}>
                <h3>{es ? 'Otras tecnologías que he utilizado' : 'Other technologies I have used'}</h3>
                <p>{es ? 'En otros proyectos y durante mi formación.' : 'Across other projects and during my training.'}</p>
                <TechnologyList names={otherTechnologies} className={styles.list} />
            </div>

            <h3 className={styles.appliedHeading}>{es ? 'Tecnologías aplicadas en proyectos' : 'Technologies used in projects'}</h3>
            <div className={styles.groups}>
                {groups.map(group => (
                    <div key={group.id} className={styles.group}>
                        <h3><group.icon size={20} stroke={1.5} aria-hidden="true" />{group.label[language]}</h3>
                        <TechnologyList names={group.technologies} className={styles.list} />
                        <div className={styles.example} data-reveal>
                            <h4>{es ? 'Cómo lo apliqué' : 'How I used it'}</h4>
                            <p>{group.example[language]}</p>
                            <a href="#projects" onClick={() => onSelectProject(group.project)}>{t(group.projectLabelKey)}<IconArrowUpRight size={15} aria-hidden="true" /></a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
