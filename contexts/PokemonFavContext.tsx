import React, { createContext, useEffect, useReducer } from "react";
import { reducer } from "./PokemonFavReducer";

const initialState: any = {
    favList: [],
};

export const PokemonFavContext = createContext(initialState);

interface ProviderProps {
    children: React.ReactNode;
}

export const PokemonFavProvider = ({ children }: ProviderProps) => {
    const [state, dispatch] = useReducer(reducer, initialState, () => {
        if (typeof window !== "undefined") {
            const favsFromLocalStorage = localStorage.getItem("favourites");
            const parsedFavs = JSON.parse(favsFromLocalStorage);
            if (parsedFavs.length) {
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
