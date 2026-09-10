export interface Project {
    id: string;
    titleKey: string;
    descKey: string;
    descExtendedKey: string;
    // First image is the cover; additional images appear in the project's gallery.
    images: string[];
    technologies: string[];
    modulesKey: string[];
    repoLink?: string;
    coverLabelKey?: string;
    date?: string;
    statusKey?: string;
    roleKey?: string;
}

// Keep missing captures and links empty until the project's real assets are available.
export const projectsDataConfig: Project[] = [
    {
        id: 'nodatix',
        titleKey: 'projects.nodatix.title',
        descKey: 'projects.nodatix.desc',
        descExtendedKey: 'projects.nodatix.descExtended',
        images: ["/img/crm_pasteleria_image.webp"],
        coverLabelKey: 'projects.nodatix.coverLabel',
        repoLink: 'https://github.com/miguelazaro/crm-pasteleria',
        technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Supabase', 'Zod', 'Vitest', 'WhatsApp Cloud API'],
        modulesKey: [
            'projects.nodatix.modules.0',
            'projects.nodatix.modules.1',
            'projects.nodatix.modules.2',
            'projects.nodatix.modules.3',
            'projects.nodatix.modules.4',
        ],
        date: '04/2026 – 08/2026',
        statusKey: 'projects.category.professional',
        roleKey: 'projects.nodatix.role',
    },
    {
        id: 'evenrent',
        titleKey: 'projects.evenrent.title',
        descKey: 'projects.evenrent.desc',
        descExtendedKey: 'projects.evenrent.descExtended',
        images: ["/img/evenrent_image.webp"],
        coverLabelKey: 'projects.evenrent.coverLabel',
        repoLink: 'https://github.com/miguelazaro/evenrent',
        technologies: ['Next.js', 'TypeScript', 'tRPC', 'Prisma', 'PostgreSQL'],
        modulesKey: [
            'projects.evenrent.modules.0',
            'projects.evenrent.modules.1',
            'projects.evenrent.modules.2',
        ],
    },
    {
        id: 'presta-prenda',
        titleKey: 'projects.project4.title',
        descKey: 'projects.project4.desc',
        descExtendedKey: 'projects.project4.descExtended',
        images: ['/img/presta_prenda_img.webp'],
        coverLabelKey: 'projects.project4.coverLabel',
        technologies: ['React', 'TypeScript', 'Zustand', 'React Query'],
        modulesKey: [
            'projects.project4.modules.0',
            'projects.project4.modules.1',
            'projects.project4.modules.2',
        ],
        date: '01/2026 – 04/2026',
        statusKey: 'projects.category.professional',
        roleKey: 'projects.project4.role',
    },
    {
        id: 'mvpx-pos',
        titleKey: 'projects.pos.title',
        descKey: 'projects.pos.desc',
        descExtendedKey: 'projects.pos.descExtended',
        images: ['/img/sistema_pos_image.webp'],
        coverLabelKey: 'projects.pos.coverLabel',
        repoLink: 'https://github.com/KalioPacheco/point-of-sale-POS',
        technologies: ['Node.js', 'Node Native Test Runner'],
        modulesKey: [
            'projects.pos.modules.0',
            'projects.pos.modules.1',
            'projects.pos.modules.2',
        ],
        date: '01/2026 – 04/2026',
        statusKey: 'projects.category.professional',
        roleKey: 'projects.pos.role',
    },
    {
        id: 'nutridev',
        titleKey: 'projects.project1.title',
        descKey: 'projects.project1.desc',
        descExtendedKey: 'projects.project1.descExtended',
        images: ['/img/sistema-web-de-nutricion.webp'],
        technologies: ['Express', 'Node.js', 'JavaScript', 'Tailwind', 'MySQL', 'Mistral AI', 'Service Workers', 'Stripe API'],
        modulesKey: [
            'projects.project1.modules.0',
            'projects.project1.modules.1',
            'projects.project1.modules.2',
            'projects.project1.modules.3',
            'projects.project1.modules.4',
            'projects.project1.modules.5',
        ],
        repoLink: 'https://github.com/miguelazaro/NutriDev.git',
        date: '2024',
        statusKey: 'projects.category.academic',
        roleKey: 'projects.project1.role',
    },
    {
        id: 'offline-tasks',
        titleKey: 'projects.project2.title',
        descKey: 'projects.project2.desc',
        descExtendedKey: 'projects.project2.descExtended',
        images: ['/img/awp.webp'],
        technologies: ['React', 'Redux', 'Node.js', 'MongoDB'],
        modulesKey: [
            'projects.project2.modules.0',
            'projects.project2.modules.1',
            'projects.project2.modules.2',
        ],
        repoLink: 'https://github.com/miguelazaro/pwa-lazaro.git',
        date: '2024',
        statusKey: 'projects.category.academic',
        roleKey: 'projects.project2.role',
    },
];
