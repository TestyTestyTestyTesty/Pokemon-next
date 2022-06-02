import React from "react";
import { LayoutStyles, Container } from "./styles/Layout.styled";
import Header from "./Header";


interface children {
  children: React.ReactNode;
}
export default function Layout({ children }: children) {
  return (
    <LayoutStyles>
      <Header />
      <Container>{children}</Container>
    </LayoutStyles>
  );
}
