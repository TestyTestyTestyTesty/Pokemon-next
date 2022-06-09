import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import PokemonFilterTypes from "../components/PokemonFilterTypes";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pokemon App</title>
      </Head>
      <PokemonFilterTypes />
    </>
  );
};

export default Home;
