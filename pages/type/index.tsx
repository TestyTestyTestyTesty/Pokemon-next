import { gql, useQuery } from "@apollo/client";
import Head from "next/head";
import React, { useContext } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";

import Types from "../../components/Types";
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
