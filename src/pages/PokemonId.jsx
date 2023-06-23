import { useParams } from "react-router-dom"
import Header from "../components/pokedex/Header"
import { useEffect, useState } from "react"
import axios from "axios"
import { useDispatch } from "react-redux"

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

const buttonBack = {
  normal: "bg-[#8D8D94]",
  fighting: "bg-[#CB735D]",
  poison: "bg-[#A564E3]",
  ground: "bg-[#895C1A]",
  rock: "bg-[#8D8D94]",
  bug: "bg-[#4AB648]",
  ghost: "bg-[#454AA8]",
  steel: "bg-[#728881]",
  fire: "bg-[#E35825]",
  water: "bg-[#1479FB]",
  grass: "bg-[#7EC6C5]",
  electric: "bg-[#FFBF00]",
  psychic: "bg-[#454AA8]",
  ice: "bg-[#64CBF5]",
  dragon: "bg-[#56A4AE]",
  dark: "bg-[#0D1211]",
  fairy: "bg-[#C23867]",
  unknown: "bg-[#7E7E7E]",
  shadow: "bg-[#0D1211]",
}

const PokemonId = () => {

  const dispatch = useDispatch()
  const [pokemon, setPokemon] = useState(null)
  const { pokemonName } = useParams()

  const percentProgressStat = (baseStat) => {
    const STAT_MAX = 255

    return (baseStat * 800) / STAT_MAX
  }


  const goToPokedex = () => {
    dispatch("/pokedex")
  }

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`;

    axios
      .get(url)
      .then(({ data }) => setPokemon(data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <main className="l:max-h-screen" >

      <Header />

      <section className="h-[660px] max-w-[95%] bg-white border-slate-300 rounded-xl shadow-md shadow-gray-200 relative left-[2.5%] top-20 capitalize m:max-w-[85%] m:left-[7%] m:top-24 l:max-w-[80%] l:left-[10%] l:h-[720px]">

        <section className={`relative h-[90px] w-[100%] rounded-t-xl m:h-[95px] l:h-[110px] ${cardLinearGradients[pokemon?.types[0].type.name]}`}>

          <div className="absolute -bottom-[10px] left-[30%] w-[170px] m:w-[200px] m:left-[35%] l:w-[220px] l:-bottom-[10px] l:left-[38%]">
            <img src={pokemon?.sprites.other["official-artwork"].front_default} alt={pokemon?.name} />
          </div>
        </section>

        <section className="relative top-6 px-3 font-['Roboto'] capitalize m:px-10">
          <h3 className={`flex justify-center font-bold text-3xl ${cardNames[pokemon?.types[0].type.name]} `}>{pokemon?.name}</h3>
          <h4 className="text-xl font-bold pt-8 pb-4 l:text-2xl l:pb-2">Stats</h4>
          {
            pokemon?.stats.map((stat) => (

              <article>

                {/* Stats */}
                <section className="text-sm p-2 py-2 l:py-3">

                  <section className="flex justify-between">
                    <h5>{stat.stat.name}</h5>
                    <span>{stat.base_stat}</span>
                  </section>

                  {/* Barra de progreso */}
                  <div className="bg-slate-50 h-5 rounded-full overflow-hidden">
                    <div style={{ width: percentProgressStat(stat.base_stat) }} className="h-full bg-gradient-to-r from-[#FFCE2E] to-[#E6962F] rounded-full"></div>
                  </div>

                </section>

              </article>
            ))
          }

          <div className="flex justify-center relative top-8">
            <button onClick={goToPokedex} className={`h-[35px] w-[75px] rounded-xl text-lg text-white m:h-[40px] m:w-[80px] l:h-[40px] l:w-[120px] ${buttonBack[pokemon?.types[0].type.name]} `}>Back</button>
          </div>

        </section>


      </section>

    </main>
  )
}

export default PokemonId