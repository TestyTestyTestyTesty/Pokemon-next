import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import PokemonList from "../../components/PokemonList";
const POKEMON_GENERATION_QUERY = gql`
  query POKEMON_GENERATION_QUERY($id: Int!) {
    pokemons: pokemon_v2_pokemonspecies(
      order_by: { id: asc }
      where: { generation_id: { _eq: $id } }
    ) {
      name
      id
    }
  }
`;

export default function Pokemon() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error, loading } = useQuery(POKEMON_GENERATION_QUERY, {
    variables: { id: id },
  });

  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;  
  if (data.pokemons.length !== 0) return <PokemonList data={data.pokemons} />;
  if (data.pokemons.length === 0) {
      router.push({
      pathname: '/'
     })}
}
