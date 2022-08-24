import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "../contexts/ThemeContext";
import { themeDark, themeLight } from "../styles/themes";

interface props {
    children: React.ReactNode;
}

export default function ThemeWrapper({ children }: props) {
    const { dark } = useContext(ThemeContext);

    return (
        <ThemeProvider theme={dark === false ? themeLight : themeDark}>
            {children}
        </ThemeProvider>
    );
}
