'use client';

import { useState, useEffect } from 'react';
import { Button, Paper, Text, Group, ActionIcon } from '@mantine/core';
import { IconDownload, IconX } from '@tabler/icons-react';

export function InstallPrompt() {
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
    const [showPrompt, setShowPrompt] = useState(false);

    useEffect(() => {
        const wasPromptDismissed = localStorage.getItem('pwa-prompt-dismissed');
        const isInstalled = window.matchMedia('(display-mode: standalone)').matches;

        if (wasPromptDismissed || isInstalled) {
            return;
        }

        // Listener para el evento beforeinstallprompt
        const handler = (e: any) => {
            e.preventDefault();
            setDeferredPrompt(e);
            setShowPrompt(true);
        };

        window.addEventListener('beforeinstallprompt', handler);

        return () => {
            window.removeEventListener('beforeinstallprompt', handler);
        };
    }, []);

    const handleInstall = async () => {
        if (!deferredPrompt) return;

        // Mostrar prompt de instalación nativo
        deferredPrompt.prompt();

        // Esperar la respuesta del usuario
        const { outcome } = await deferredPrompt.userChoice;

        console.log(`[PWA] Usuario ${outcome === 'accepted' ? 'aceptó' : 'rechazó'} la instalación`);

        // Limpiar
        setDeferredPrompt(null);
        setShowPrompt(false);
    };

    const handleDismiss = () => {
        localStorage.setItem('pwa-prompt-dismissed', 'true');
        setShowPrompt(false);
    };

    if (!showPrompt) return null;

    return (
        <Paper
            shadow="lg"
            radius="lg"
            p="md"
            withBorder
            style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                maxWidth: '350px',
                zIndex: 9998,
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(0, 0, 0, 0.08)',
            }}
        >
            <Group justify="space-between" mb="sm">
                <Text fw={600} size="sm" c="dark">
                    Instalar Portafolio
                </Text>
                <ActionIcon
                    variant="subtle"
                    color="gray"
                    onClick={handleDismiss}
                    size="sm"
                >
                    <IconX size={16} />
                </ActionIcon>
            </Group>

            <Text size="xs" c="dimmed" mb="md">
                Accede más rápido y funciona offline. Sin consumir espacio.
            </Text>

            <Button
                fullWidth
                variant="filled"
                color="cyan"
                leftSection={<IconDownload size={18} />}
                onClick={handleInstall}
                size="sm"
            >
                Instalar App
            </Button>
        </Paper>
    );
}

export default InstallPrompt;
