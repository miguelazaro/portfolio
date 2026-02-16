'use client';

import { ActionIcon, Tooltip, rem } from '@mantine/core';
import { IconBrandWhatsapp } from '@tabler/icons-react';
import { useState, useEffect } from 'react';

export function WhatsAppButton() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const footer = document.querySelector('footer');
            if (footer) {
                const footerRect = footer.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                // Ocultar cuando el footer es visible
                setIsVisible(footerRect.top > windowHeight - 100);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <div
            style={{
                position: 'fixed',
                bottom: rem(30),
                right: rem(30),
                zIndex: 9999
            }}
        >
            <Tooltip label="¿Hablamos?" withArrow position="left" color="dark">
                <ActionIcon
                    component="a"
                    href="https://wa.me/2382485234"
                    target="_blank"
                    size={60}
                    radius="xl"
                    variant="filled"
                    aria-label="Contactar por WhatsApp"
                    style={{
                        backgroundColor: '#25D366', 
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)', 
                        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                        border: '1px solid rgba(255,255,255,0.1)'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1)';
                        e.currentTarget.style.boxShadow = '0 6px 16px rgba(37, 211, 102, 0.4)'; 
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
                    }}
                >
                    <IconBrandWhatsapp size={32} stroke={1.5} color="white" />
                </ActionIcon>
            </Tooltip>
        </div>
    );
}