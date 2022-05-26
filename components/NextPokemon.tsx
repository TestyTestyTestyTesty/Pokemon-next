import { gql, useQuery } from "@apollo/client";
import Link from "next/link";
import React from "react";
import LoadingSpinner from "./LoadingSpinner";
import { LinkStyles } from "./styles/NextPokemon.styled";

const POKEMON_DETAILS_QUERY = gql`
  query POKEMON_DETAILS_QUERY($id: Int!) {
    pokemon: pokemon_v2_pokemon(where: { id: { _eq: $id } }) {
      name
    }
  }
`;
export default function NextPokemon({ id }: { id: number }) {
  const { data, error, loading } = useQuery(POKEMON_DETAILS_QUERY, {
    variables: { id:id+1 },
  });

  if (loading) return <LoadingSpinner />;
  if (error) return <p>Error :(</p>;
  const {name} = data?.pokemon[0];
  
  return (
    <Link href={`/pokemon/${name}`} passHref>
      <LinkStyles>Next Pokemon</LinkStyles>
    </Link>
  );
}
