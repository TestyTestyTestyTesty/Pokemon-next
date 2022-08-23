import Image from "next/image";
import React, { useContext, useEffect } from "react";
import { PokemonFavContext } from "../contexts/PokemonFavContext";
import { ImageStyles } from "./styles/FavouriteButton.styled";

export default function FavouriteButton({ id }: { id: number }) {
    const { state, dispatch } = useContext(PokemonFavContext);

    return (
        <>
            {!state.favList.includes(id) ? (
                <ImageStyles>
                    <Image
                        src="/assets/favourite-empty.svg"
                        alt="add to favourite"
                        width="30"
                        height="30"
                        onClick={() =>
                            dispatch({
                                type: "ADD_POKEMON_TO_FAV",
                                payload: id,
                            })
                        }
                    />
                </ImageStyles>
            ) : (
                <ImageStyles>
                    <Image
                        src="/assets/favourite-fill.svg"
                        alt="remove from favourite"
                        width="30"
                        height="30"
                        onClick={() =>
                            dispatch({
                                type: "REMOVE_POKEMON_FROM_FAV",
                                payload: id,
                            })
                        }
                    />
                </ImageStyles>
            )}
        </>
    );
}
