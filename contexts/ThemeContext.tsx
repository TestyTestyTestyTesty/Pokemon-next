import React, { createContext, useState } from "react";

interface ThemeContext {
    dark: boolean;
    themeToggler?: () => void;
}
const initialState = {
    dark: false,
};

interface ProviderProps {
    children: React.ReactNode;
}
export const ThemeContext = createContext<ThemeContext>(initialState);

export const ThemeContextProvider = ({ children }: ProviderProps) => {
    const [dark, setDark] = useState(initialState.dark);

    const themeToggler = () => {
        setDark(!dark);
    };
    return (
        <ThemeContext.Provider value={{ dark, themeToggler }}>
            {children}
        </ThemeContext.Provider>
    );
};
