import { gql } from "@apollo/client";
import Head from "next/head";
import { useContext } from "react";
import NextPokemon from "../../components/NextPokemon";
import PokemonDescription from "../../components/PokemonDescription";
import PreviousPokemon from "../../components/PreviousPokemon";
import ScrollTop from "../../components/ScrollTop";
import { PokemonSumContext } from "../../contexts/PokemonSumContext";
import { client } from "../../lib/apollo";
import { capitalizeFirstLetter } from "../../lib/capitalizeFirstLetter";
interface Props {
    pokemonSum?: number;
}
interface Context {
    params: {
        id: number;
    };
    locales?: string;
    locale?: string;
    deafultLocale?: string;
}
interface Pokemon {
    id: number;
    name: string;
    specy: {
        genderDiff: boolean;
        evolutionChain: {
            pokemons: Specy[];
        };
    };
    types: PokemonType[];
}
interface Specy {
    id: number;
    name: string;
    evolves_from_species_id: null | string;
    is_baby: boolean;
}
interface PokemonType {
    name: string;
    id: number;
}
export default function Pokemon({ pokemon }: any) {
    const { pokemonSum }: Props = useContext(PokemonSumContext);

    return (
        <>
            <Head>
                <title>
                    Pokemon App | {capitalizeFirstLetter(pokemon[0].name)}
                </title>
            </Head>

            <div style={{ position: "relative" }}>
                <PokemonDescription
                    id={pokemon[0].id}
                    name={pokemon[0].name}
                    genderDiff={pokemon[0].specy.genderDiff}
                    types={pokemon[0].types}
                    evolutionChain={pokemon}
                />
                {/*{pokemon[0].specy.evolutionChain.pokemons.length > 1 && (
          <EvolutionChain
            id={pokemon[0].id}
            pokemons={pokemon[0].specy.evolutionChain.pokemons}
          />
        )}*/}
                {pokemon[0].id > 1 && <PreviousPokemon id={pokemon[0].id} />}
                {pokemonSum && pokemon[0].id < pokemonSum && (
                    <NextPokemon id={pokemon[0].id} />
                )}
                <ScrollTop />
            </div>
        </>
    );
}
export async function getServerSideProps(context: Context) {
    const POKEMON_DETAILS_QUERY = gql`
        query POKEMON_DETAILS_QUERY($id: Int!) {
            pokemon: pokemon_v2_pokemon(
                where: { pokemon_species_id: { _eq: $id } }
            ) {
                name
                id
                types: pokemon_v2_pokemontypes {
                    type: pokemon_v2_type {
                        id
                        name
                    }
                }
                specy: pokemon_v2_pokemonspecy {
                    genderDiff: has_gender_differences
                    evolutionChain: pokemon_v2_evolutionchain {
                        pokemons: pokemon_v2_pokemonspecies {
                            id
                            name
                            evolves_from_species_id
                            is_baby
                        }
                    }
                }
            }
        }
    `;
    const { data } = await client.query({
        query: POKEMON_DETAILS_QUERY,
        variables: {
            id: context.params.id,
        },
    });

    return {
        props: {
            pokemon: data.pokemon,
        },
    };
}
