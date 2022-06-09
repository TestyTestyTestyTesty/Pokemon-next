import { gql } from "@apollo/client";
import Head from "next/head";
import React from "react";
import PokemonList from "../../components/PokemonList";
import ScrollTop from "../../components/ScrollTop";
import TypesList from "../../components/TypesList";
import { client } from "../../lib/apollo";
import { capitalizeFirstLetter } from "../../lib/capitalizeFirstLetter";
interface Pokemon {
  pokemon_species_id: number;
  name: string;
  id: number;
  pokemon_v2_pokemontypes: PokemonType[];
}
interface PokemonType {
  name: string;
  id: number;
}
interface Context {
  params: {
    name: string;
  };
  locales?: string;
  locale?: string;
  deafultLocale?: string;
}
export default function Pokemon({
  pokemons,
  type,
}: {
  pokemons: Pokemon[];
  type: string;
}) {
  return (
    <>
      <Head>
        <title>Pokemon App | {capitalizeFirstLetter(type)} type</title>
      </Head>
      <TypesList />
      <PokemonList data={pokemons} />
      <ScrollTop />
    </>
  );
}
export async function getStaticPaths() {
  const POKEMON_TYPES_LIST_QUERY = gql`
    query POKEMON_TYPES_LISTQUERY {
      types: pokemon_v2_type {
        id
        name
      }
    }
  `;
  const { data } = await client.query({
    query: POKEMON_TYPES_LIST_QUERY,
  });

  const paths = data.types.map((type: PokemonType) => {
    return {
      params: {
        name: type.name.toString(),
      },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context: Context) {
  const POKEMON_SUM_QUERY = gql`
    query POKEMON_SUM_QUERY {
      pokemon: pokemon_v2_pokemonspecies_aggregate {
        aggregate {
          count
        }
      }
    }
  `;
  const POKEMON_GENERATION_QUERY = gql`
    query POKEMON_GENERATION_QUERY($name: String!, $max: Int!) {
      pokemons: pokemon_v2_pokemon(
        where: {
          pokemon_v2_pokemontypes: { pokemon_v2_type: { name: { _eq: $name } } }
          id: { _lte: $max }
        }
        order_by: { id: asc }
      ) {
        pokemon_species_id
        name
        id
        pokemon_v2_pokemontypes {
          pokemon_v2_type {
            name
            id
          }
        }
      }
    }
  `;
  const { data } = await client.query({
    query: POKEMON_SUM_QUERY,
  });

  const { data: list } = await client.query({
    query: POKEMON_GENERATION_QUERY,
    variables: {
      name: context.params.name,
      max: data.pokemon.aggregate.count,
    },
  });

  return {
    props: {
      pokemons: list.pokemons,
      type: context.params.name,
    },
  };
}
