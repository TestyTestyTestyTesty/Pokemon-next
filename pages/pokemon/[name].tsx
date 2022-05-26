import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import EvolutionChain from "../../components/EvolutionChain";
import LoadingSpinner from "../../components/LoadingSpinner";
import PokemonDescription from "../../components/PokemonDescription";
import NextPokemon from "../../components/NextPokemon";
import PreviousPokemon from "../../components/PreviousPokemon";

const POKEMON_DETAILS_QUERY = gql`
  query POKEMON_DETAILS_QUERY($name: String!) {
    pokemon: pokemon_v2_pokemon(where: { name: { _eq: $name } }) {
      name
      id
    }
  }
`;
export default function Pokemon() {
  const router = useRouter();
  const { name } = router.query;

  const { data, error, loading } = useQuery(POKEMON_DETAILS_QUERY, {
    variables: { name: name },
  });

  if (loading) return <LoadingSpinner/>;
  if (error) return <p>Error :(</p>;

  return (
    <div style={{position:"relative"}}>
      <PokemonDescription id={data.pokemon[0].id}/>
      <EvolutionChain id={data.pokemon[0].id}/>
      <PreviousPokemon id={data.pokemon[0].id}/>
      <NextPokemon id={data.pokemon[0].id}/>
    </div>
  );
}
