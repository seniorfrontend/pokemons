export interface Ipokemon {
    name: string;
    url: string;
}

export interface IpokemonSearchResponse {
    count: number,
    next: string,
    previous: string,
    results: Ipokemon[]
}