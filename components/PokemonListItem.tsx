import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { PokemonInterface } from "../intefaces/pokemon";
import { capitalizeFirstLetter } from "../lib/capitalizeFirstLetter";
import { hyphenToSpace } from "../lib/hyphenToSpace";
import { IndexNumber } from "../lib/indexNumber";
import { PokemonListItemStyles } from "./styles/PokemonListItem.styled";

export default function PokemonListItem({
  pokemon,
}: {
  pokemon: PokemonInterface;
}) {
  const [exists, setExists] = useState(false);
  useEffect(() => {
    fetch(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
      { method: "HEAD" }
    ).then((res) => {
      res.ok ? setExists(true) : setExists(false);
    });
  }, [exists]);

  return (
    <Link href={`/pokemon/${pokemon.id}`}>
      <PokemonListItemStyles key={pokemon.id}>
        <>
          <Image
            src={
              exists
                ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`
                : "/assets/placeholder-image.png"
            }
            width="100"
            height="100"
            alt={pokemon.name}
          />
          <p>{hyphenToSpace(capitalizeFirstLetter(pokemon.name))}</p>
          <p>#{IndexNumber(pokemon.id)}</p>
        </>
      </PokemonListItemStyles>
    </Link>
  );
}
