import { useState } from 'react';
import { pokemonTypeColors } from '../data/colors';
import type { PokemonDetails } from '../types/pokemon';

const MAX_MOVES_TO_SHOW = 20;

const MovesList = ({
  moves,
  primaryType,
}: {
  moves: PokemonDetails['moves'];
  primaryType: string;
}) => {
  const [expanded, setExpanded] = useState(false);

  const visibleMoves = expanded ? moves : moves.slice(0, MAX_MOVES_TO_SHOW);

  return (
    <div className="flex flex-wrap gap-2">
      {visibleMoves?.map(move => {
        const parsedMoveName = move.move.name.split('-').join(' ');
        return (
          <div
            key={move.move.name}
            className="text-[10px] font-semibold text-gray-700 rounded-full uppercase bg-white border px-2 py-1"
            style={{
              borderColor: pokemonTypeColors[primaryType].bgColor,
              borderWidth: '2px',
            }}
          >
            {parsedMoveName}
          </div>
        );
      })}

      <button
        className="text-[10px] font-semibold text-gray-700 rounded-full uppercase px-2 py-1"
        style={{
          backgroundColor: pokemonTypeColors[primaryType].bgColor,
        }}
        onClick={() => setExpanded(prev => !prev)}
      >
        {expanded ? 'Show Less' : `+${moves.length - MAX_MOVES_TO_SHOW} More`}
      </button>
    </div>
  );
};

export { MovesList };
