import { createContext, ReactNode, useState } from "react";

type Theme = 'light' | 'dark';

interface Itheme {
    theme: Theme;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<Itheme | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>('light');

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={`app-wrapper ${theme}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
}

