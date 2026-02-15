'use client';

import { Container, Title, Text, Button, Group, Badge } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin, IconFileCv } from '@tabler/icons-react';
import { useLanguage } from '@/context/LanguageContext';

export function Hero() {
    const { t } = useLanguage();
    
    return (

        <Container 
            size="lg" 
            style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'center',
                minHeight: 'calc(100vh - 80px)', 
                paddingTop: '80px',
                paddingBottom: '40px',
            }}
        >

            <div style={{
                position: 'absolute',
                top: '20%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '300px',
                height: '300px',
                background: 'rgba(34, 139, 230, 0.2)', 
                filter: 'blur(100px)', 
                borderRadius: '50%',
                zIndex: -1
            }} />

            <Badge variant="filled" color="dark" size="md" radius="xl" mb="md">
                {t('hero.available')}
            </Badge>

            <Title 
                order={1} 
                style={{ 
                    fontSize: 'clamp(2.5rem, 8vw, 4rem)', 
                    fontWeight: 900, 
                    textAlign: 'center', 
                    lineHeight: 1.1 
                }}
            >
                Miguel<Text span c="cyan" inherit> Ángel Lazaro</Text>
            </Title>

            <Title 
                order={2} 
                c="dimmed" 
                style={{ 
                    fontSize: 'clamp(1.2rem, 4.5vw, 2.5rem)', 
                    textAlign: 'center', 
                    marginTop: 10 
                }}
            >
                {t('hero.title')}
            </Title>

            <Text 
                c="dimmed" 
                ta="center" 
                mt="md" 
                maw={600}
                style={{
                    fontSize: 'clamp(0.9rem, 2vw, 1.125rem)', // Responsive: más pequeño en móvil
                    lineHeight: 1.5,
                    paddingInline: '1rem' 
                }}
            >
                {t('hero.description')}
            </Text>

            <Group mt="lg" gap="sm">
                <Button 
                    size="md" 
                    color="cyan" 
                    radius="md" 
                    leftSection={<IconFileCv size={18} />}
                    component="a"
                    href="/cv/cv_miguel_lazaro.pdf#toolbar=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ flex: '1 1 auto', minWidth: 'fit-content' }}
                >
                    {t('hero.cv')}
                </Button>
                <Button
                    size="md"
                    variant="default"
                    radius="md"
                    leftSection={<IconBrandGithub size={18} />}
                    component="a"
                    href="https://github.com/miguelazaro"
                    target="_blank"
                    style={{ flex: '1 1 auto', minWidth: 'fit-content' }}
                >
                    {t('hero.github')}
                </Button>
                <Button
                    size="md"
                    variant="default"
                    radius="md"
                    leftSection={<IconBrandLinkedin size={18} />}
                    component="a"
                    href="https://www.linkedin.com/in/miguel-lazaro-dev/"
                    target="_blank"
                    style={{ flex: '1 1 auto', minWidth: 'fit-content' }}
                >
                    {t('hero.linkedin')}
                </Button>
            </Group>
        </Container>
    );
}