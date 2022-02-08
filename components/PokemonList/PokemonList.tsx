import PokemonCard from 'components/PokemonCard/PokemonCard';
import React from 'react';
import { Ipokemon } from 'types/pokemonTypes';

import * as Styling from "./pokemonList-styling"

interface Iprops {
    pokemons?: Ipokemon[];
    isLoading?: boolean;
    isError?: boolean;
}

function PokemonList({ pokemons, isLoading, isError }: Iprops) {
    if (isLoading) {
        return <Styling.Loading>Loading</Styling.Loading>
    }

    if (isError) {
        return <Styling.Error>Error</Styling.Error>
    }

    return <Styling.List>
        {Array.isArray(pokemons) && pokemons.map(pokemon => (
            <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
            />
        ))}
    </Styling.List>;
}

export default PokemonList;
