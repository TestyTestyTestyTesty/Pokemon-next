import React from "react";
import { LayoutStyles, Container } from "./styles/LayoutStyles";
import Header from './header'
import GenerationList from "./GenerationList";
export default function Layout({ children }) {
  return (
    <LayoutStyles>
      <Header/>
      <GenerationList/>
      <Container>{children}</Container>
    </LayoutStyles>
  );
}
