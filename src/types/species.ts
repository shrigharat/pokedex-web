type PokemonSpecies = {
  capture_rate: number;
  color: {
    name: string;
    url: string;
  };
  evolution_chain: {
    url: string;
  };
  flavor_text_entries: {
    flavor_text: string;
    language: {
      name: string;
      url: string;
    };
  }[];
  generation: {
    name: string;
    url: string;
  };
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  order: number;
};

export type { PokemonSpecies };
