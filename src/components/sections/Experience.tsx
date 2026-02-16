'use client';

import { Container, Title, Text, Timeline as MantineTimeline, Badge, Group, Box } from '@mantine/core';
import { IconBriefcase, IconSchool, IconCertificate } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export function Experience() {
    const { t } = useLanguage();
    
    const experiences = [
        {
            type: 'education',
            icon: IconSchool,
            title: 'Ingeniería en Desarrollo y Gestión de Software',
            company: 'Universidad Tecnológica de Tehuacán',
            period: t('experience.currentDegree'),
            description: 'San Pablo Tepetzingo, Puebla',
            technologies: ['Desarrollo Full Stack', 'Gestión de Software', 'Arquitectura']
        },
        {
            type: 'education',
            icon: IconSchool,
            title: 'TSU en Tecnologías de la Información Área DSM',
            company: 'Universidad Tecnológica de Tehuacán',
            period: '2022 - 2024',
            description: 'San Pablo Tepetzingo',
            technologies: ['Desarrollo de Software', 'Bases de Datos', 'Programación']
        },
        {
            type: 'certification',
            icon: IconCertificate,
            title: 'Certificado en Tester',
            company: 'Capacítate para el Empleo, Fundación Carlos Slim',
            period: '2023',
            description: t('experience.testerDesc'),
            technologies: ['Testing', 'QA', 'Control de Calidad']
        },
        {
            type: 'certification',
            icon: IconCertificate,
            title: 'Constancia de Gamer a Experto AWS',
            company: 'NECTEC',
            period: '2023',
            description: t('experience.awsDesc'),
            technologies: ['AWS', 'Cloud Computing', 'Servicios en la Nube']
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
                    <Box maw={900} mx="auto" pl={{ base: 0, sm: 40, md: 80, lg: 120 }} pr={{ base: 0, sm: 'md' }}>
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
                    </Box>
                </motion.div>
            </motion.div>
        </Container>
    );
}

export default Experience;
