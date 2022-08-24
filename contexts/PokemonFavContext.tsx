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

export const PokemonFavProvider = ({ children }: ProviderProps) => {
    const [state, dispatch] = useReducer(reducer, initialState, () => {
        if (typeof window !== "undefined") {
            const favsFromLocalStorage = JSON.parse(
                localStorage.getItem("favourites") || ""
            );
            if (favsFromLocalStorage.length) {
                return {
                    ...initialState,
                    favList: favsFromLocalStorage,
                };
            } else {
                initialState;
            }
        } else {
            return initialState;
        }
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
