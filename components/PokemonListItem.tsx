import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { PokemonInterface } from "../intefaces/pokemon";
import { capitalizeFirstLetter } from "../lib/capitalizeFirstLetter";
import { hyphenToSpace } from "../lib/hyphenToSpace";
import { IndexNumber } from "../lib/indexNumber";
import FavouriteButton from "./FavouriteButton";
import { PokemonListItemStyles } from "./styles/PokemonListItem.styled";
import { motion, AnimatePresence } from "framer-motion";
export default function PokemonListItem({
    pokemon,
    index,
}: {
    pokemon: PokemonInterface;
    index: number;
}) {
    const [exists, setExists] = useState(false);
    useEffect(() => {
        fetch(
            `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
            { method: "HEAD" }
        ).then((res) => {
            res.ok ? setExists(true) : setExists(false);
        });
    }, [exists, pokemon.id]);

    return (
        <AnimatePresence>
            <PokemonListItemStyles
                as={motion.div}
                layout
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
            >
                <FavouriteButton id={pokemon.id} />
                <Link href={`/pokemon/${pokemon.id}`}>
                    <div>
                        <Image
                            src={
                                exists
                                    ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`
                                    : "/assets/placeholder-image.png"
                            }
                            width="100"
                            height="100"
                            alt={pokemon.name}
                        />
                        <p>
                            {hyphenToSpace(capitalizeFirstLetter(pokemon.name))}
                        </p>
                        <p>#{IndexNumber(pokemon.id)}</p>
                    </div>
                </Link>
            </PokemonListItemStyles>
        </AnimatePresence>
    );
}
