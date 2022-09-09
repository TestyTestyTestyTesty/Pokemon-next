import React, { useContext, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { PokemonListStyles } from "./styles/PokemonList.styled";
import { PokemonInterface } from "../intefaces/pokemon";
import PokemonListItem from "./PokemonListItem";
import PerPage from "./PerPage";
import { PaginationContext } from "../contexts/PaginationContext";
import { motion, AnimatePresence } from "framer-motion";

interface Pokemon {
    data: {
        id: number;
        name: string;
        index?: number;
    }[];
}

export default function PokemonList({ data }: any) {
    const { perPage }: any = useContext(PaginationContext);
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    useEffect(() => {
        const endOffset = itemOffset + perPage.value;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / perPage.value));
    }, [itemOffset, perPage.value, data, pageCount]);

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * perPage.value) % data.length;
        setItemOffset(newOffset);
    };
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 0.5,
            },
        },
    };

    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
    };
    return (
        <>
            <PerPage />
            <PokemonListStyles
                as={motion.div}
                variants={container}
                initial="hidden"
                animate="show"
            >
                {currentItems &&
                    currentItems.map(
                        (pokemon: PokemonInterface, index: number) => {
                            return (
                                <PokemonListItem
                                    key={pokemon.id}
                                    pokemon={pokemon}
                                    index={index}
                                />
                            );
                        }
                    )}
            </PokemonListStyles>
            {currentItems && perPage.value >= currentItems.length && (
                <ReactPaginate
                    breakLabel="..."
                    nextLabel=">"
                    previousLabel="<"
                    pageCount={pageCount}
                    onPageChange={handlePageClick}
                    containerClassName="pagination"
                    pageClassName="pagination__num"
                    previousClassName="pagination__num"
                    nextClassName="pagination__num"
                    activeClassName="pagination__num--active"
                    disabledClassName="pagination__num--disabled"
                />
            )}
        </>
    );
}
