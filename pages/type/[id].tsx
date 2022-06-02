import { gql } from "@apollo/client";
import React, { useContext } from "react";
import PokemonList from "../../components/PokemonList";
import TypesList from "../../components/TypesList";
import { PokemonSumContext } from "../../contexts/PokemonSumContext";
import { client } from "../../lib/apollo";

export default function Pokemon({ pokemons }: any) {
  return (
    <>
      <TypesList />
      <PokemonList data={pokemons} />;
    </>
  );
}
export async function getStaticPaths() {
  const POKEMON_TYPES_LIST_QUERY = gql`
    query POKEMON_TYPES_LISTQUERY {
      types: pokemon_v2_type {
        id
      }
    }
  `;
  const { data } = await client.query({
    query: POKEMON_TYPES_LIST_QUERY,
  });

  const paths = data.types.map((type: any) => {
    return {
      params: {
        id: type.id.toString(),
      },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const POKEMON_GENERATION_QUERY = gql`
    query POKEMON_GENERATION_QUERY($id: Int!) {
      pokemons: pokemon_v2_pokemon(
        where: {
          pokemon_v2_pokemontypes: { pokemon_v2_type: { id: { _eq: $id } } }
        }
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
