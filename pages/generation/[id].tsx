import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import LoadingSpinner from "../../components/LoadingSpinner";
import PokemonList from "../../components/PokemonList";
import { client } from "../../lib/apollo";

export default function Pokemon({ pokemons }:any ) {
  return <PokemonList data={pokemons} />;
}
export async function getStaticPaths() {
  const POKEMON_GENERATION_LIST_QUERY = gql`
    query POKEMON_GENERATION_LIST_QUERY {
      genList: pokemon_v2_generation {
        id
      }
    }
  `;
  const { data } = await client.query({
    query: POKEMON_GENERATION_LIST_QUERY,
  });
  const paths = data.genList.map((gen:any) => {
    return {
      params: {
        id: gen.id.toString(),
      },
    };
  });


  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps( context:any ) {
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
  const { data } = await client.query({
    query: POKEMON_GENERATION_QUERY,
    variables: {
      id: context.params.id,
    },
  });

  return {
    props: {
      pokemons: data.pokemons,
    },
  };
}
