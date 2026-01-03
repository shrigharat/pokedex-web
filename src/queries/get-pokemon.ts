import { useQuery } from '@tanstack/react-query';
import { httpClient } from '../lib/http-client';
import type { PokemonDetails } from '../types/pokemon';
import type { EvolutionChain } from '../types/evolution';
import type { PokemonSpecies } from '../types/species';

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

const usePokemonDetails = (pokemonName?: string) => {
  return useQuery({
    queryKey: ['pokemon', 'details', pokemonName],
    enabled: !!pokemonName,
    queryFn: (): Promise<PokemonDetails> =>
      httpClient.get(`pokemon/${pokemonName}`).json(),
    staleTime: 30 * 60 * 1000, //cache for 5 minutes
  });
};

const usePokemonSpecies = (speciesId?: string) => {
  return useQuery({
    queryKey: ['pokemon', 'species', speciesId],
    enabled: !!speciesId,
    queryFn: (): Promise<PokemonSpecies> =>
      httpClient.get(`pokemon-species/${speciesId}`).json(),
    staleTime: 30 * 60 * 1000, //cache for 5 minutes
  });
};

const useEvolutionChain = (evolutionChainId?: string) => {
  return useQuery({
    queryKey: ['pokemon', 'evolution-chain', evolutionChainId],
    enabled: !!evolutionChainId,
    queryFn: (): Promise<EvolutionChain> =>
      httpClient.get(`evolution-chain/${evolutionChainId}`).json(),
    staleTime: 30 * 60 * 1000, //cache for 5 minutes
  });
};

export {
  useNormalisedPokemonList,
  usePokemonDetails,
  useEvolutionChain,
  usePokemonSpecies,
};
