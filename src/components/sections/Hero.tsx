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
                className="animated-text"
                style={{ 
                    fontSize: 'clamp(2.5rem, 8vw, 4rem)', 
                    fontWeight: 900, 
                    textAlign: 'center'
                }}
            >
                Miguel Ángel Lazaro
            </Title>

            <Title 
                order={2} 
                className="animated-text subtitle"
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
                    href="/cv/Resume-cv.pdf#toolbar=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ 
                        flex: '1 1 auto', 
                        minWidth: 'fit-content',
                        position: 'relative',
                        transition: 'all 0.3s ease'
                    }}
                    styles={{
                        root: {
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'linear-gradient(135deg, #22b8cf, #15aabf)',
                                borderRadius: '8px',
                                opacity: 0,
                                zIndex: -1,
                                transition: 'all 0.3s ease',
                                transform: 'scale(0.9)',
                            },
                            '&:hover::before': {
                                opacity: 0.5,
                                transform: 'scale(1.05) translateY(4px)',
                                filter: 'blur(8px)',
                            },
                            '&:hover': {
                                transform: 'translateY(-2px)',
                            }
                        }
                    }}
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
                    style={{ 
                        flex: '1 1 auto', 
                        minWidth: 'fit-content',
                        position: 'relative',
                        transition: 'all 0.3s ease'
                    }}
                    styles={{
                        root: {
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'rgba(128, 128, 128, 0.3)',
                                borderRadius: '8px',
                                opacity: 0,
                                zIndex: -1,
                                transition: 'all 0.3s ease',
                                transform: 'scale(0.9)',
                            },
                            '&:hover::before': {
                                opacity: 1,
                                transform: 'scale(1.05) translateY(4px)',
                                filter: 'blur(8px)',
                            },
                            '&:hover': {
                                transform: 'translateY(-2px)',
                            }
                        }
                    }}
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
                    style={{ 
                        flex: '1 1 auto', 
                        minWidth: 'fit-content',
                        position: 'relative',
                        transition: 'all 0.3s ease'
                    }}
                    styles={{
                        root: {
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'rgba(0, 119, 181, 0.3)',
                                borderRadius: '8px',
                                opacity: 0,
                                zIndex: -1,
                                transition: 'all 0.3s ease',
                                transform: 'scale(0.9)',
                            },
                            '&:hover::before': {
                                opacity: 1,
                                transform: 'scale(1.05) translateY(4px)',
                                filter: 'blur(8px)',
                            },
                            '&:hover': {
                                transform: 'translateY(-2px)',
                            }
                        }
                    }}
                >
                    {t('hero.linkedin')}
                </Button>
            </Group>
        </Container>
    );
}