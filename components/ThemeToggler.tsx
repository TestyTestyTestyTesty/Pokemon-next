import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import Emoji from "./Emoji";
import { ThemeTogglerStyles } from "./styles/ThemeToggler.styled";
export default function ThemeToggler() {
    const { dark, themeToggler } = useContext(ThemeContext);

    return (
        <ThemeTogglerStyles onClick={themeToggler}>
            {dark ? (
                <Emoji symbol="🌑" label="dark mode" />
            ) : (
                <Emoji symbol="☀️" label="light mode" />
            )}
        </ThemeTogglerStyles>
    );
}
