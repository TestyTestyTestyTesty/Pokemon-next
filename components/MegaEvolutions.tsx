import { gql, useQuery } from "@apollo/client";
import Image from "next/image";
import { version } from "os";
import React from "react";
import { capitalizeFirstLetter } from "../lib/capitalizeFirstLetter";
import Pokemon from "../pages/generation/[id]";
import LoadingSpinner from "./LoadingSpinner";
import {
  ContainerStyles,
  GenderNameStyles,
  SinglePokemonStyles,
  SinglePokemonWrapperStyles,
  VersionNameStyles,
  VersionStyles,
} from "./styles/PokemonShinyDifference.styled";
const POKEMON_MEGA_EVOLUTIONS_QUERY = gql`
  query POKEMON_MEGA_EVOLUTIONS_QUERY($id: Int!) {
    pokemon: pokemon_v2_pokemon(where: { pokemon_species_id: { _eq: $id } }) {
      name
      pokemon_species_id
      id
      specy: pokemon_v2_pokemonspecy {
        genderDiff: has_gender_differences
      }
    }
  }
`;
export default function MegaEvolutions({ id }: { id: number }) {
  const { data, error, loading } = useQuery(POKEMON_MEGA_EVOLUTIONS_QUERY, {
    variables: { id: id },
  });

  if (loading) return <LoadingSpinner />;
  if (error) return <p>Error :(</p>;
  const megaEvolutions = data.pokemon.filter(
    (pokemon: any) => pokemon.id !== id
  );

  return (
    <div>
      {megaEvolutions.map((version: any) => (
        <ContainerStyles key={version.id}>
          <SinglePokemonStyles>
            {version.specy.genderDiff && (
              <GenderNameStyles>
                {capitalizeFirstLetter(version.name)}
              </GenderNameStyles>
            )}
            <SinglePokemonWrapperStyles>
              <VersionStyles>
                <VersionNameStyles>Normal</VersionNameStyles>
                <Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${version.id}.png`}
                  width="200"
                  height="200"
                  alt={version.name}
                />
              </VersionStyles>
              <VersionStyles>
                <VersionNameStyles>Shiny</VersionNameStyles>
                <Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${version.id}.png`}
                  width="200"
                  height="200"
                  alt={version.name}
                />
              </VersionStyles>
            </SinglePokemonWrapperStyles>
          </SinglePokemonStyles>
        </ContainerStyles>
      ))}
    </div>
  );
}
