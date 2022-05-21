import { gql, useQuery } from "@apollo/client";
import Image from "next/image";
import React from "react";
import { IndexNumber } from "../lib/indexNumber";
const POKEMON_EVOLUTION_LINE_QUERY = gql`
  query POKEMON_GENERATION_QUERY($id: Int!) {
    pokemon: pokemon_v2_pokemon(where: { id: { _eq: $id } }) {
      specy: pokemon_v2_pokemonspecy {
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
interface pokemon{
  id: number
  name: string
  evolves_from_species_id: number | null
  is_baby: boolean
}
export default function EvolutionChain({ id }: {id: number}) {
  const { data, error, loading } = useQuery(POKEMON_EVOLUTION_LINE_QUERY, {
    variables: { id: id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const { pokemons } = data?.pokemon[0]?.specy?.evolutionChain;
  return (
    <div>
      {pokemons.map((pokemon: pokemon) => (
        <>
        {console.log(pokemon)}
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
            width="100"
            height="100"
            alt={pokemon.name}
          />
          <p>name: {pokemon.name}</p>
          <p>#{IndexNumber(pokemon.id)}</p>
        </>
      ))}
    </div>
  );
}
