import { gql, useQuery } from "@apollo/client";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { GenListElement } from "../intefaces/genListElement";
import {
  GenerationListStyles,
  LinkStyles,
} from "./styles/GenerationListStyles";
const POKEMON_GENERATION_LIST_QUERY = gql`
  query POKEMON_GENERATION_LIST_QUERY {
    genList: pokemon_v2_generation {
      id
    }
  }
`;
export default function GenerationList() {
  const { asPath } = useRouter();
  
  const { data, error, loading } = useQuery(POKEMON_GENERATION_LIST_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <GenerationListStyles>
      {data.genList.map((gen: GenListElement) => (
        <li key={gen.id}>
          <Link href={`/generation/${gen.id}`} passHref>
            <LinkStyles activePath={asPath === `/generation/${gen.id}` && true}>
              Generation {gen.id}
            </LinkStyles>
          </Link>
        </li>
      ))}
    </GenerationListStyles>
  );
}
