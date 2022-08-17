import React from "react";
import Image from "next/image";
import { HeaderStyles, LinkStyles } from "./styles/Header.styled";
import Link from "next/link";
import ThemeToggler from "./ThemeToggler";
import SearchForm from "./SearchForm";
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
      <Link href={'/search'} passHref>
        <LinkStyles>
          Search
        </LinkStyles>
      </Link>
 
    </HeaderStyles>
  );
}
