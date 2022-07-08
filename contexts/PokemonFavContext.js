import { createContext, useReducer } from "react";
import {reducer} from "./PokemonFavReducer";
const initialState = [];

export const PokemonFavContext = createContext(initialState);

export const PokemonFavProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //actions
  const addPokemonToFavList = (pokemon) => {
    dispatch({ type: "ADD_POKEMON_TO_FAV", payload: pokemon });
  };
  const removePokemonFromFavList = (pokemon) => {
    console.log(pokemon);
    dispatch({ type: "REMOVE_POKEMON_FROM_FAV", payload: pokemon });
  };
  return (
    <PokemonFavContext.Provider
      value={{ pokemonFavList: state, addPokemonToFavList, removePokemonFromFavList }}
    >
      {props.children}
    </PokemonFavContext.Provider>
  );
};
