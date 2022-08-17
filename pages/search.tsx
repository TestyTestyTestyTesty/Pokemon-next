import Head from "next/head";
import React from "react";
import SearchForm from "../components/SearchForm";
import { Container } from "../components/styles/index.styled";

export default function search() {
  return (
    <>
      <Head>
        <title>Pokemon App | Search</title>
      </Head>
      <SearchForm />
    </>
  );
}
