import { useRouter } from "next/router";
import React, { useContext } from "react";
import { PokemonSumContext } from "../contexts/PokemonSumContext";
import { generateRandomNumber } from "../lib/generateRandomNumber";
import { RandomPokemonStyled } from "./styles/RandomPokemon.styled";

interface Props {
    pokemonSum?: number;
}
export default function RandomPokemon() {
    const { pokemonSum }: Props = useContext(PokemonSumContext);

    const router = useRouter();
    const pokemonID = generateRandomNumber(1, pokemonSum);

    return (
        <RandomPokemonStyled
            onClick={() => router.push(`/pokemon/${pokemonID}`)}
        >
            Load random pokemon
        </RandomPokemonStyled>
    );
}
