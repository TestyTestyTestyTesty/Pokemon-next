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
      {types.map((type: TypeInterface) => (
        <TypeStyles key={type.type.id} color={type.type.name}>
          {type.type.name}
        </TypeStyles>
      ))}
    </TypesStyles>
  );
}
