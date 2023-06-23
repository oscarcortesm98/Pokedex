import { useDispatch } from "react-redux"
import FooterHome from "../components/home/FooterHome"
import { setNameTrainerGlobal } from "../store/slices/nameTrainer.slice"
import { useNavigate } from "react-router-dom"

const Home = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        const nameTrainer = e.target.nameTrainer.value

        dispatch(setNameTrainerGlobal(nameTrainer))
        navigate("/pokedex")
    }

    return (
        <main className="grid grid-rows-[1fr_auto] min-h-screen">

            {/* Sección superior */}
            <section className="relative top-20 px-4 m:top-32 m:px-8 xxl:top-48">
                <div className="flex justify-center ">
                    <img src="/images/logo-home.png" className='w-[400px] relative l:w-[600px]' alt="" />
                </div>

                <h3 className="flex justify-center text-xl font-bold pt-12 text-red-600 m:pt-12 m:text-2xl xxl:text-3xl">Hey, Pokemon trainer!</h3>
                <p className="flex justify-center text-md pt-3 m:text-lg xxl:text-xl">To start, enter your name</p>

                <form onSubmit={handleSubmit} className="grid grid-rows-[1fr_auto] gap-6 pt-8 px-8 m:grid-cols-[1fr_45%] m:gap-5 m:pt-12 l:gap-0">

                    <div className="flex justify-center m:justify-end l:w-[100%] l:pl-10">
                        <input className=" rounded-xl h-9 w-56 bg-white shadow-sm shadow-gray-300 px-3 text-md text-slate-400 m:h-11 m:w-[300px] m:text-md m:rounded-xl l:h-[50px] l:w-[320px] xxl:w-[430px] xxl:px-4 xxl:text-lg" required id="nameTrainer" placeholder="Enter your name" type="text" />
                    </div>

                    <div className="flex justify-center items-center l:-translate-x-[140px]">
                        <button className="bg-red-600 text-white rounded-xl h-8 w-24 shadow-md shadow-gray-300 text-sm font-bold hover:bg-red-500 hover:scale-105 m:rounded-xl m:h-10 m:w-32 m:text-md l:h-12 l:w-34 xxl:w-36 xxl:rounded-2xl xxl:text-lg">S T A R T</button>
                    </div>
                </form>

            </section>

            {/* Sección inferior */}
            <section>
                <FooterHome />
            </section>

        </main>
    )
}

export default Home