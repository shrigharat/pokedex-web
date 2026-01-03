import { createFileRoute } from '@tanstack/react-router';
import { PokemonDetails } from '../pages/pokemon-details';

export const Route = createFileRoute('/pokemon/$name')({
  component: RouteComponent,
});

function RouteComponent() {
  return <PokemonDetails />;
}
