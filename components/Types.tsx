import Link from "next/link";
import React from "react";
import { TypesStyles, TypeStyles } from "./styles/Types.styled";

interface TypeInterface {
  type: {
    id: number;
    name: string;
  };
}
export default function Types({ types }: { types: any }) {
  return (
    <TypesStyles>
      {types.map((type: TypeInterface) => {
        <Link key={type.type.id} href={`/type/${type.type.id}`} passHref>
          <TypeStyles color={type.type.name}>{type.type.name}</TypeStyles>
        </Link>;
      })}
    </TypesStyles>
  );
}
