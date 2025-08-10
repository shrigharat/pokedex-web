import { createFileRoute } from '@tanstack/react-router'
import { PokemonListing } from '../pages/pokemon-listing'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (<PokemonListing />)
}
