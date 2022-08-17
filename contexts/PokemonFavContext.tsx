import React, { createContext, useReducer } from "react";
import { reducer } from "./PokemonFavReducer";

const initialState = {
    pokemonFavList: [],
    addPokemonToFavList: (pokemon: number) => {},
    removePokemonFromFavList: (pokemon: number) => {},
};

export interface ContextProps {
    pokemonFavList: number[];
    addPokemonToFavList: (pokemon: number) => void;
    removePokemonFromFavList: (pokemon: number) => void;
}

export const PokemonFavContext = createContext<ContextProps>(initialState);

interface ProviderProps {
    children: React.ReactNode;
}

export const PokemonFavProvider = ({ children }: ProviderProps) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    //actions
    const addPokemonToFavList = (pokemon: number) => {
        dispatch({ type: "ADD_POKEMON_TO_FAV", payload: pokemon });
    };
    const removePokemonFromFavList = (pokemon: number) => {
        dispatch({ type: "REMOVE_POKEMON_FROM_FAV", payload: pokemon });
    };
    return (
        <PokemonFavContext.Provider
            value={{
                pokemonFavList: state.pokemonFavList,
                addPokemonToFavList,
                removePokemonFromFavList,
            }}
        >
            {children}
        </PokemonFavContext.Provider>
    );
};
