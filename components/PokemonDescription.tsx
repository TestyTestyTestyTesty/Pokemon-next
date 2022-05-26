import { gql, useQuery } from "@apollo/client";
import React from "react";
import { capitalizeFirstLetter } from "../lib/capitalizeFirstLetter";
import { IndexNumber } from "../lib/indexNumber";
import LoadingSpinner from "./LoadingSpinner";
import MegaEvolutions from "./MegaEvolutions";
import PokemonShinyDifference from "./PokemonShinyDifference";
import Types from "./Types";
const POKEMON_DETAILS_QUERY = gql`
  query POKEMON_DETAILS_QUERY($id: Int!) {
    pokemon: pokemon_v2_pokemon(where: { id: { _eq: $id } }) {
      name
      pokemon_species_id
      specy: pokemon_v2_pokemonspecy {
        genderDiff: has_gender_differences
      }
    }
  }
`;
export default function PokemonDescription({ id }: { id: number }) {
  const { data, error, loading } = useQuery(POKEMON_DETAILS_QUERY, {
    variables: { id: id },
  });

  if (loading) return <LoadingSpinner />;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <h2>{capitalizeFirstLetter(data.pokemon[0].name)} #{IndexNumber(data.pokemon[0].pokemon_species_id)}</h2>
      <Types id={id} />
      <PokemonShinyDifference
        id={id}
        name={data.pokemon[0].name}
        genderDiff={data.pokemon[0].specy.genderDiff}
      />
      <MegaEvolutions id={id}/>
    </>
  );
}
