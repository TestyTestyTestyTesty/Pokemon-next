import React from "react";
import { PokemonListStyles } from "./styles/PokemonListStyles";
import { PokemonInterface } from "../intefaces/pokemon";
import PokemonListItem from "./PokemonListItem";

export default function PokemonList({data}) {
  return (
    <PokemonListStyles>
      {data?.pokemons.map((pokemon: PokemonInterface) => (
        <PokemonListItem key={pokemon.id} pokemon={pokemon} />
      ))}
    </PokemonListStyles>
  );
}
