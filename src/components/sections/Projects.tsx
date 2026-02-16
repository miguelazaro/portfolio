'use client';

import { Container, Title, Text, SimpleGrid, Card, Image, Group, Badge, Button, rem, useMantineColorScheme, ActionIcon } from '@mantine/core';
import { IconBrandGithub, IconEye } from '@tabler/icons-react';
import { useLanguage } from '@/context/LanguageContext';
import { useState, useEffect } from 'react';
import { ProjectModal } from './ProjectModal';


interface Project {
    titleKey: string;
    descKey: string;
    descExtendedKey: string;
    images: string[];
    technologies: string[];
    modulesKey: string[];
    repoLink: string;
    date?: string;
}

const projectsDataConfig: Project[] = [
    {
        titleKey: 'projects.project1.title',
        descKey: 'projects.project1.desc',
        descExtendedKey: 'projects.project1.descExtended',
        images: ['/img/sistema-web-de-nutricion.webp'], 
        technologies: ['Express', 'JavaScript', 'Tailwind', 'MySQL', 'Mistral AI'],
        modulesKey: [
            'projects.project1.modules.0',
            'projects.project1.modules.1',
            'projects.project1.modules.2',
            'projects.project1.modules.3',
        ],
        repoLink: 'https://github.com/miguelazaro/NutriDev.git',
        date: '2024',
    },
    {
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
    },
    {
        titleKey: 'projects.project3.title',
        descKey: 'projects.project3.desc',
        descExtendedKey: 'projects.project3.descExtended',
        images: ['https://placehold.co/600x400/1a1b1e/cyan?text=Landing+Page'],
        technologies: ['Astro', 'Tailwind', 'Framer Motion'],
        modulesKey: [
            'projects.project3.modules.0',
            'projects.project3.modules.1',
        ],
        repoLink: '#',
        date: '2024',
    }
];

export function Projects() {
    const { t } = useLanguage();
    const { colorScheme } = useMantineColorScheme();
    const [mounted, setMounted] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [modalOpened, setModalOpened] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleProjectClick = (project: Project) => {
        setSelectedProject(project);
        setModalOpened(true);
    };
    
    return (
        <>
            <Container 
                size="lg" 
                py="xl" 
                mt={60} 
                id="projects"
                style={{ scrollMarginTop: '100px' }}
            >
                <Title order={2} ta="center" mb="xl">
                    {t('projects.title')} <Text span c="cyan" inherit>{t('projects.titleHighlight')}</Text>
                </Title>

                <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
                    {projectsDataConfig.map((project, index) => (
                        <Card
                            key={index}
                            shadow="sm"
                            padding="lg"
                            radius="md"
                            withBorder 
                            style={{
                                backgroundColor: mounted && colorScheme === 'light'
                                    ? 'rgba(255, 255, 255, 0.6)'
                                    : 'rgba(255, 255, 255, 0.03)',
                                backdropFilter: 'blur(10px)',
                                border: mounted && colorScheme === 'light'
                                    ? '1px solid rgba(0, 0, 0, 0.08)'
                                    : '1px solid rgba(255, 255, 255, 0.1)',
                                cursor: 'pointer',
                                transition: 'transform 0.2s, box-shadow 0.2s',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                e.currentTarget.style.boxShadow = '0 8px 20px rgba(34, 184, 207, 0.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '';
                            }}
                            onClick={() => handleProjectClick(project)}
                        > 
                            <Card.Section>
                                <Image
                                    src={project.images[0]}
                                    height={200}
                                    alt={t(project.titleKey)}
                                    fit="contain"
                                    style={{
                                        backgroundColor: 'rgba(0, 0, 0, 0.03)',
                                        padding: '10px',
                                    }}
                                />
                            </Card.Section>

                            <Group justify="space-between" mt="md" mb="xs">
                                <Text fw={500}>{t(project.titleKey)}</Text>
                            </Group>

                            <Text size="sm" c="dimmed" mb="md" style={{ minHeight: '60px' }}>
                                {t(project.descKey)}
                            </Text>

                            <Group gap="xs" mb="md">
                                {project.technologies.slice(0, 3).map((tech) => (
                                    <Badge key={tech} variant="light" color="cyan" radius="sm">
                                        {tech}
                                    </Badge>
                                ))}
                                {project.technologies.length > 3 && (
                                    <Badge variant="light" color="gray" radius="sm">
                                        +{project.technologies.length - 3}
                                    </Badge>
                                )}
                            </Group>

                            <Button
                                fullWidth
                                variant="light"
                                color="cyan"
                                leftSection={<IconEye size={18} />}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleProjectClick(project);
                                }}
                            >
                                {t('projects.viewDetails')}
                            </Button>
                        </Card>
                    ))}
                </SimpleGrid>
            </Container>

            {/* Modal de detalle */}
            {selectedProject && (
                <ProjectModal
                    opened={modalOpened}
                    onClose={() => setModalOpened(false)}
                    project={selectedProject}
                />
            )}
        </>
    );
}

export default Projects;