import React from "react";
import { capitalizeFirstLetter } from "../lib/capitalizeFirstLetter";
import { hyphenToSpace } from "../lib/hyphenToSpace";
import { IndexNumber } from "../lib/indexNumber";
import FavouriteButton from "./FavouriteButton";
import MegaEvolutions from "./MegaEvolutions";
import PokemonShinyDifference from "./PokemonShinyDifference";
import {
    TopWrapperStyles,
    TitleStyles,
} from "./styles/PokemonDescription.styled";
import Types from "./Types";

interface Props {
    name: string;
    id: number;
    genderDiff: boolean;
    types: PokemonType[];
    evolutionChain: EvolutionChain;
}
interface PokemonType {
    id: number;
    name: string;
}

interface EvolutionChain {
    id: number;
    name: string;
    types: PokemonType[];
}
interface Specy {
    genderDiff: any;
}

export default function PokemonDescription({
    name,
    id,
    genderDiff,
    types,
    evolutionChain,
}: Props): JSX.Element {
    return (
        <>
            <TopWrapperStyles>
                <TitleStyles>
                    {hyphenToSpace(capitalizeFirstLetter(name))} #
                    {IndexNumber(id)}
                </TitleStyles>
                <FavouriteButton id={id} />
            </TopWrapperStyles>
            <Types types={types} />
            <PokemonShinyDifference
                id={id}
                name={name}
                genderDiff={genderDiff}
            />
            <MegaEvolutions id={id} evolutionChain={evolutionChain} />
        </>
    );
}
