import axios from "services/axios"
import { IpokemonSearchResponse } from "types/pokemonTypes"

export const searchService = {
    getPokemons: (offset: number) => {
        return axios.get<IpokemonSearchResponse>(`/pokemon?offset=${offset}`)
    }
}