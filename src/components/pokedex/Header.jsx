import { useDispatch } from "react-redux"
import { setNameTrainerGlobal } from "../../store/slices/nameTrainer.slice"

const Header = () => {

  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(setNameTrainerGlobal(""))
  }

  return (
    <section className="relative">

      {/* Sección roja */}
      <div className="relative bg-red-600 h-[60px] m:h-[75px] xxl:h-[95px]">
        <div className='absolute left-3 bottom-0 w-[220px] m:w-[300px] l:w-[400px]'>
          <img className='w-[600px]' src="/images/logo-home.png" alt="" />
        </div>
      </div>

      {/* Sección negra */}
      <div className="bg-gray-950 h-[40px] m:h-[50px] xxl:h-[60px]">  </div>

      {/* Boton Pokebola */}
      <div >
        <button onClick={handleLogout} className="absolute w-[60px] aspect-square bg-white border-[8px] border-gray-950 rounded-full -bottom-[8px] right-0 -translate-x-1/2 after:content-[''] after:w-[30px] after:aspect-square after:bg-gray-900 after:border-[8px] after:border-gray-950 after:rounded-full after:absolute after:top-1/2 after:-translate-y-1/2 after:left-1/2 after:-translate-x-1/2
        
        m:w-[85px] m:border-[11px] m:after:w-[45px] m:after:border-[11px] m:-bottom-[15px]
        xxl:w-[105px] xxl:border-[15px] xxl:after:w-[50px] xxl:after:border-[12px] xxlm:-bottom-[25px]"></button>
      </div>


    </section>
  )
}

export default Header