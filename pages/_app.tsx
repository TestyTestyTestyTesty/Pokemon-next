import "../styles/globals.css";
import { ApolloProvider, gql } from "@apollo/client";
import type { AppProps } from "next/app";
import { client } from "../lib/apollo";
import Layout from "../components/Layout";
import { PokemonSumContext } from "../contexts/PokemonSumContext";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [pokemonSum, setPokemonSum] = useState(null);
  useEffect(() => {
    client
      .query({
        query: gql`
          query POKEMON_SUM_QUERY {
            pokemon: pokemon_v2_pokemonspecies_aggregate {
              aggregate {
                count
              }
            }
          }
        `,
      })
      .then((result) =>
        setPokemonSum(result.data.pokemon.aggregate.count)
      );
  }, []);

  return (
    <ApolloProvider client={client}>
      <PokemonSumContext.Provider value={{ pokemonSum, setPokemonSum }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PokemonSumContext.Provider>
    </ApolloProvider>
  );
}

export default MyApp;
