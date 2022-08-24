import { ApolloProvider, gql } from "@apollo/client";
import "../styles/styles.css";
import "../styles/pagination.scss";
import type { AppProps } from "next/app";
import { client } from "../lib/apollo";
import Layout from "../components/Layout";
import { PokemonSumContextProvider } from "../contexts/PokemonSumContext";
import { GlobalStyles } from "../styles/GlobalStyles";
import { ThemeContextProvider } from "../contexts/ThemeContext";
import { PokemonFavContextProvider } from "../contexts/PokemonFavContext";
import { PaginationContextProvider } from "../contexts/PaginationContext";
import AppHead from "../components/AppHead";
import ThemeWrapper from "../components/ThemeWrapper";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ApolloProvider client={client}>
            <AppHead />
            <ThemeContextProvider>
                <PaginationContextProvider>
                    <PokemonSumContextProvider>
                        <PokemonFavContextProvider>
                            <ThemeWrapper>
                                <GlobalStyles />
                                <Layout>
                                    <Component {...pageProps} />
                                </Layout>
                            </ThemeWrapper>
                        </PokemonFavContextProvider>
                    </PokemonSumContextProvider>
                </PaginationContextProvider>
            </ThemeContextProvider>
        </ApolloProvider>
    );
}

export default MyApp;
