import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import EvolutionChain from "../../components/EvolutionChain";
import { capitalizeFirstLetter } from "../../lib/capitalizeFirstLetter";
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <p>{capitalizeFirstLetter(data.pokemon[0].name)}</p>
      <EvolutionChain id={data.pokemon[0].id}/>
    </div>
  );
}
