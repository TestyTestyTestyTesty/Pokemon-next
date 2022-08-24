import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HeaderTopStyles } from "./styles/HeaderTop.styled";
import ThemeToggler from "./ThemeToggler";

export default function HeaderTop() {
    return (
        <HeaderTopStyles>
            <Link href="/">
                <Image
                    src="/assets/pokemon-logo.png"
                    alt="Pokemon"
                    width="500"
                    height="200"
                />
            </Link>
            <ThemeToggler />
        </HeaderTopStyles>
    );
}
