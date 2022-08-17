import React, { useContext, useEffect, useRef, useState } from "react";
import { gql, useLazyQuery, useQuery } from "@apollo/client";
import LoadingSpinner from "./LoadingSpinner";
import { PokemonSumContext } from "../contexts/PokemonSumContext";
import PokemonList from "./PokemonList";
import {
  FormStyles,
  InputStyles,
  InputWrapperStyles,
  LabelStyles,
  SubmitStyles,
} from "./styles/SearchForm.styled";

const POKEMON_SEARCH_QUERY = gql`
  query POKEMON_SEARCH_QUERY($name: String!, $maxId: Int!) {
    pokemons: pokemon_v2_pokemon(
      where: { name: { _ilike: $name }, id: { _lte: $maxId } }
      limit: 2
    ) {
      pokemon_species_id
      name
      id
    }
  }
`;
interface ContextProps {
  pokemonSum?: number;
}
export default function SearchForm() {
  const { pokemonSum }: ContextProps = useContext(PokemonSumContext);

  const searchRef = useRef<HTMLInputElement | null>(null);
  const [getSearches, { called, loading, data }] =
    useLazyQuery(POKEMON_SEARCH_QUERY);

  const searchHandler = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    getSearches({
      variables: {
        name: `%${searchRef.current?.value}%`,
        maxId: pokemonSum,
      },
    });
  };
  if (loading) return <LoadingSpinner />;

  return (
    <div>
      <FormStyles>
        <LabelStyles htmlFor="search">Search pokemon</LabelStyles>
        <InputWrapperStyles>
          <InputStyles
            type="text"
            placeholder="search"
            ref={searchRef}
            id="search"
          />
          <SubmitStyles
            type="submit"
            value="Search"
            onClick={(e) => searchHandler(e)}
          />
        </InputWrapperStyles>
      </FormStyles>
      {data?.pokemons?.length > 0 && <PokemonList data={data.pokemons} />}
      {data?.pokemons?.length === 0 && <p>nothing was found</p>}
    </div>
  );
}
