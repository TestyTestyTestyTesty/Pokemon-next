
import Head from "next/head";
import React, { useContext } from "react";

import TypesList from "../../components/TypesList";

export default function Pokemon() {
  return (
    <div>
      <Head>
        <title>Pokemon App | List of types</title>
      </Head>
      <TypesList />
    </div>
  );
}
