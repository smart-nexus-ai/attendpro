import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

/**
 * Hook to manage dark mode state.
 * Syncs with localStorage and system preferences.
 */
export function useDarkMode(): [boolean, () => void, (isDark: boolean) => void] {
    const [isDark, setIsDark] = useState<boolean>(false);

    useEffect(() => {
        // Check local storage or system preference on mount
        const savedTheme = localStorage.getItem('theme') as Theme | null;
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        const initialIsDark = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);

        setIsDark(initialIsDark);

        if (initialIsDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const setDarkMode = (dark: boolean) => {
        setIsDark(dark);
        if (dark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    const toggleDarkMode = () => {
        setDarkMode(!isDark);
    };

    return [isDark, toggleDarkMode, setDarkMode];
}

export default useDarkMode;
