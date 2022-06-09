import "../styles/globals.css";
import { ApolloProvider, gql } from "@apollo/client";
import type { AppProps } from "next/app";
import { client } from "../lib/apollo";
import Layout from "../components/Layout";
import { PokemonSumContext } from "../contexts/PokemonSumContext";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./../components/styles/GlobalStyles";
import { themeLight, themeDark } from "./../components/styles/themes";
import { ThemeContext } from "../contexts/ThemeContext";
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
      .then((result) => setPokemonSum(result.data.pokemon.aggregate.count));
  }, []);

  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ApolloProvider client={client}>
      <ThemeContext.Provider value={{ theme, themeToggler }}>
        <PokemonSumContext.Provider value={{ pokemonSum, setPokemonSum }}>
          <ThemeProvider theme={theme === "light" ? themeLight : themeDark}>
            <GlobalStyles />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </PokemonSumContext.Provider>
      </ThemeContext.Provider>
    </ApolloProvider>
  );
}

export default MyApp;
