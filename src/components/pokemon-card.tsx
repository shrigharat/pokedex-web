import { Link } from '@tanstack/react-router';
import { pokemonTypeColors } from '../data/colors';
import { usePokemonDetails } from '../queries/get-pokemon';
import { getHeroImage } from '../utils/hero-image';

const PokemonCard = ({ name }: { name: string }) => {
  const { data, status } = usePokemonDetails(name);

  if (status === 'pending') {
    return (
      <div
        className="w-full bg-white h-[280px] rounded-lg p-2 animate-pulse"
        key={name}
      >
        <div className="h-[200px] w-full bg-gray-200 "></div>
        <div className="flex flex-col gap-2 mt-2">
          <div className="flex justify-between">
            <div className="h-[20px] w-[100px] bg-gray-200 rounded-md"></div>
            <div className="h-[20px] w-[100px] bg-gray-200 rounded-md"></div>
          </div>
        </div>
      </div>
    );
  }

  if (status === 'error') {
    return null;
  }

  const paddedId = data?.id.toString().padStart(3, '0');
  const heroImage = getHeroImage(paddedId);

  return (
    <Link
      to="/pokemon/$name"
      params={{ name }}
      className="w-full bg-white h-[280px] rounded-lg p-2"
      key={name}
    >
      <div
        className="rounded-md"
        style={{
          backgroundColor:
            pokemonTypeColors[data.types[0].type.name].bgColor || '#e5e5e5',
        }}
      >
        <img src={heroImage} className="w-full h-[200px] object-contain" />
      </div>
      <div className="flex flex-col gap-2 mt-2">
        <div className="flex justify-between">
          <h2 className="text-xl capitalize font-bold text-gray-600">
            {data.name}
          </h2>
          <p className="text-lg capitalize font-semibold text-gray-400">
            #{paddedId}
          </p>
        </div>
        <div className="flex gap-2">
          {data.types.map(type => (
            <div
              key={type.type.name}
              className="text-[10px] tracking-wider font-bold text-white uppercase rounded-full px-[6px] py-[2px]"
              style={{
                backgroundColor: pokemonTypeColors[type.type.name].bgColor,
                color: pokemonTypeColors[type.type.name].textColor,
              }}
            >
              {type.type.name}
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
};

export { PokemonCard };
