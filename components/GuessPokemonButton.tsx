import React from "react";
import { ButtonStyles } from "./styles/GuessPokemonButton.styled";
interface props {
    children: React.ReactNode;
    onClick: any;
}
export default function GuessPokemonButton({ children, onClick }: props) {
    return <ButtonStyles onClick={onClick}>{children}</ButtonStyles>;
}
