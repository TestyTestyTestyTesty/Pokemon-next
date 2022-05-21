import React from "react";
import { LayoutStyles, Container } from "./styles/LayoutStyles";
import Header from "./Header";
import GenerationList from "./GenerationList";

interface children {
  children: React.ReactNode;
}
export default function Layout({ children }: children) {
  return (
    <LayoutStyles>
      <Header />
      <GenerationList />
      <Container>{children}</Container>
    </LayoutStyles>
  );
}
