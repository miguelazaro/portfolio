'use client';

import { Container, Title, Text, Timeline as MantineTimeline, Badge, Group } from '@mantine/core';
import { IconBriefcase, IconSchool, IconCertificate } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export function Experience() {
    const { t } = useLanguage();
    
    const experiences = [
        {
            type: 'work',
            icon: IconBriefcase,
            title: t('experience.freelance'),
            company: 'Proyectos Independientes',
            period: '2024 - Presente',
            description: t('experience.freelanceDesc'),
            technologies: ['React', 'Next.js', 'TypeScript', 'Node.js']
        },
        {
            type: 'education',
            icon: IconSchool,
            title: t('experience.degree'),
            company: 'Universidad',
            period: '2021 - Presente',
            description: t('experience.degreeDesc'),
            technologies: ['Algoritmos', 'Bases de Datos', 'Desarrollo Web']
        },
        {
            type: 'certification',
            icon: IconCertificate,
            title: t('experience.cert1'),
            company: 'Plataformas de Aprendizaje',
            period: '2023 - 2024',
            description: t('experience.cert1Desc'),
            technologies: ['React', 'Next.js', 'Full Stack Development']
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { x: -50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <Container 
            size="lg" 
            py="xl" 
            mt={60} 
            id="experience"
            style={{ scrollMarginTop: '100px' }}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <Title order={2} ta="center" mb={50}>
                    {t('experience.title')} <Text span c="cyan" inherit>{t('experience.titleHighlight')}</Text>
                </Title>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <MantineTimeline active={experiences.length} bulletSize={40} lineWidth={2} color="cyan">
                        {experiences.map((exp, index) => (
                            <MantineTimeline.Item
                                key={index}
                                bullet={<exp.icon size={20} />}
                                title={
                                    <motion.div variants={itemVariants}>
                                        <Group gap="xs" mb="xs">
                                            <Text fw={700} size="lg">{exp.title}</Text>
                                        </Group>
                                        <Text size="sm" c="dimmed" mb={5}>
                                            {exp.company} • {exp.period}
                                        </Text>
                                    </motion.div>
                                }
                            >
                                <motion.div variants={itemVariants}>
                                    <Text c="dimmed" size="sm" mb="md" style={{ lineHeight: 1.7 }}>
                                        {exp.description}
                                    </Text>
                                    <Group gap="xs">
                                        {exp.technologies.map((tech) => (
                                            <Badge 
                                                key={tech} 
                                                variant="light" 
                                                color="cyan" 
                                                size="sm"
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </Group>
                                </motion.div>
                            </MantineTimeline.Item>
                        ))}
                    </MantineTimeline>
                </motion.div>
            </motion.div>
        </Container>
    );
}
