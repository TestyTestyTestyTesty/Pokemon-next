import React from "react";
import Image from "next/image";
import { HeaderStyles } from "./styles/Header.styled";
import Link from "next/link";
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
    </HeaderStyles>
  );
}
