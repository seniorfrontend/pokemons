import React from 'react';
import { Ipokemon } from 'types/pokemonTypes';
import * as Styling from "./pokemonCard-styling"

interface Iprops extends Omit<Ipokemon, "url"> {

}

function PokemonCard({ name }: Iprops) {
    return (
        <Styling.Card>
            <Styling.Name>{name}</Styling.Name>
        </Styling.Card>
    );
}

export default PokemonCard;
