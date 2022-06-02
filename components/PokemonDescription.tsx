import React from "react";
import { capitalizeFirstLetter } from "../lib/capitalizeFirstLetter";
import { IndexNumber } from "../lib/indexNumber";
import MegaEvolutions from "./MegaEvolutions";
import PokemonShinyDifference from "./PokemonShinyDifference";
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
      <h2>
        {capitalizeFirstLetter(name)} #{IndexNumber(id)}
      </h2>
      <Types types={types} />
      <PokemonShinyDifference id={id} name={name} genderDiff={genderDiff} />
      <MegaEvolutions id={id} evolutionChain={evolutionChain} />
    </>
  );
}
