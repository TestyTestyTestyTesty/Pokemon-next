import React from "react";
import { PokemonListStyles } from "./styles/PokemonListStyles";
import { PokemonInterface } from "../intefaces/pokemon";
import PokemonListItem from "./PokemonListItem";

interface Pokemon {
  data : {
    id: number;
    name:string;
  }[]
}

export default function PokemonList({data}:Pokemon) {
  console.log(data);
  
  return (
    <PokemonListStyles>
      {data?.map((pokemon: PokemonInterface) => (
        <PokemonListItem key={pokemon.id} pokemon={pokemon} />
      ))}
    </PokemonListStyles>
  );
}
