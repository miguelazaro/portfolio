'use client';

import { Modal, Image, Text, Badge, Group, Stack, Button, Divider, List, Title } from '@mantine/core';
import { IconBrandGithub, IconCalendar } from '@tabler/icons-react';
import { Carousel } from '@mantine/carousel';
import { useLanguage } from '@/context/LanguageContext';

interface ProjectModalProps {
    opened: boolean;
    onClose: () => void;
    project: {
        titleKey: string;
        descKey: string;
        descExtendedKey: string;
        images: string[];
        technologies: string[];
        modulesKey: string[];
        repoLink: string;
        date?: string;
    };
}

export function ProjectModal({ opened, onClose, project }: ProjectModalProps) {
    const { t } = useLanguage();

    return (
        <Modal
            opened={opened}
            onClose={onClose}
            size="xl"
            centered
            padding="xl"
            radius="md"
            title={
                <Title order={3} c="cyan">
                    {t(project.titleKey)}
                </Title>
            }
            overlayProps={{
                backgroundOpacity: 0.55,
                blur: 3,
            }}
        >
            <Stack gap="lg">
                {/* Carousel de imágenes */}
                <Carousel
                    withIndicators
                    withControls={project.images.length > 1}
                    styles={{
                        control: {
                            backgroundColor: 'rgba(34, 184, 207, 0.8)',
                            border: 'none',
                            '&:hover': {
                                backgroundColor: 'rgba(34, 184, 207, 1)',
                            },
                        },
                        indicator: {
                            backgroundColor: 'rgba(255, 255, 255, 0.4)',
                            '&[data-active]': {
                                backgroundColor: '#22b8cf',
                            },
                        },
                    }}
                >
                    {project.images.map((image, index) => (
                        <Carousel.Slide key={index}>
                            <Image
                                src={image}
                                height={300}
                                fit="contain"
                                alt={`${t(project.titleKey)} - Screenshot ${index + 1}`}
                                style={{
                                    backgroundColor: 'rgba(0, 0, 0, 0.05)',
                                    borderRadius: '8px',
                                }}
                            />
                        </Carousel.Slide>
                    ))}
                </Carousel>

                {/* Fecha */}
                {project.date && (
                    <Group gap="xs">
                        <IconCalendar size={18} style={{ color: '#22b8cf' }} />
                        <Text size="sm" c="dimmed">
                            {project.date}
                        </Text>
                    </Group>
                )}

                {/* Descripción extendida */}
                <div>
                    <Text fw={600} mb="xs">{t('projects.modal.about')}</Text>
                    <Text size="sm" c="dimmed">
                        {t(project.descExtendedKey)}
                    </Text>
                </div>

                <Divider />

                {/* Módulos / Características */}
                <div>
                    <Text fw={600} mb="xs">{t('projects.modal.modules')}</Text>
                    <List
                        spacing="xs"
                        size="sm"
                        center
                        icon={
                            <span style={{ color: '#22b8cf', fontSize: '1.2rem' }}>•</span>
                        }
                    >
                        {project.modulesKey.map((moduleKey, index) => (
                            <List.Item key={index}>
                                {t(moduleKey)}
                            </List.Item>
                        ))}
                    </List>
                </div>

                <Divider />

                {/* Tecnologías */}
                <div>
                    <Text fw={600} mb="xs">{t('projects.modal.technologies')}</Text>
                    <Group gap="xs">
                        {project.technologies.map((tech) => (
                            <Badge key={tech} variant="light" color="cyan" size="lg">
                                {tech}
                            </Badge>
                        ))}
                    </Group>
                </div>

                {/* Botón de repositorio */}
                <Button
                    component="a"
                    href={project.repoLink}
                    target="_blank"
                    variant="filled"
                    color="cyan"
                    size="md"
                    leftSection={<IconBrandGithub size={20} />}
                    fullWidth
                    mt="md"
                >
                    {t('projects.viewCode')}
                </Button>
            </Stack>
        </Modal>
    );
}
