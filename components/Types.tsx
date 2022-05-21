import { gql, useQuery } from "@apollo/client";
import React from "react";
import { TypesStyles, TypeStyles } from "./styles/TypesStyles";
const POKEMON_TYPES_QUERY = gql`
  query POKEMON_TYPES_QUERY($id: Int!) {
    pokemon: pokemon_v2_pokemon(where: { id: { _eq: $id } }) {
      types: pokemon_v2_pokemontypes {
        type: pokemon_v2_type {
          id
          name
        }
      }
    }
  }
`;
interface TypeInterface {
  type: {
    id: number;
    name: string;
  };
}
export default function Types({ id }: { id: number }) {
  const { data, error, loading } = useQuery(POKEMON_TYPES_QUERY, {
    variables: { id: id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const { types } = data?.pokemon[0];

  return (
    <TypesStyles>
      {types.map((type: TypeInterface) => (
        <TypeStyles key={type.type.id} color={type.type.name}>
          {type.type.name}
        </TypeStyles>
      ))}
    </TypesStyles>
  );
}
