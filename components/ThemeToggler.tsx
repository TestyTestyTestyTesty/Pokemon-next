import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { ThemeTogglerStyles } from "./styles/ThemeToggler.styled";
export default function ThemeToggler() {
  const { themeToggler }: any = useContext(ThemeContext);
  
  return (
    <ThemeTogglerStyles onClick={themeToggler}>ThemeToggler</ThemeTogglerStyles>
  );
}
