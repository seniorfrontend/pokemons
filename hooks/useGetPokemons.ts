import { searchService } from "services/search/searchService";
import useSWR from "swr";


export const useGetPokemons = (offset: number) => {
  const { data, error } = useSWR(String(offset), searchService.getPokemons);

  return {
    pokemons: data?.data.results,
    isLoading: !error && !data?.data,
    isError: error,
  };
};
