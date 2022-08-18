import { gql, useQuery } from "@apollo/client";
import React, { useContext } from "react";
import FavouriteEmptyPage from "../components/FavouriteEmptyPage";
import LoadingSpinner from "../components/LoadingSpinner";
import PokemonList from "../components/PokemonList";
import { PokemonFavContext } from "../contexts/PokemonFavContext";
import { TitleStyles } from "../components/styles/Favourite.styled";
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
    const { pokemonFavList }: any = FavContext;
    const { data, error, loading } = useQuery(POKEMON_FAV_QUERY, {
        variables: {
            pokemonArr: pokemonFavList,
        },
    });

    if (loading) return <LoadingSpinner />;
    if (error) return <p>Error :(</p>;

    return (
        <div>
            <Title>Favourite list</Title>
            {pokemonFavList.length ? (
                <PokemonList data={data.pokemons} />
            ) : (
                <FavouriteEmptyPage />
            )}
        </div>
    );
}
