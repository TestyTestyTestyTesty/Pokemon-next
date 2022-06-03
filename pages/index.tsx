import type { NextPage } from "next";
import Link from "next/link";
import PokemonFilterTypes from "../components/PokemonFilterTypes";

const Home: NextPage = () => {
  return (
    <PokemonFilterTypes/>
  );
};

export default Home;
