import Link from "next/link";
import React from "react";
import { TypesStyles, TypeStyles } from "./styles/Types.styled";

export interface TypeInterface {
    id: number;
    name: string;
}

export interface Types {
    types: TypeInterface;
}
export default function Types({ types }: any) {
    return (
        <TypesStyles>
            <>
                {types.map((type: any) => (
                    <Link
                        key={type.type.id}
                        href={`/type/${type.type.name}`}
                        passHref
                    >
                        <TypeStyles color={type.type.name}>
                            {type.type.name}
                        </TypeStyles>
                    </Link>
                ))}
            </>
        </TypesStyles>
    );
}
