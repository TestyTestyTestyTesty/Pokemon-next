import React from "react";
import { PokemonListStyles } from "./styles/PokemonList.styled";
import { PokemonInterface } from "../intefaces/pokemon";
import PokemonListItem from "./PokemonListItem";

interface Pokemon {
  data: {
    id: number;
    name: string;
  }[];
}

export default function PokemonList({ data }: Pokemon) {
  return (
    <PokemonListStyles>
      {data?.map((pokemon: PokemonInterface) => {
        return <PokemonListItem key={pokemon.id} pokemon={pokemon} />;
      })}
    </PokemonListStyles>
  );
}
