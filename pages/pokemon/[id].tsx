import { gql } from "@apollo/client";
import React, { useContext } from "react";
import EvolutionChain from "../../components/EvolutionChain";
import PokemonDescription from "../../components/PokemonDescription";
import NextPokemon from "../../components/NextPokemon";
import PreviousPokemon from "../../components/PreviousPokemon";
import { client } from "../../lib/apollo";
import { PokemonSumContext } from "../../contexts/PokemonSumContext";
import ScrollTop from "../../components/ScrollTop";

export default function Pokemon({ pokemon }: { pokemon: any }) {
  const { pokemonSum }: any = useContext(PokemonSumContext);

  return (
    <div style={{ position: "relative" }}>
      <PokemonDescription
        id={pokemon[0].id}
        name={pokemon[0].name}
        genderDiff={pokemon[0].specy.genderDiff}
        types={pokemon[0].types}
        evolutionChain={pokemon}
      />
      {pokemon[0].specy.evolutionChain.pokemons.length > 1 && (
        <EvolutionChain
          id={pokemon[0].id}
          pokemons={pokemon[0].specy.evolutionChain.pokemons}
        />
      )}
      {pokemon[0].id > 1 && <PreviousPokemon id={pokemon[0].id} />}
      {pokemon[0].id < pokemonSum && <NextPokemon id={pokemon[0].id} />}
      <ScrollTop />
    </div>
  );
}
/*export async function getStaticPaths() {
  const POKEMON_SUM_QUERY = gql`
    query POKEMON_SUM_QUERY {
      pokemon: pokemon_v2_pokemonspecies_aggregate {
        aggregate {
          count
        }
      }
    }
  `;
  const POKEMON_LIST_QUERY = gql`
    query POKEMON_LIST_QUERY($id: Int!) {
      pokemon: pokemon_v2_pokemon(
        where: { pokemon_species_id: { _lte: $id } }
      ) {
        pokemon_species_id
        name
      }
    }
  `;
  const { data } = await client.query({
    query: POKEMON_SUM_QUERY,
  });

  const { data: list } = await client.query({
    query: POKEMON_LIST_QUERY,
    variables: {
      id: data.pokemon.aggregate.count,
    },
  });
  const paths = list.pokemon.map((pokemon: any) => {
    return {
      params: {
        id: pokemon.pokemon_species_id.toString(),
      },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
}*/
export async function getServerSideProps(context: any) {
  const POKEMON_DETAILS_QUERY = gql`
    query POKEMON_DETAILS_QUERY($id: Int!) {
      pokemon: pokemon_v2_pokemon(where: { pokemon_species_id: { _eq: $id } }) {
        name
        id
        types: pokemon_v2_pokemontypes {
          type: pokemon_v2_type {
            id
            name
          }
        }
        specy: pokemon_v2_pokemonspecy {
          genderDiff: has_gender_differences
          evolutionChain: pokemon_v2_evolutionchain {
            pokemons: pokemon_v2_pokemonspecies {
              id
              name
              evolves_from_species_id
              is_baby
            }
          }
        }
      }
    }
  `;
  const { data } = await client.query({
    query: POKEMON_DETAILS_QUERY,
    variables: {
      id: context.params.id,
    },
  });

  return {
    props: {
      pokemon: data.pokemon,
    },
  };
}
