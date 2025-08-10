import { useState } from 'react';
import { useNormalisedPokemonList } from '../queries/get-pokemon';
import { PokemonCard } from '../components/pokemon-card';

const PokemonListing = () => {
  const [page] = useState(1);
  const { data: pokemonList, status } = useNormalisedPokemonList(page, 20);

  if (status === 'pending') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>Error</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-2 mt-4">
      {pokemonList.results.map(pokemon => {
        return <PokemonCard name={pokemon.name} />;
      })}
    </div>
  );
};

export { PokemonListing };
