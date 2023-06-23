const FooterHome = () => {
  return (
    
    <section className="relative">

    {/* Sección roja */}
        <div className="bg-red-600 h-14 m:h-16 xxl:h-20"></div>

    {/* Sección negra */}
        <div className="bg-gray-950 h-10 m:h-12 xxl:h-14">  </div>

    {/* Boton Pokebola */}
        <div className="absolute w-[70px] aspect-square bg-white border-[8px] border-black rounded-full bottom-0 left-[50%] -translate-x-1/2
        
        after:content-[''] after:w-[35px] after:aspect-square after:bg-gray-900 after:border-[8px] after:border-gray-950 after:rounded-full after:absolute after:top-1/2 after:-translate-y-1/2 after:left-1/2 after:-translate-x-1/2
        
        m:w-[85px] m:border-[10px] m:after:w-[45px] m:after:border-[10px]
        xxl:w-[100px] xxl:border-[12px] xxl:after:w-[55px] xxl:after:border-[12px]"></div>
    </section>
  )
}

export default FooterHome