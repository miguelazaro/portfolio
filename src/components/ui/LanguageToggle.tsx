'use client';

import { ActionIcon, Tooltip, Menu } from '@mantine/core';
import { IconLanguage } from '@tabler/icons-react';
import { useLanguage } from '@/context/LanguageContext';

export function LanguageToggle() {
    const { language, setLanguage } = useLanguage();

    return (
        <Menu shadow="md" width={120} position="bottom-end">
            <Menu.Target>
                <Tooltip 
                    label={language === 'es' ? 'Idioma' : 'Language'} 
                    withArrow 
                    position="bottom"
                    transitionProps={{ duration: 200 }}
                >
                    <ActionIcon
                        size="lg"
                        variant="default"
                        radius="xl"
                        aria-label="Change language"
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
                        <IconLanguage size={18} stroke={1.5} />
                    </ActionIcon>
                </Tooltip>
            </Menu.Target>

            <Menu.Dropdown>
                <Menu.Item
                    onClick={() => setLanguage('es')}
                    style={{ 
                        backgroundColor: language === 'es' ? 'rgba(34, 139, 230, 0.1)' : 'transparent',
                        fontWeight: language === 'es' ? 600 : 400
                    }}
                >
                    🇪🇸 Español
                </Menu.Item>
                <Menu.Item
                    onClick={() => setLanguage('en')}
                    style={{ 
                        backgroundColor: language === 'en' ? 'rgba(34, 139, 230, 0.1)' : 'transparent',
                        fontWeight: language === 'en' ? 600 : 400
                    }}
                >
                    🇬🇧 English
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
}
