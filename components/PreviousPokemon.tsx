
import Link from "next/link";
import React from "react";

import { LinkStyles } from "./styles/PreviousPokemon.styled";


export default function NextPokemon({ id }: { id: number }) {


  return (
    <Link href={`/pokemon/${id-1}`} passHref>
      <LinkStyles>Previous Pokemon</LinkStyles>
    </Link>
  );
}
