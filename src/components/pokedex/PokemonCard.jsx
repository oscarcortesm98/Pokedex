import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const cardLinearGradients = {
  normal: "bg-gradient-to-t from-[#D3D3D3] to-[#8D8D94]",
  fighting: "bg-gradient-to-t from-[#F1613C] to-[#CB735D]",
  poison: "bg-gradient-to-t from-[#CE9BFF] to-[#A564E3]",
  ground: "bg-gradient-to-t from-[#D69638] to-[#895C1A]",
  rock: "bg-gradient-to-t from-[#D3D3D3] to-[#8D8D94]",
  bug: "bg-gradient-to-t from-[#AAFFA8] to-[#4AB648]",
  ghost: "bg-gradient-to-t from-[#787DDA] to-[#454AA8]",
  steel: "bg-gradient-to-t from-[#A8A8A8] to-[#728881]",
  fire: "bg-gradient-to-t from-[#F96D6F] to-[#E35825]",
  grass: "bg-gradient-to-t from-[#CAE099] to-[#7EC6C5]",
  water: "bg-gradient-to-t from-[#82B2F1] to-[#1479FB]",
  electric: "bg-gradient-to-t from-[#EAD502] to-[#FFBF00]",
  psychic: "bg-gradient-to-t from-[#787DDA] to-[#454AA8]",
  ice: "bg-gradient-to-t from-[#BDEBFE] to-[#64CBF5]",
  dragon: "bg-gradient-to-t from-[#A2BEC1] to-[#56A4AE]",
  dark: "bg-gradient-to-t from-[#5A5E5D] to-[#0D1211]",
  fairy: "bg-gradient-to-t from-[#CD7D98] to-[#C23867]",
  unknown: "bg-gradient-to-t from-[#D3D3D3] to-[#8D8D94]",
  shadow: "bg-gradient-to-t from-[#5A5E5D] to-[#0D1211]"
}

const cardNames = {
  normal: "text-[#7E7E7E]",
  fighting: "text-[#96402A]",
  poison: "text-[#5B3184]",
  ground: "text-[#654008]",
  rock: "text-[#7E7E7E]",
  bug: "text-[#4AB648]",
  ghost: "text-[#323569]",
  steel: "text-[#5E736C]",
  fire: "text-[#E75C35]",
  water: "text-[#1479FB]",
  grass: "text-[#416460]",
  electric: "text-[#FFBF00]",
  psychic: "text-[#0C1395]",
  ice: "text-[#6FBEDF]",
  dragon: "text-[#478A93]",
  dark: "text-[#030706]",
  fairy: "text-[#971B45]",
  unknown: "text-[#7E7E7E]",
  shadow: "text-[#030706]",
}

const cardBorder = {
  normal: "border-[#8D8D94]",
  fighting: "border-[#CB735D]",
  poison: "border-[#A564E3]",
  ground: "border-[#895C1A]",
  rock: "border-[#8D8D94]",
  bug: "border-[#4AB648]",
  ghost: "border-[#454AA8]",
  steel: "border-[#728881]",
  fire: "border-[#E35825]",
  water: "border-[#1479FB]",
  grass: "border-[#7EC6C5]",
  electric: "border-[#FFBF00]",
  psychic: "border-[#454AA8]",
  ice: "border-[#64CBF5]",
  dragon: "border-[#56A4AE]",
  dark: "border-[#0D1211]",
  fairy: "border-[#C23867]",
  unknown: "border-[#7E7E7E]",
  shadow: "border-[#0D1211]",
}

const PokemonCard = ({ pokemonUrl }) => {

  const [pokemon, setPokemon] = useState(null)

  const formatTypes = (types = []) => {
    const nameTypes = types.map((type) => type.type.name)
    const titleTypes = nameTypes.join(" / ")
    return titleTypes
  }

  formatTypes(pokemon?.types)

  useEffect(() => {

    axios
      .get(pokemonUrl)
      .then(({ data }) => setPokemon(data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <Link to={`/pokedex/${pokemon?.name}`}>

      {/* Contenedor principal */}
      <article className={`border-[8px] rounded-xl h-[430px] w-[260px] ${cardBorder[pokemon?.types[0].type.name]}`}>

        {/* Sección superior */}
        <section className={`relative h-[130px] w-[244px] ${cardLinearGradients[pokemon?.types[0].type.name]}`}>

          <div className="absolute -bottom-[50px] left-[15%] w-[170px]">
            <img src={pokemon?.sprites.other["official-artwork"].front_default} alt={pokemon?.name} />
          </div>
        </section>

        {/* Sección inferior */}
        <section className="bg-white capitalize text-[#4F4F4F]">

          <section className="grid-rows-3 text-center pt-[45px] font-['Roboto']">
            <h3 className={`font-bold text-2xl ${cardNames[pokemon?.types[0].type.name]} `}>{pokemon?.name}</h3>
            <h4 className="text-sm">{formatTypes(pokemon?.types)}</h4>
            <span className="relative text-xs -top-1">Type</span>
          </section>

          <hr />

          <section className="relative grid grid-cols-2 grid-rows-2 gap-y-6 top-7 right-2 text-center ">

            {/* Generar lista de stats */}

            {
              pokemon?.stats.slice(0, 4).map(stat => (
                <div key={stat.stat.url}>
                  <h6 className="text-[12px] font-thin uppercase">{stat.stat.name}</h6>
                  <span className={`font-semibold ${cardNames[pokemon?.types[0].type.name]}`}>{stat.base_stat}</span>
                </div>
              ))
            }

          </section>

        </section>


      </article>

    </Link>
  )
}

export default PokemonCard