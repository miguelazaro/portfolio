'use client';

import { Container, Title, Text, Grid, Paper, ThemeIcon, Group, Badge, useMantineColorScheme } from '@mantine/core';
import { IconCode, IconRocket, IconHeart, IconTrophy } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useState, useEffect } from 'react';

export function About() {
    const { t } = useLanguage();
    const { colorScheme } = useMantineColorScheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const values = [
        {
            icon: IconCode,
            title: t('about.value1'),
            description: t('about.value1Desc')
        },
        {
            icon: IconRocket,
            title: t('about.value2'),
            description: t('about.value2Desc')
        },
        {
            icon: IconHeart,
            title: t('about.value3'),
            description: t('about.value3Desc')
        },
        {
            icon: IconTrophy,
            title: t('about.value4'),
            description: t('about.value4Desc')
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <Container
            size="lg"
            py="xl"
            id="about"
            style={{
                marginTop: '-10px',
                scrollMarginTop: '100px'
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <Title order={2} ta="center" mb={50}>
                    {t('about.title')} <Text span c="cyan" inherit>{t('about.titleHighlight')}</Text>
                </Title>

                <Grid gutter="xl">
                    {/* Columna izquierda: Historia */}
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <Text size="lg" mb="md" fw={600} c="cyan">
                                {t('about.greeting')}
                            </Text>
                            <Text c="dimmed" mb="md" style={{ lineHeight: 1.8 }}>
                                {t('about.intro')}
                            </Text>
                            <Text c="dimmed" mb="md" style={{ lineHeight: 1.8 }}>
                                {t('about.skills')}
                            </Text>
                            <Text c="dimmed" mb="md" style={{ lineHeight: 1.8 }}>
                                {t('about.tools')}
                            </Text>
                            <Text c="dimmed" style={{ lineHeight: 1.8 }}>
                                {t('about.hobby')}
                            </Text>

                            <Group mt="xl" gap="xs">
                                <Badge size="lg" variant="light" color="cyan">React</Badge>
                                <Badge size="lg" variant="light" color="cyan">Next.js</Badge>
                                <Badge size="lg" variant="light" color="cyan">TypeScript</Badge>
                                <Badge size="lg" variant="light" color="blue">Node.js</Badge>
                                <Badge size="lg" variant="light" color="blue">Express</Badge>
                                <Badge size="lg" variant="light" color="violet">Tailwind</Badge>
                                <Badge size="lg" variant="light" color="green">MongoDB</Badge>
                            </Group>
                        </motion.div>
                    </Grid.Col>

                    {/* Columna derecha: Valores */}
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <Grid gutter="md">
                                {values.map((value, index) => (
                                    <Grid.Col key={index} span={6}>
                                        <motion.div
                                            variants={itemVariants}
                                            whileHover={{
                                                scale: 1.05,
                                                transition: { duration: 0.2 }
                                            }}
                                        >
                                            <Paper
                                                p="lg"
                                                radius="md"
                                                withBorder
                                                style={{
                                                    backgroundColor: mounted && colorScheme === 'light'
                                                        ? 'rgba(255, 255, 255, 0.6)'
                                                        : 'rgba(255, 255, 255, 0.03)',
                                                    backdropFilter: 'blur(10px)',
                                                    height: '100%',
                                                    minHeight: '200px',
                                                    border: mounted && colorScheme === 'light'
                                                        ? '1px solid rgba(0, 0, 0, 0.08)'
                                                        : '1px solid rgba(255, 255, 255, 0.1)',
                                                    transition: 'border-color 0.2s ease',
                                                    display: 'flex',
                                                    flexDirection: 'column'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.borderColor = 'rgba(34, 139, 230, 0.5)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.borderColor = mounted && colorScheme === 'light'
                                                        ? 'rgba(0, 0, 0, 0.08)'
                                                        : 'rgba(255, 255, 255, 0.1)';
                                                }}
                                            >
                                                <ThemeIcon
                                                    size={50}
                                                    radius="md"
                                                    variant="light"
                                                    color="cyan"
                                                    mb="sm"
                                                >
                                                    <value.icon size={28} />
                                                </ThemeIcon>
                                                <Text fw={600} size="sm" mb={5}>
                                                    {value.title}
                                                </Text>
                                                <Text size="xs" c="dimmed" style={{ lineHeight: 1.5 }}>
                                                    {value.description}
                                                </Text>
                                            </Paper>
                                        </motion.div>
                                    </Grid.Col>
                                ))}
                            </Grid>
                        </motion.div>
                    </Grid.Col>
                </Grid>
            </motion.div>
        </Container>
    );
}
