import Link from "next/link";
import React from "react";
import { WrapperStyles, LinkStyles } from "./styles/PokemonFilterTypes.styled";

export default function PokemonFilterTypes() {
  return (
    <WrapperStyles>
      <Link href="/type" passHref>
        <LinkStyles color="#fce5a4">By type</LinkStyles>
      </Link>
      <Link href="/generation" passHref>
        <LinkStyles color="#a4ccfc">By generation</LinkStyles>
      </Link>
    </WrapperStyles>
  );
}
