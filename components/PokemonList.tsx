import React, { useContext, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { PokemonListStyles } from "./styles/PokemonList.styled";
import { PokemonInterface } from "../intefaces/pokemon";
import PokemonListItem from "./PokemonListItem";
import PerPage from "./PerPage";
import { PaginationContext } from "../contexts/PaginationContext";

interface Pokemon {
    data: {
        id: number;
        name: string;
    }[];
}

export default function PokemonList({ data }: any) {
    const { perPage }: any = useContext(PaginationContext);
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + perPage.value;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / perPage.value));
    }, [itemOffset, perPage.value, data, pageCount]);

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * perPage.value) % data.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <PerPage />
            <PokemonListStyles>
                {currentItems &&
                    currentItems.map((pokemon: PokemonInterface) => {
                        return (
                            <PokemonListItem
                                key={pokemon.id}
                                pokemon={pokemon}
                            />
                        );
                    })}
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
