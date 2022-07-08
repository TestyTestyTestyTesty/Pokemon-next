import Image from "next/image";

import React from "react";
import { capitalizeFirstLetter } from "../lib/capitalizeFirstLetter";
import { hyphenToSpace } from "../lib/hyphenToSpace";

import {
  ContainerStyles,
  GenderNameStyles,
  SinglePokemonStyles,
  SinglePokemonWrapperStyles,
  VersionNameStyles,
  VersionStyles,
} from "./styles/PokemonShinyDifference.styled";

export default function MegaEvolutions({
  id,
  evolutionChain,
}: {
  id: number;
  evolutionChain: any;
}) {
  const megaEvolutions = evolutionChain.filter(
    (pokemon: any) => pokemon.id !== id
  );

  return (
    <div>
      {megaEvolutions.map((version: any) => {
        <ContainerStyles key={version.id}>
          <SinglePokemonStyles>
            <GenderNameStyles>
              {hyphenToSpace(capitalizeFirstLetter(version.name))}
            </GenderNameStyles>

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
        </ContainerStyles>;
      })}
    </div>
  );
}
