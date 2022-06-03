import { gql, useQuery } from "@apollo/client";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import LoadingSpinner from "./LoadingSpinner";
import { TypesStyles, TypeStyles } from "./styles/TypesList.styled";

interface TypeInterface {
  type: {
    id: number;
    name: string;
  };
}
const POKEMON_TYPES_QUERY = gql`
  query POKEMON_TYPES_QUERY {
    types: pokemon_v2_type {
      name
      id
    }
  }
`;
export default function TypesList() {
  const { asPath } = useRouter();
  const { data, error, loading } = useQuery(POKEMON_TYPES_QUERY);

  if (loading) return <LoadingSpinner />;
  if (error) return <p>Error :(</p>;
  return (
    <TypesStyles>
      {data.types.map((type: any) => (
        <Link key={type.id} href={`/type/${type.id}`} passHref>
          <TypeStyles
            activePath={asPath === `/type/${type.id}`}
            color={type.name}
          >
            {type.name}
          </TypeStyles>
        </Link>
      ))}
    </TypesStyles>
  );
}
