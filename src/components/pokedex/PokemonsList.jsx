import PokemonCard from './PokemonCard'

const PokemonsList = ({ pokemons }) => {
  return (
    <section className='px-3 py-6'>
      <section className='grid gap-6 grid-cols-[repeat(auto-fill,_280px)] justify-center max-w-[1400px] mx-auto py-6 m:gap-8 l:gap-12'>
      {
        pokemons?.map(pokemon => <PokemonCard key={pokemon.url} pokemonUrl={pokemon.url} />)
      }
      </section>
    </section>
  )
}

export default PokemonsList