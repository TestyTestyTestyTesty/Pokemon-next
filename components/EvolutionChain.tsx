import Image from "next/image";
import Link from "next/link";
import React from "react";
import { capitalizeFirstLetter } from "../lib/capitalizeFirstLetter";
import { hyphenToSpace } from "../lib/hyphenToSpace";
import { IndexNumber } from "../lib/indexNumber";
import Badge from "./Badge";
import {
  ContainerStyles,
  TitleStyles,
  NameStyles,
  NumberStyles,
  SinglePokemonStyles,
  WrapperStyles,
} from "./styles/EvolutionChain.styled";

interface pokemon {
  id: number;
  name: string;
  evolves_from_species_id: number | null;
  is_baby: boolean;
}
export default function EvolutionChain({
  pokemons,
  id,
}: {
  pokemons: pokemon[];
  id: number;
}) {
  return (
    <ContainerStyles>
      <TitleStyles>Evolution Chain</TitleStyles>
      <WrapperStyles>
        {pokemons.map((pokemon) => {
          if (!pokemon.evolves_from_species_id) {
            return (
              <Link key={pokemon.id} href={`/pokemon/${pokemon.id}`}>
                <div>
                  <SinglePokemonStyles>
                    {pokemon.is_baby && <Badge text="BABY" />}
                    <Image
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`}
                      width="200"
                      height="200"
                      alt={pokemon.name}
                    />
                    <NameStyles>
                      {hyphenToSpace(capitalizeFirstLetter(pokemon.name))}{" "}
                      {id === pokemon.id && <span>current</span>}
                    </NameStyles>
                    <NumberStyles>#{IndexNumber(pokemon.id)}</NumberStyles>
                  </SinglePokemonStyles>
                </div>
              </Link>
            );
          } else {
            return (
              <Link key={pokemon.id} href={`/pokemon/${pokemon.id}`}>
                <SinglePokemonStyles>
                  {pokemon.is_baby && <Badge text="BABY" />}
                  <Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`}
                    width="200"
                    height="200"
                    alt={pokemon.name}
                  />
                  <NameStyles>
                    {hyphenToSpace(capitalizeFirstLetter(pokemon.name))}{" "}
                    {id === pokemon.id && <span>current</span>}
                  </NameStyles>
                  <NumberStyles>#{IndexNumber(pokemon.id)}</NumberStyles>
                </SinglePokemonStyles>
              </Link>
            );
          }
        })}
      </WrapperStyles>
    </ContainerStyles>
  );
}
