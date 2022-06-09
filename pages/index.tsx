import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import PokemonFilterTypes from "../components/PokemonFilterTypes";
import RandomPokemon from "../components/RandomPokemon";
import {Container} from "./styles/index.styled"
const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Pokemon App</title>
      </Head>
      <PokemonFilterTypes />
      <RandomPokemon />
    </Container>
  );
};

export default Home;
