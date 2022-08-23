import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ImageWrapperStyles } from "./styles/GuessPokemonImage.styled";

export default function GuessPokemonImage({ id,answerStatus }: any) {
    const [exists, setExists] = useState(false);
    
    useEffect(() => {
        fetch(
            `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
            { method: "HEAD" }
        ).then((res) => {
            res.ok ? setExists(true) : setExists(false);
        });
    }, [exists, id]);
    return (
        <ImageWrapperStyles showImage={answerStatus}>
            <Image
                src={
                    exists
                        ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
                        : "/assets/placeholder-image.png"
                }
                width="300"
                height="300"
                alt="guess who that is"
            />
        </ImageWrapperStyles>
    );
}
