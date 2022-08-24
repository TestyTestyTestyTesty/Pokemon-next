import { gql } from "@apollo/client";
import { createContext, useEffect, useState } from "react";
import { client } from "../lib/apollo";

const initialState = {};

export const PokemonSumContext = createContext(initialState);

interface ProviderProps {
    children: React.ReactNode;
}
export const ThemeContext = createContext(initialState);

export const PokemonSumContextProvider = ({ children }: ProviderProps) => {
    const [pokemonSum, setPokemonSum] = useState<number | null>(null);
    useEffect(() => {
        client
            .query({
                query: gql`
                    query POKEMON_SUM_QUERY {
                        pokemon: pokemon_v2_pokemonspecies_aggregate {
                            aggregate {
                                count
                            }
                        }
                    }
                `,
            })
            .then((result) =>
                setPokemonSum(result.data.pokemon.aggregate.count)
            );
    }, []);
    return (
        <PokemonSumContext.Provider value={{ pokemonSum, setPokemonSum }}>
            {children}
        </PokemonSumContext.Provider>
    );
};
