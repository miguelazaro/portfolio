'use client';

import { Group, Button, Box, rem, Tooltip, Text, Divider, useMantineColorScheme } from '@mantine/core';
import { IconHome, IconUser, IconBriefcase, IconCode, IconMail } from '@tabler/icons-react';
import { useState, useEffect } from 'react';
import { ThemeToggle, LanguageToggle } from '../ui';
import { useLanguage } from '@/context/LanguageContext';

export function Navbar() {
    const { t } = useLanguage();
    const { colorScheme } = useMantineColorScheme();
    const [active, setActive] = useState('home');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActive(id);
        } else if (id === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setActive('home');
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
                setActive('contact');
                return;
            }

            const sections = ['about', 'projects', 'experience', 'contact'];
            let current = 'home';

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 300) {
                        current = section;
                    }
                }
            }
            setActive(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getButtonProps = (section: string) => {
        const isActive = active === section;
        return {
            variant: isActive ? 'filled' : 'subtle',
            color: isActive ? 'cyan' : 'gray',
            style: {
                color: isActive 
                    ? 'white' 
                    : (mounted && colorScheme === 'light' ? '#495057' : '#C1C2C5'),
                transition: 'all 0.3s ease'
            }
        };
    };

    return (
        <Box
            style={{
                position: 'fixed',
                top: rem(12),
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 9999,
                backgroundColor: mounted && colorScheme === 'light'
                    ? 'rgba(255, 255, 255, 0.95)'
                    : 'rgba(26, 27, 30, 0.95)',
                backdropFilter: 'blur(12px)',
                borderRadius: rem(50),
                padding: '4px 6px',
                border: mounted && colorScheme === 'light'
                    ? '1px solid rgba(0, 0, 0, 0.08)'
                    : '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: mounted && colorScheme === 'light'
                    ? '0 4px 20px rgba(0, 0, 0, 0.1)'
                    : '0 4px 20px rgba(0, 0, 0, 0.5)',
                width: 'max-content',
                maxWidth: '95vw',
                overflowX: 'auto'
            }}
        >
            <Group gap={3} wrap="nowrap">

                {/* INICIO */}
                <Tooltip label={t('nav.home')} withArrow position="bottom" transitionProps={{ duration: 200 }}>
                    <Button
                        size="xs"
                        radius="xl"
                        px={6}
                        onClick={() => scrollTo('home')}
                        {...getButtonProps('home')}
                    >
                        <IconHome size={16} stroke={1.5} />
                    </Button>
                </Tooltip>

                {/* SOBRE MÍ */}
                <Tooltip label={t('nav.about')} withArrow position="bottom" transitionProps={{ duration: 200 }}>
                    <Button
                        size="xs"
                        radius="xl"
                        px={{ base: 6, sm: 8 }}
                        onClick={() => scrollTo('about')}
                        {...getButtonProps('about')}
                    >
                        <IconUser size={14} stroke={1.5} />
                        <Text span size="xs" fw={500} display={{ base: 'none', sm: 'inline' }} ml={4}>{t('nav.about')}</Text>
                    </Button>
                </Tooltip>

                {/* PROYECTOS */}
                <Tooltip label={t('nav.projects')} withArrow position="bottom" transitionProps={{ duration: 200 }}>
                    <Button
                        size="xs"
                        radius="xl"
                        px={{ base: 6, sm: 8 }}
                        onClick={() => scrollTo('projects')}
                        {...getButtonProps('projects')}
                    >
                        <IconCode size={14} stroke={1.5} />
                        <Text span size="xs" fw={500} display={{ base: 'none', sm: 'inline' }} ml={4}>{t('nav.projects')}</Text>
                    </Button>
                </Tooltip>

                {/* EXPERIENCIA */}
                <Tooltip label={t('nav.experience')} withArrow position="bottom" transitionProps={{ duration: 200 }}>
                    <Button
                        size="xs"
                        radius="xl"
                        px={{ base: 6, sm: 8 }}
                        onClick={() => scrollTo('experience')}
                        {...getButtonProps('experience')}
                    >
                        <IconBriefcase size={14} stroke={1.5} />
                        <Text span size="xs" fw={500} display={{ base: 'none', sm: 'inline' }} ml={4}>{t('nav.experience')}</Text>
                    </Button>
                </Tooltip>

                {/* CONTACTO */}
                <Tooltip label={t('nav.contact')} withArrow position="bottom" transitionProps={{ duration: 200 }}>
                    <Button
                        size="xs"
                        radius="xl"
                        px={{ base: 6, sm: 8 }}
                        onClick={() => scrollTo('contact')}
                        {...getButtonProps('contact')}
                    >
                        <IconMail size={14} stroke={1.5} />
                        <Text span size="xs" fw={500} display={{ base: 'none', sm: 'inline' }} ml={4}>{t('nav.contact')}</Text>
                    </Button>
                </Tooltip>

                {/* SEPARADOR */}
                <Divider orientation="vertical" style={{ height: 24, margin: '0 4px' }} />

                {/* LANGUAGE TOGGLE */}
                <LanguageToggle />

                {/* THEME TOGGLE */}
                <ThemeToggle />
            </Group>
        </Box>
    );
}