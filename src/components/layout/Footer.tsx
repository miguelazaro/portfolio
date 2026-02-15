'use client';

import { Container, Group, Text, ActionIcon, Box, useMantineColorScheme } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin, IconMail } from '@tabler/icons-react';
import { useState, useEffect } from 'react';

export function Footer() {
    const { colorScheme } = useMantineColorScheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <Box
            component="footer"
            py="xl"
            style={{
                borderTop: mounted && colorScheme === 'light' 
                    ? '1px solid rgba(0, 0, 0, 0.08)' 
                    : '1px solid rgba(255, 255, 255, 0.1)',
                backgroundColor: mounted && colorScheme === 'light' 
                    ? 'rgba(255, 255, 255, 0.4)' 
                    : 'rgba(0, 0, 0, 0.2)',
            }}
        >
            <Container size="lg">
                <Group justify="space-between" align="center" wrap="wrap">
                    <Text size="sm" c="dimmed">
                        © 2026 Miguel Ángel Lázaro. All rights reserved.
                    </Text>
                    
                    <Group gap="md">
                        <Group gap="xs" style={{ fontSize: '0.875rem', color: 'dimmed' }}>
                            <IconMail size={18} />
                            <Text size="sm" c="dimmed">
                                miguel.lazaro.2003@gmail.com
                            </Text>
                        </Group>
                        
                        <ActionIcon
                            component="a"
                            href="https://github.com/miguelazaro"
                            target="_blank"
                            variant="subtle"
                            color="gray"
                            size="lg"
                            radius="md"
                            aria-label="GitHub"
                        >
                            <IconBrandGithub size={22} />
                        </ActionIcon>
                        
                        <ActionIcon
                            component="a"
                            href="https://www.linkedin.com/in/miguel-lazaro-dev/"
                            target="_blank"
                            variant="subtle"
                            color="blue"
                            size="lg"
                            radius="md"
                            aria-label="LinkedIn"
                        >
                            <IconBrandLinkedin size={22} />
                        </ActionIcon>
                    </Group>
                </Group>
            </Container>
        </Box>
    );
}
