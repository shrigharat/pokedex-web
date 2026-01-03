type EvolutionTrigger = {
  name: string;
  url: string;
};

type EvolutionDetail = {
  gender: string | null;
  trigger: EvolutionTrigger;
};

export type EvolutionChainLink = {
  evolution_details: EvolutionDetail[];
  evolves_to: EvolutionChainLink[];
  is_baby: boolean;
  species: {
    name: string;
    url: string;
  };
};

export type EvolutionChain = {
  chain: EvolutionChainLink;
  id: number;
};
