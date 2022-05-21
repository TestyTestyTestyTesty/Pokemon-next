import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PokemonInterface } from "../intefaces/pokemon";
import { capitalizeFirstLetter } from "../lib/capitalizeFirstLetter";
import { IndexNumber } from "../lib/indexNumber";
import { PokemonStyles } from "./styles/PokemonStyles";

export default function PokemonListItem({ pokemon } : {pokemon: PokemonInterface}) {
  
  return (
    <Link href={`/pokemon/${pokemon.name}`}>
      <PokemonStyles key={pokemon.id}>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
          width="100"
          height="100"
          alt={pokemon.name}
        />
        <p>{capitalizeFirstLetter(pokemon.name)}</p>
        <p>#{IndexNumber(pokemon.id)}</p>
      </PokemonStyles>
    </Link>
  );
}
