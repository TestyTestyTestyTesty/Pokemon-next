import Link from "next/link";
import React from "react";

import { LinkStyles } from "./styles/PreviousNextPokemon.styled";

export default function NextPokemon({ id }: { id: number }) {
  return (
    <Link href={`/pokemon/${id + 1}`} passHref>
      <LinkStyles next>Next Pokemon</LinkStyles>
    </Link>
  );
}
