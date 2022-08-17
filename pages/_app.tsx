import { ApolloProvider, gql } from "@apollo/client";
import "../styles/styles.css";
import "../styles/pagination.scss";
import type { AppProps } from "next/app";
import { client } from "../lib/apollo";
import Layout from "../components/Layout";
import { PokemonSumContext } from "../contexts/PokemonSumContext";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/GlobalStyles";
import { themeLight, themeDark } from "../styles/themes";
import { ThemeContext } from "../contexts/ThemeContext";
import { PokemonFavProvider } from "../contexts/PokemonFavContext";
import Head from "next/head";
import { PaginationContext } from "../contexts/PaginationContext";

function MyApp({ Component, pageProps }: AppProps) {
    const [pokemonSum, setPokemonSum] = useState<number | null>(null);

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

    const [theme, setTheme] = useState("light");
    const themeToggler = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };
    const [perPage, setPerPage] = useState({ value: 25, label: 25 });
    const perPageToggler = (number: any) => {
        setPerPage(number);
    };
    return (
        <ApolloProvider client={client}>
            <Head>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/images/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
                <link
                    rel="mask-icon"
                    href="/safari-pinned-tab.svg"
                    color="#5bbad5"
                />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
            </Head>
            <ThemeContext.Provider value={{ theme, themeToggler }}>
                <PaginationContext.Provider value={{ perPage, perPageToggler }}>
                    <PokemonSumContext.Provider
                        value={{ pokemonSum, setPokemonSum }}
                    >
                        <PokemonFavProvider>
                            <ThemeProvider
                                theme={
                                    theme === "light" ? themeLight : themeDark
                                }
                            >
                                <GlobalStyles />
                                <Layout>
                                    <Component {...pageProps} />
                                </Layout>
                            </ThemeProvider>
                        </PokemonFavProvider>
                    </PokemonSumContext.Provider>
                </PaginationContext.Provider>
            </ThemeContext.Provider>
        </ApolloProvider>
    );
}

export default MyApp;
