'use client';

import { useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';
import { useLanguage } from '@/context/LanguageContext';
import styles from '@/app/portfolio.module.css';

export function ThemeToggle() {
    const { toggleColorScheme } = useMantineColorScheme();
    const { t } = useLanguage();
    return (
        <button type="button" className={styles.control} onClick={() => toggleColorScheme()} aria-label={t('nav.toggleTheme')} title={t('nav.toggleTheme')}>
            <IconSun size={18} className={styles.sun} aria-hidden="true" />
            <IconMoon size={18} className={styles.moon} aria-hidden="true" />
        </button>
    );
}
