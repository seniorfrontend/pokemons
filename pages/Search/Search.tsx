import Pagination from 'components/Pagination/Pagination';
import PokemonList from 'components/PokemonList/PokemonList';
import { PAGINATION_STEP } from 'constants/constants';
import { useGetPokemons } from 'hooks/useGetPokemons';
import React from 'react';

import * as Styling from "./search-styling"

function Search() {
    const [offset, setOffset] = React.useState<number>(0)
    const { pokemons, isError, isLoading, count } = useGetPokemons(offset)

    const offsetHandler = (page: number) => {
        setOffset(page * PAGINATION_STEP)
    }

    return (
        <Styling.Page>
            <Styling.Title>Pokemons:</Styling.Title>
            <PokemonList
                pokemons={pokemons}
                isError={isError}
                isLoading={isLoading}
            />
            <Pagination totalCount={count} onPageChange={offsetHandler} />
        </Styling.Page>

    );
}

export default Search;
