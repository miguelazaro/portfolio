'use client';

import { ActionIcon, useMantineColorScheme, Tooltip } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';
import { useLanguage } from '@/context/LanguageContext';
import { useState, useEffect } from 'react';

export function ThemeToggle() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const { t } = useLanguage();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Evitar error de hydratación mostrando un placeholder hasta que esté montado
    if (!mounted) {
        return (
            <ActionIcon
                size="lg"
                variant="default"
                radius="xl"
                aria-label="Toggle theme"
                style={{
                    transition: 'transform 0.2s ease',
                }}
            >
                <IconMoon size={18} stroke={1.5} />
            </ActionIcon>
        );
    }

    return (
        <Tooltip 
            label={colorScheme === 'dark' ? t('nav.lightMode') : t('nav.darkMode')} 
            withArrow 
            position="bottom"
            transitionProps={{ duration: 200 }}
        >
            <ActionIcon
                onClick={() => toggleColorScheme()}
                size="lg"
                variant="default"
                radius="xl"
                aria-label="Toggle theme"
                style={{
                    transition: 'transform 0.2s ease',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                }}
            >
                {colorScheme === 'dark' ? (
                    <IconSun size={18} stroke={1.5} />
                ) : (
                    <IconMoon size={18} stroke={1.5} />
                )}
            </ActionIcon>
        </Tooltip>
    );
}
