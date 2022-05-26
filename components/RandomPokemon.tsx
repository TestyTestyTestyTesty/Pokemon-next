import { gql, useLazyQuery, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { PokemonSumContext } from "../contexts/PokemonSumContext";
import { generateRandomNumber } from "../lib/generateRandomNumber";
import { RandomPokemonStyled } from "./styles/RandomPokemon.styled";
const POKEMON_NAME_QUERY = gql`
  query POKEMON_NAME_QUERY($id: Int!) {
    pokemon: pokemon_v2_pokemon(where: { id: { _eq: $id } }) {
      name
    }
  }
`;

export default function RandomPokemon() {
  const { pokemonSum }: any = useContext(PokemonSumContext);
  const router = useRouter();
  const pokemonID = generateRandomNumber(1, pokemonSum);

  const [findPokemonById, { called, loading, data }] =
    useLazyQuery(POKEMON_NAME_QUERY);
  if (data) {
    const { name } = data?.pokemon[0];
    router.push({
      pathname: `/pokemon/${name}`,
    });
  }

  return (
    <RandomPokemonStyled
      onClick={() => findPokemonById({ variables: { id: pokemonID } })}
    >
      Load random pokemon
    </RandomPokemonStyled>
  );
}
