import React from "react";
import {
    HeaderStyles,
    LinkStyles,
    NavLinksStyles,
} from "./styles/Header.styled";
import Link from "next/link";
import HeaderTop from "./HeaderTop";
export default function header() {
    return (
        <HeaderStyles>
            <HeaderTop />
            <NavLinksStyles>
                <Link href={"/favourites"} passHref>
                    <LinkStyles>Favourites</LinkStyles>
                </Link>
                <Link href={"/search"} passHref>
                    <LinkStyles>Search</LinkStyles>
                </Link>
                <Link href={"/guessing-game"} passHref>
                    <LinkStyles>Who&apos;s that pokemon</LinkStyles>
                </Link>
            </NavLinksStyles>
        </HeaderStyles>
    );
}
