import React from "react";
import { TitleStyles } from "./styles/Title.styled";
interface children {
    children: React.ReactNode;
}
export default function Title({ children }: children) {
    return <TitleStyles>{children}</TitleStyles>;
}
