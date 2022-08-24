import React, { createContext, useEffect, useReducer } from "react";
import { reducer } from "./PokemonFavReducer";

const initialState: any = {
    favList: [],
};
export interface ContextProps {
    favList: number[];
}
export const PokemonFavContext = createContext<any>(initialState);

interface ProviderProps {
    children: React.ReactNode;
}

export const PokemonFavContextProvider = ({ children }: ProviderProps) => {
    const [state, dispatch] = useReducer(reducer, initialState, () => {
        if (typeof window !== "undefined") {
            const favsFromLocalStorage = localStorage.getItem("favourites");

            if (favsFromLocalStorage && favsFromLocalStorage.length) {
                const parsedFavs = JSON.parse(favsFromLocalStorage);
                return {
                    ...initialState,
                    favList: parsedFavs,
                };
            } else {
                initialState;
            }
        }
        return initialState;
    });
    useEffect(() => {
        localStorage.setItem("favourites", JSON.stringify(state.favList));
    }, [state]);
    return (
        <PokemonFavContext.Provider
            value={{
                state,
                dispatch,
            }}
        >
            {children}
        </PokemonFavContext.Provider>
    );
};
