import { useSelector } from "react-redux"
import Header from "../components/pokedex/Header"
import { useEffect, useState } from "react"
import axios from "axios"
import PokemonsList from "../components/pokedex/PokemonsList"

const Pokedex = () => {

  /* Array de pokemons */
  const [pokemons, setPokemons] = useState([])

  /* Filtrar pokemons por nombre */
  const [pokemonName, setPokemonName] = useState("")

  /* Tipos de pokemons */
  const [types, setTypes] = useState([])

  /* Tipo de pokemon actual en <select> */
  const [currentType, setCurrentType] = useState("")

  /* Página actuial */
  const [currentPage, setCurrentPage] = useState(1)

  /* Nombre de entrenador como estado global */
  const nameTrainer = useSelector((store) => store.nameTrainer)

  const pokemonsByName = pokemons.filter((pokemon) => pokemon.name.includes(pokemonName.toLowerCase().trim()))

  const paginationLogic = () => {
    const ITEMS_PER_PAGE = 12

    const sliceStart = (currentPage - 1) * ITEMS_PER_PAGE
    const sliceEnd = sliceStart + ITEMS_PER_PAGE

    const itemsInPage = pokemonsByName.slice(sliceStart, sliceEnd)

    const lastPage = Math.ceil(pokemonsByName.length / ITEMS_PER_PAGE) || 1

    const PAGES_PER_BLOCK = 5
    const actualBlock = Math.ceil(currentPage / PAGES_PER_BLOCK)

    const pagesInBlock = []
    const minPage = (actualBlock - 1) * PAGES_PER_BLOCK + 1
    const maxPage = actualBlock * PAGES_PER_BLOCK

    for (let i = minPage; i <= maxPage; i++) {
      if (i <= lastPage) {
        pagesInBlock.push(i)
      }
    }

    return { itemsInPage, lastPage, pagesInBlock }
  }

  const { lastPage, pagesInBlock, itemsInPage } = paginationLogic()

  const previousPage = () => {
    const newCurrentPage = currentPage - 1

    if (newCurrentPage >= 1) {
      setCurrentPage(newCurrentPage)
    }
  }

  const nextPage = () => {
    const newCurrentPage = currentPage + 1

    if (newCurrentPage <= lastPage) {
      setCurrentPage(newCurrentPage)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setPokemonName(e.target.pokemonName.value)
    setTypes[0]
  }

  const changeType = (e) => {
    setCurrentType(e.target.value)
    setPokemonName("")
  }

  useEffect(() => {

    if (!currentType) {

      const URL = 'https://pokeapi.co/api/v2/pokemon?limit=1281'
      axios.get(URL)
        .then(({ data }) => setPokemons(data.results))
        .catch((err) => console.log(err))
    }
  }, [currentType])

  useEffect(() => {

    const URL = 'https://pokeapi.co/api/v2/type'

    axios.get(URL)
      .then(({ data }) => setTypes(data.results))
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {

    if (currentType) {
      const URL = `https://pokeapi.co/api/v2/type/${currentType}/`

      axios.get(URL)
        .then(({ data }) => {
          const pokemonsByType = data.pokemon.map(pokemon => pokemon.pokemon)
          setPokemons(pokemonsByType)
        })
        .catch((err) => console.log(err))
    }
  }, [currentType])

  useEffect(() => {

    setCurrentPage(1)
  }, [pokemonName, currentType])

  return (
    <main >
      <Header />

      <section className="text-md m:text-lg xxl:text-xl px-2 py-5 m:px-4 m:py-8 xxl:py-4">
        <span className="font-semibold text-red-600">Welcome, {nameTrainer}.</span>
        <hr />
        <p className="">Here you will find your favorite pokemon</p>
      </section>

      <form onSubmit={handleSubmit} className="flex justify-evenly pt-5 m:py-6">
        <div>
          <input id="pokemonName" className="h-[40px] rounded-l-full bg-white p-2.5 text-slate-400 shadow-md shadow-gray-200 text-[14px] m:w-[350px] m:text-[16px] l:w-[450px]" placeholder="Find your Pokemon..." type="text" />

          <button className="h-[40px] aspect-square bg-red-600 text-white p-2.5 text-[14px] rounded-r-full shadow-md shadow-gray-200 hover:bg-red-500 m:w-[50px]" type="button"><i className='bx bx-search'></i></button>
        </div>
      </form>

      <div className="p-5 m:justify-start m:py-8">
        <select className="w-[50%] bg-transparent text-sm p-2 capitalize m:w-[30%] m:text-md l:w-[20%]" onChange={changeType}>
          <option  value="">All pokemons</option>
          {
            types.map((type) => (
              <option value={type.name} key={type.url}> {type.name} </option>
            ))}
        </select>
      </div>

      <PokemonsList pokemons={itemsInPage} />

      {/* Paginación */}
      <ul className="flex gap-1 justify-center items-center py-3 px-2 flex-wrap text-sm m:pb-6 m:text-md m:space-x-3 l:space-x-4">

        {/* Primera página */}

        <li onClick={() => setCurrentPage(1)} className="flex items-center justify-center h-[34px] aspect-square rounded-md p-2 bg-red-600 text-white cursor-pointer m:h-[40px]"><i className='bx bx-first-page' ></i></li>

        {/* Página anterior */}
        <li onClick={previousPage} className="flex items-center justify-center h-[34px] aspect-square rounded-md p-2 bg-red-600 text-white cursor-pointer m:h-[40px]">{"<"}</li>

        {/* Lista de páginas */}
        {
          pagesInBlock.map(numPage => <li onClick={() => setCurrentPage(numPage)} className={`flex items-center justify-center h-[34px] aspect-square rounded-md p-2 bg-red-600 text-white cursor-pointer m:h-[40px] ${numPage === currentPage && "bg-red-400"} `} key={numPage} > {numPage} </li>)
        }

        {/* Página siguiente */}
        <li onClick={nextPage} className="flex items-center justify-center h-[34px] aspect-square rounded-md p-2 bg-red-600 text-white cursor-pointer m:h-[40px]">{">"}</li>

        {/* Última página */}

        <li onClick={() => setCurrentPage(lastPage)} className="flex items-center justify-center h-[34px] aspect-square rounded-md p-2 bg-red-600 text-white cursor-pointer m:h-[40px]"><i className='bx bx-last-page' ></i></li>

      </ul>



    </main>
  )
}

export default Pokedex
