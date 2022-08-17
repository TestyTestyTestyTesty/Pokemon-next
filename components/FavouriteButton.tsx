import Image from "next/image";
import React, { useContext } from "react";
import { PokemonFavContext } from "../contexts/PokemonFavContext";
import { ImageStyles } from "./styles/FavouriteButton.styled";

export default function FavouriteButton({ id }: { id: number }) {
    const { pokemonFavList, addPokemonToFavList, removePokemonFromFavList } =
        useContext(PokemonFavContext);

    return (
        <>
            {!pokemonFavList.includes(id) ? (
                <ImageStyles>
                    <Image
                        src="/assets/favourite-empty.svg"
                        alt="add to favourite"
                        width="30"
                        height="30"
                        onClick={() => addPokemonToFavList(id)}
                    />
                </ImageStyles>
            ) : (
                <ImageStyles>
                    <Image
                        src="/assets/favourite-fill.svg"
                        alt="remove from favourite"
                        width="30"
                        height="30"
                        onClick={() => removePokemonFromFavList(id)}
                    />
                </ImageStyles>
            )}
        </>
    );
}
