import { pokemonTypeColors, pokemonTypeGradients } from '../data/colors';
import {
  useEvolutionChain,
  usePokemonDetails,
  usePokemonSpecies,
} from '../queries/get-pokemon';
import { Route as PokemonDetailsRoute } from '../routes/pokemon.$name';
import { getHeroImage } from '../utils/hero-image';
import pokeballBg from '../assets/pokeball-bg.svg';
import { EvolutionChain } from '../components/evolution-chain';
import { MovesList } from '../components/moves-list';

const PokemonDetails = () => {
  const { name } = PokemonDetailsRoute.useParams();
  const pokemonDetailsQuery = usePokemonDetails(name);

  const speciesUrl = pokemonDetailsQuery.data?.species?.url;
  const speciesIdString = speciesUrl
    ? speciesUrl.split('pokemon-species/').pop()?.replace('/', '')
    : undefined;
  const speciesQuery = usePokemonSpecies(speciesIdString);

  const evolutionChainId = speciesQuery.data?.evolution_chain?.url
    ? speciesQuery.data.evolution_chain.url
        .split('evolution-chain/')
        .pop()
        ?.replace('/', '')
    : undefined;
  const evolutionChainQuery = useEvolutionChain(evolutionChainId);
  const primaryType = pokemonDetailsQuery.data?.types[0].type.name || 'normal';
  const gradientShades = primaryType ? pokemonTypeGradients[primaryType] : [];
  const heightInMeters = pokemonDetailsQuery.data?.height
    ? pokemonDetailsQuery.data.height / 10
    : 0;

  if (pokemonDetailsQuery.isLoading) {
    return (
      <div className="flex flex-col gap-4 mt-12">
        <div className="flex gap-4">
          <div className="w-2/6 h-[400px] animate-pulse bg-gray-200 rounded-md"></div>
          <div className="w-4/6 h-[400px] animate-pulse rounded-md">
            <div className="flex flex-col gap-2">
              <div className="h-4 w-1/2 bg-gray-200 rounded-md"></div>
              <div className="h-4 w-1/3 bg-gray-200 rounded-md"></div>
              <div className="h-4 w-1/4 bg-gray-200 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const paddedId = pokemonDetailsQuery.data?.id.toString().padStart(3, '0');
  const heroImage = paddedId ? getHeroImage(paddedId) : '';

  return (
    <div className="flex flex-col gap-12 mt-12">
      <div className="flex gap-12">
        <div
          className="relative flex items-center justify-center w-2/6 h-[500px] rounded-lg"
          style={{
            background: `linear-gradient(to bottom right, ${gradientShades[0]}, ${gradientShades[2]})`,
          }}
        >
          {heroImage && (
            <img src={heroImage} className="w-full object-contain z-10" />
          )}
          <img
            src={pokeballBg}
            className="absolute top-[-50%] right-[-20%] w-full h-full opacity-20"
          />
        </div>
        <div className="w-4/6 flex flex-col items-start gap-2">
          <div className="w-full flex gap-4 items-end">
            <h1 className="capitalize text-6xl font-semibold text-primary">
              {pokemonDetailsQuery.data?.name}
            </h1>
            <span className="text-6xl font-semibold text-gray-400">
              #{paddedId}
            </span>
          </div>
          <div className="flex gap-2">
            {pokemonDetailsQuery.data?.types.map(type => (
              <div
                key={type.type.name}
                className="text-sm tracking-wider font-bold text-white uppercase rounded-full px-[10px] py-[2px]"
                style={{
                  backgroundColor: pokemonTypeColors[type.type.name].bgColor,
                  color: pokemonTypeColors[type.type.name].textColor,
                }}
              >
                {type.type.name}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 w-full gap-2 mt-4">
            {pokemonDetailsQuery.data?.stats.map(stat => (
              <div
                key={stat.stat.name}
                className="flex flex-col gap-1 bg-white rounded-lg px-4 py-2 border border-gray-200"
              >
                <p className="text-3xl font-bold text-gray-700 tracking-tighter">
                  {stat.base_stat}
                </p>
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
                  {stat.stat.name.replace('-', ' ')}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2 mt-8">
            <div className="flex gap-2 text-large font-bold text-gray-700">
              <p className=" uppercase ">Height:</p>
              <p className="">{heightInMeters} m</p>
            </div>
            <div className="flex gap-2 text-large font-bold text-gray-700">
              <p className=" uppercase">Weight:</p>
              <p className=" ">{pokemonDetailsQuery.data?.weight} kg</p>
            </div>
            <div className="flex flex-col items-start gap-2 text-large font-bold text-gray-700">
              <p className="uppercase">Moves</p>
              <MovesList
                moves={pokemonDetailsQuery.data?.moves || []}
                primaryType={primaryType}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-start">
        <h2 className="text-3xl font-semibold">Evolution Chain</h2>
        {evolutionChainQuery.data && (
          <EvolutionChain evolutionChainData={evolutionChainQuery.data} />
        )}
      </div>
    </div>
  );
};

export { PokemonDetails };
