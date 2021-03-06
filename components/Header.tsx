import React from "react";
import Image from "next/image";
import { HeaderStyles, LinkStyles } from "./styles/Header.styled";
import Link from "next/link";
import ThemeToggler from "./ThemeToggler";
export default function header() {
  return (
    <HeaderStyles>
      <Link href="/">
        <a>
          <Image
            src="/assets/pokemon-logo.png"
            alt="Pokemon"
            width="500"
            height="200"
          />
        </a>
      </Link>
      <ThemeToggler />
      <Link href={'/favourites'} passHref>
        <LinkStyles>
          Favourites
        </LinkStyles>
      </Link>
    </HeaderStyles>
  );
}
