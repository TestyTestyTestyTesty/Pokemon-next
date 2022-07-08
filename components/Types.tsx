import Link from "next/link";
import React from "react";
import { TypesStyles, TypeStyles } from "./styles/Types.styled";

export interface TypeInterface {
  id: number;
  name: string;
}

export interface Types {
  types: TypeInterface
}
export default function Types({ types }: any) {
  
  return (
    <TypesStyles>
      {types.map((type: TypeInterface) => {
        <Link key={type.id} href={`/type/${type.id}`} passHref>
          <TypeStyles color={type.name}>{type.name}</TypeStyles>
        </Link>;
      })}
    </TypesStyles>
  );
}
