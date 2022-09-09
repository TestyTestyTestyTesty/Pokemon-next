import { gql, useQuery } from "@apollo/client";
import React, { useContext, useEffect, useState } from "react";
import FavouriteEmptyPage from "../components/FavouriteEmptyPage";
import LoadingSpinner from "../components/LoadingSpinner";
import PokemonList from "../components/PokemonList";
import { PokemonFavContext } from "../contexts/PokemonFavContext";
import Title from "../components/Title";

const POKEMON_FAV_QUERY = gql`
    query POKEMON_FAV_QUERY($pokemonArr: [Int!]) {
        pokemons: pokemon_v2_pokemon(where: { id: { _in: $pokemonArr } }) {
            name
            id
        }
    }
`;
export default function Favourites() {
    const FavContext = useContext(PokemonFavContext);

    const { state }: any = FavContext;
    const { data, error, loading } = useQuery(POKEMON_FAV_QUERY, {
        variables: {
            pokemonArr: state.favList,
        },
    });

    if (loading) return <LoadingSpinner />;
    if (error) return <p>Error :(</p>;

    return (
        <div>
            <Title>Favourite list</Title>
            {state.favList.length ? (
                <PokemonList data={data.pokemons} />
            ) : (
                <FavouriteEmptyPage />
            )}
        </div>
    );
}
