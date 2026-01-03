import { usePokemonDetails } from '../queries/get-pokemon';
import type {
  EvolutionChain as EvolutionChainType,
  EvolutionChainLink,
} from '../types/evolution';
import { getHeroImage } from '../utils/hero-image';

type EvolutionChainProps = {
  evolutionChainData: EvolutionChainType;
};

const EvolutionChainLinkCard = ({
  name,
  currentChainLevel,
}: {
  name: string;
  currentChainLevel: number;
}) => {
  const pokemonDetails = usePokemonDetails(name);

  if (pokemonDetails.isLoading) {
    return (
      <div className="w-40 h-40 animate-pulse bg-gray-200 rounded-md"></div>
    );
  }

  const paddedId = pokemonDetails.data?.id.toString().padStart(3, '0');
  const heroImage = paddedId ? getHeroImage(paddedId) : '';

  return (
    heroImage && (
      <div className="flex items-center justify-center rounded-lg bg-white px-4 w-[220px] h-[220px] border border-gray-200 hover:bg-gray-50 cursor-pointer">
        <img
          src={heroImage}
          className={`object-contain z-10`}
          style={{
            width: `calc(160px + ${currentChainLevel * 30}px)`,
          }}
        />
      </div>
    )
  );
};

const EvolutionChainList = ({
  evolves_to,
  species,
  currentChainLevel,
}: EvolutionChainLink & { currentChainLevel: number }) => {
  const nextEvolution = evolves_to?.[0];

  if (!nextEvolution && !species) {
    // which means no further evolution present
    // and no current pokemon evolution present
    return null;
  }

  return (
    <>
      <EvolutionChainLinkCard
        name={species.name}
        currentChainLevel={currentChainLevel}
      />
      <EvolutionChainList
        {...nextEvolution}
        currentChainLevel={currentChainLevel + 1}
      />
    </>
  );
};

const EvolutionChain = ({ evolutionChainData }: EvolutionChainProps) => {
  return (
    <div className="flex gap-10 items-start">
      <EvolutionChainList {...evolutionChainData.chain} currentChainLevel={0} />
    </div>
  );
};

export { EvolutionChain };
