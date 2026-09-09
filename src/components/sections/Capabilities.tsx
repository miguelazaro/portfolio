'use client';

import { Container, Title, Text, SimpleGrid, Paper, ThemeIcon, useComputedColorScheme } from '@mantine/core';
import { IconLayoutDashboard, IconWorldWww, IconChartBar, IconDeviceMobile, IconApi } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const capabilityItems = [
    { icon: IconLayoutDashboard, titleKey: 'capabilities.item1.title', descKey: 'capabilities.item1.desc' },
    { icon: IconWorldWww,        titleKey: 'capabilities.item2.title', descKey: 'capabilities.item2.desc' },
    { icon: IconChartBar,        titleKey: 'capabilities.item3.title', descKey: 'capabilities.item3.desc' },
    { icon: IconDeviceMobile,    titleKey: 'capabilities.item4.title', descKey: 'capabilities.item4.desc' },
    { icon: IconApi,             titleKey: 'capabilities.item5.title', descKey: 'capabilities.item5.desc' },
];

export function Capabilities() {
    const { t } = useLanguage();
    const colorScheme = useComputedColorScheme('dark', { getInitialValueInEffect: true });
    const isDark = colorScheme === 'dark';

    return (
        <Container size="lg" py="xl" mt={40} id="capabilities">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <Title order={2} ta="center" mb="xl">
                    {t('capabilities.title')}{' '}
                    <Text span c="orange.6" inherit>{t('capabilities.titleHighlight')}</Text>
                </Title>

                <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 5 }} spacing="md">
                    {capabilityItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                        >
                            <Paper
                                p="md"
                                radius="md"
                                withBorder
                                ta="center"
                                style={{
                                    backgroundColor: isDark ? '#1B1B1B' : 'rgba(255, 255, 255, 0.6)',
                                    backdropFilter: 'blur(10px)',
                                    border: isDark ? '1px solid #2B2B2B' : '1px solid rgba(0, 0, 0, 0.08)',
                                    height: '100%',
                                    transition: 'border-color 0.2s ease',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = '#E66A2C';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = isDark
                                        ? '#2B2B2B'
                                        : 'rgba(0, 0, 0, 0.08)';
                                }}
                            >
                                <ThemeIcon
                                    size={44}
                                    radius="md"
                                    variant="light"
                                    color="orange"
                                    mb="sm"
                                    mx="auto"
                                    style={{
                                        border: !isDark ? '1px solid rgba(230, 106, 44, 0.45)' : undefined,
                                    }}
                                >
                                    <item.icon size={24} />
                                </ThemeIcon>
                                <Text fw={600} size="sm" mb={6}>
                                    {t(item.titleKey)}
                                </Text>
                                <Text size="xs" c="dimmed" style={{ lineHeight: 1.5 }}>
                                    {t(item.descKey)}
                                </Text>
                            </Paper>
                        </motion.div>
                    ))}
                </SimpleGrid>
            </motion.div>
        </Container>
    );
}

export default Capabilities;
