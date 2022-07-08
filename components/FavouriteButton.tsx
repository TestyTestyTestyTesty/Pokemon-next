import React, { useContext } from "react";
import { PokemonFavContext } from "../contexts/PokemonFavContext";
import { FavouriteButtonStyles } from "./styles/FavouriteButton.styled";
interface Props {
  pokemonFavList: number[];
}

export default function FavouriteButton({ id }: { id: number }) {
  const { pokemonFavList, addPokemonToFavList, removePokemonFromFavList }: any =
    useContext(PokemonFavContext);
  
  return (
    <>
      {!pokemonFavList.includes(id) ? (
        <FavouriteButtonStyles onClick={() => addPokemonToFavList(id)}>
          Add To Favourite
        </FavouriteButtonStyles>
      ) : (
        <FavouriteButtonStyles onClick={() => removePokemonFromFavList(id)}>
          Remove from Favourite
        </FavouriteButtonStyles>
      )}
    </>
  );
}
