import { useQuery } from '@tanstack/react-query';
import { httpClient } from '../lib/http-client';
import type { PokemonDetails } from '../types/pokemon';

const useNormalisedPokemonList = (page: number, limit: number) => {
  return useQuery({
    queryKey: ['pokemon', 'normalised-list', page, limit],
    enabled: !!page,
    queryFn: (): Promise<{ results: { name: string; url: string }[] }> =>
      httpClient
        .get(`pokemon?limit=${limit}&offset=${(page - 1) * limit}`)
        .json(),
    staleTime: 5 * 60 * 1000, //cache for 5 minutes
  });
};

const usePokemonDetails = (pokemonName: string) => {
  return useQuery({
    queryKey: ['pokemon', 'details', pokemonName],
    enabled: !!pokemonName,
    queryFn: (): Promise<PokemonDetails> =>
      httpClient.get(`pokemon/${pokemonName}`).json(),
    staleTime: 30 * 60 * 1000, //cache for 5 minutes
  });
};

export { useNormalisedPokemonList, usePokemonDetails };
