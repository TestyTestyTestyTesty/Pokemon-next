import Image from "next/image";
import React from "react";
import {
  ContainerStyles,
  SinglePokemonStyles,
  GenderNameStyles,
  SinglePokemonWrapperStyles,
  VersionStyles,
  VersionNameStyles,
} from "./styles/PokemonShinyDifference.styled";

export default function PokemonShinyDifference({
  id,
  name,
  genderDiff,
}: {
  id: number;
  name: string;
  genderDiff: Boolean;
}) {
  return (
    <ContainerStyles>
      <SinglePokemonStyles>
        {genderDiff && <GenderNameStyles>Male</GenderNameStyles>}
        <SinglePokemonWrapperStyles>
          <VersionStyles>
            <VersionNameStyles>Normal</VersionNameStyles>
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`}
              width="200"
              height="200"
              alt={name}
            />
          </VersionStyles>
          <VersionStyles>
            <VersionNameStyles>Shiny</VersionNameStyles>
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${id}.png`}
              width="200"
              height="200"
              alt={name}
            />
          </VersionStyles>
        </SinglePokemonWrapperStyles>
      </SinglePokemonStyles>
      {genderDiff && (
        <SinglePokemonStyles>
          <GenderNameStyles>Female</GenderNameStyles>
          <SinglePokemonWrapperStyles>
            <VersionStyles>
              <VersionNameStyles>Normal</VersionNameStyles>
              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/female/${id}.png`}
                width="200"
                height="200"
                alt={name}
              />
            </VersionStyles>
            <VersionStyles>
              <VersionNameStyles>Shiny</VersionNameStyles>
              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/female/${id}.png`}
                width="200"
                height="200"
                alt={name}
              />
            </VersionStyles>
          </SinglePokemonWrapperStyles>
        </SinglePokemonStyles>
      )}
    </ContainerStyles>
  );
}
