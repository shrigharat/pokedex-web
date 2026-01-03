type PokemonDetails = {
  name: string;
  abilities: {
    ability: {
      name: string;
    };
  }[];
  base_experience: number;
  height: number;
  weight: number;
  moves: {
    move: {
      name: string;
    };
  }[];
  id: number;
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
  species: {
    name: string;
    url: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
};

export type { PokemonDetails };
