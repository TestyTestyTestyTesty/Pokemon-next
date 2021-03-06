import { gql } from "@apollo/client";
import React, { useContext } from "react";
import PokemonList from "../../components/PokemonList";
import GenerationList from "../../components/GenerationList";
import { client } from "../../lib/apollo";
import ScrollTop from "../../components/ScrollTop";
import Head from "next/head";

interface Pokemon {
  name: string;
  id: number;
}
interface Gen {
  id: number;
}
interface Context {
  params: {
    id: number;
  };
  locales?: string;
  locale?: string;
  deafultLocale?: string;
}
export default function Pokemon({
  pokemons,
  id,
}: {
  pokemons: Pokemon[];
  id: number;
}) {
  return (
    <>
      <Head>
        <title>Pokemon App | Generation {id} </title>
      </Head>
      <GenerationList />
      <PokemonList data={pokemons} />
      <ScrollTop />
    </>
  );
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
  const paths = data.genList.map((gen: Gen) => {
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

export async function getStaticProps(context: Context) {
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
      id: context.params.id,
    },
  };
}
