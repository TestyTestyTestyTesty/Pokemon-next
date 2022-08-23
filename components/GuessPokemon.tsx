import { gql, useLazyQuery } from "@apollo/client";
import React, { useContext, useState } from "react";
import { PokemonSumContext } from "../contexts/PokemonSumContext";
import { generateRandomNumber } from "../lib/generateRandomNumber";
import GuessPokemonButton from "./GuessPokemonButton";
import GuessPokemonImage from "./GuessPokemonImage";
import GuessPokemonInput from "./GuessPokemonInput";
import LoadingSpinner from "./LoadingSpinner";
interface Props {
    pokemonSum?: number;
}
const POKEMON_DETAILS_QUERY = gql`
    query POKEMON_DETAILS_QUERY($id: Int!) {
        pokemon: pokemon_v2_pokemon(where: { id: { _eq: $id } }) {
            name
            id
        }
    }
`;
export default function GuessPokemon() {
    const { pokemonSum }: Props = useContext(PokemonSumContext);
    const [pokemonName, setPokemonName] = useState(null);
    const [pokemonId, setPokemonId] = useState(null);
    const [answerStatus, setAnswerStatus] = useState(false);
    const [getPokemon, { called, loading, data }] = useLazyQuery(
        POKEMON_DETAILS_QUERY,
        {
            onCompleted: (data) => {
                setPokemonName(data.pokemon[0].name);
                setPokemonId(data.pokemon[0].id);
            },
        }
    );
    const answerStatusHandler = (bool: boolean) => {
        setAnswerStatus(bool);
    };
    const getPokemonHandler = () => {
        const randomId = generateRandomNumber(1, pokemonSum);
        getPokemon({
            variables: {
                id: randomId,
            },
        });
    };
    if (loading) return <LoadingSpinner />;
    return (
        <>
            <GuessPokemonButton onClick={getPokemonHandler}>
                Load random pokemon
            </GuessPokemonButton>
            {data?.pokemon?.length > 0 && (
                <>
                    <GuessPokemonImage
                        id={pokemonId}
                        answerStatus={answerStatus}
                    />
                    <GuessPokemonInput
                        name={pokemonName}
                        answerStatus={answerStatus}
                        answerStatusHandler={answerStatusHandler}
                    />
                </>
            )}
        </>
    );
}
