import React from "react";
import { capitalizeFirstLetter } from "../lib/capitalizeFirstLetter";
import { hyphenToSpace } from "../lib/hyphenToSpace";
import { IndexNumber } from "../lib/indexNumber";
import MegaEvolutions from "./MegaEvolutions";
import PokemonShinyDifference from "./PokemonShinyDifference";
import {TopWrapperStyles, TitleStyles} from "./styles/PokemonDescription.styled"
import Types from "./Types";

export default function PokemonDescription({
  name,
  id,
  genderDiff,
  types,
  evolutionChain,
}: {
  name: any;
  id: any;
  genderDiff: any;
  types: any;
  evolutionChain: any;
}) {
  return (
    <>
      <TopWrapperStyles>
        <TitleStyles>
          {hyphenToSpace(capitalizeFirstLetter(name))} #{IndexNumber(id)}
        </TitleStyles>
        <Types types={types} />
      </TopWrapperStyles>
      <PokemonShinyDifference id={id} name={name} genderDiff={genderDiff} />
      <MegaEvolutions id={id} evolutionChain={evolutionChain} />
    </>
  );
}
