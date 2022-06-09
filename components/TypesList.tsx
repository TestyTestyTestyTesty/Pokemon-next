import { gql, useQuery } from "@apollo/client";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import LoadingSpinner from "./LoadingSpinner";
import { TypesStyles, TypeStyles } from "./styles/TypesList.styled";

interface TypeInterface {
  id: number;
  name: string;
  sum: {
    aggregate: {
      count: number;
    };
  };
}
const POKEMON_TYPES_QUERY = gql`
  query POKEMON_TYPES_QUERY {
    types: pokemon_v2_type {
      name
      id
      sum: pokemon_v2_pokemontypes_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`;
export default function TypesList() {
  const { asPath } = useRouter();
  const { data, error, loading } = useQuery(POKEMON_TYPES_QUERY);

  if (loading) return <LoadingSpinner />;
  if (error) return <p>Error :(</p>;

  const filterNotEmpty = (type: TypeInterface) => {
    return type.sum.aggregate.count > 0;
  };

  const notEmptyTypes = data.types.filter(filterNotEmpty);

  return (
    <TypesStyles>
      {notEmptyTypes.map((type: TypeInterface) => {
    
        return (
          <Link key={type.id} href={`/type/${type.name}`} passHref>
            <TypeStyles
              activePath={asPath === `/type/${type.name}`}
              color={type.name}
            >
              {type.name}
            </TypeStyles>
          </Link>
        );
      })}
    </TypesStyles>
  );
}
