import Head from "next/head";
import React, { useContext } from "react";

import GenerationList from "../../components/GenerationList";

export default function Pokemon() {
  return (
    <>
      <Head>
        <title>Pokemon App | List of generations</title>
      </Head>
      <GenerationList />
    </>
  );
}
