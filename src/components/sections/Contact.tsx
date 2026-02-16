'use client';

import { Container, Title, Text, TextInput, Textarea, Button, Group, Paper, rem, Notification, useMantineColorScheme, Stack } from '@mantine/core';
import { IconSend, IconCheck, IconX } from '@tabler/icons-react';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export function Contact() {
    const { t } = useLanguage();
    const { colorScheme } = useMantineColorScheme();
    const [mounted, setMounted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        suggestions: ''
    });

    useEffect(() => {
        setMounted(true);
    }, []);
    const [loading, setLoading] = useState(false);
    const [notification, setNotification] = useState<{ type: 'success' | 'error', message: string } | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setNotification(null);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                setNotification({ 
                    type: 'success', 
                    message: t('contact.success')
                });
                setFormData({ name: '', email: '', message: '', suggestions: '' }); // Limpiar formulario
            } else {
                setNotification({ 
                    type: 'error', 
                    message: data.error || t('contact.error')
                });
            }
        } catch (error) {
            setNotification({ 
                type: 'error', 
                message: t('contact.errorConnection')
            });
        } finally {
            setLoading(false);
            // Ocultar notificación después de 5 segundos
            setTimeout(() => setNotification(null), 5000);
        }
    };

    const handleChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };
    
    return (
        <Container 
            size="md" 
            py="xl" 
            mt={40} 
            mb={60} 
            id="contact"
            style={{ scrollMarginTop: '100px' }}
        >
            <Title order={2} mb="sm" ta="center">
                {t('contact.title')} <Text span c="cyan" inherit>{t('contact.titleHighlight')}</Text>
            </Title>
            <Text c="dimmed" mb="md" ta="center" maw={500} mx="auto">
                {t('contact.description')}
            </Text>
            <Text c="dimmed" size="sm" ta="center" mb="xl">
                miguel.lazaro.2003@gmail.com
            </Text>

            <Paper
                shadow="xl"
                radius="lg"
                p={{ base: 'lg', sm: 'xl' }}
                withBorder
                maw={600}
                mx="auto"
                style={{
                    backgroundColor: mounted && colorScheme === 'light' ? 'rgba(255, 255, 255, 0.6)' : 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(10px)',
                    border: mounted && colorScheme === 'light' ? '1px solid rgba(0, 0, 0, 0.08)' : '1px solid rgba(255, 255, 255, 0.1)',
                }}
            >
                {notification && (
                    <Notification
                        icon={notification.type === 'success' ? <IconCheck size={18} /> : <IconX size={18} />}
                        color={notification.type === 'success' ? 'teal' : 'red'}
                        title={notification.type === 'success' ? 'Éxito' : 'Error'}
                        mb="md"
                        onClose={() => setNotification(null)}
                    >
                        {notification.message}
                    </Notification>
                )}

                <form onSubmit={handleSubmit}>
                    <TextInput
                        label={t('contact.name')}
                        placeholder={t('contact.namePlaceholder')}
                        variant="filled"
                        radius="md"
                        mb="sm"
                        required
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        styles={{ 
                            input: { 
                                backgroundColor: !mounted || colorScheme === 'dark' ? 'rgba(0,0,0, 0.3)' : 'rgba(255, 255, 255, 0.7)',
                                borderColor: !mounted || colorScheme === 'dark' ? 'transparent' : 'rgba(0,0,0,0.08)',
                                color: mounted && colorScheme === 'light' ? '#2d3748' : undefined
                            } 
                        }}
                    />
                    <TextInput
                        label={t('contact.email')}
                        placeholder={t('contact.emailPlaceholder')}
                        variant="filled"
                        radius="md"
                        mb="sm"
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        styles={{ 
                            input: { 
                                backgroundColor: !mounted || colorScheme === 'dark' ? 'rgba(0,0,0, 0.3)' : 'rgba(255, 255, 255, 0.7)',
                                borderColor: !mounted || colorScheme === 'dark' ? 'transparent' : 'rgba(0,0,0,0.08)',
                                color: mounted && colorScheme === 'light' ? '#2d3748' : undefined
                            } 
                        }}
                    />
                    <Textarea
                        label={t('contact.message')}
                        placeholder={t('contact.messagePlaceholder')}
                        variant="filled"
                        radius="md"
                        minRows={4}
                        mb="sm"
                        required
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        styles={{ 
                            input: { 
                                backgroundColor: !mounted || colorScheme === 'dark' ? 'rgba(0,0,0, 0.3)' : 'rgba(255, 255, 255, 0.7)',
                                borderColor: !mounted || colorScheme === 'dark' ? 'transparent' : 'rgba(0,0,0,0.08)',
                                color: mounted && colorScheme === 'light' ? '#2d3748' : undefined
                            } 
                        }}
                    />

                    {/* Campo opcional de sugerencias */}
                    <Stack gap="xs" mt="lg" mb="md">
                        <div>
                            <Text size="sm" fw={600} mb="xs">
                                {t('contact.suggestionsTitle')}
                            </Text>
                            <Text size="xs" c="dimmed" mb="sm">
                                {t('contact.suggestionsSubtitle')}
                            </Text>
                        </div>
                        <Textarea
                            variant="filled"
                            radius="md"
                            minRows={3}
                            value={formData.suggestions}
                            onChange={(e) => handleChange('suggestions', e.target.value)}
                            styles={{ 
                                input: { 
                                    backgroundColor: !mounted || colorScheme === 'dark' ? 'rgba(0,0,0, 0.3)' : 'rgba(255, 255, 255, 0.7)',
                                    borderColor: !mounted || colorScheme === 'dark' ? 'transparent' : 'rgba(0,0,0,0.08)',
                                    color: mounted && colorScheme === 'light' ? '#2d3748' : undefined
                                } 
                            }}
                        />
                    </Stack>

                    <Group justify="flex-end" mt="sm">
                        <Button
                            type="submit"
                            size="md"
                            color="cyan"
                            radius="md"
                            rightSection={<IconSend size={18} />}
                            loading={loading}
                            disabled={loading}
                        >
                            {loading ? t('contact.sending') : t('contact.send')}
                        </Button>
                    </Group>
                </form>
            </Paper>
        </Container>
    );
}