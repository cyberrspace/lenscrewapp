import React from 'react'


const Hero = () => {
  return (
    <section className=" bg-[url('/hero-bg.png')] bg - cover bg - center flex flex-col items-center justify-center text-white top-[304px] left-208px]  h-[962px] max-h-screen ">
    
      <div className=''>
        <h2 className="text-center font-medium font-poppins leading-[116%] text-[32px] md:text-[20px] lg:text-[27.53px]">Unlock your creative potential at</h2>
        </div>
      <div><h1 className="text-center font-medium font-poppins leading-[116%] text-[32px] md:text-[50px] lg:text-[57.53px]">Lens Crew Academy</h1></div>
        <div>
        <h3 className='text-center font-light font-poppins text-[18px] md:text-[20px] lg:text-[21.86px] leading-[150%]'>Master the act of film making, acting and media production with 
        </h3>
        </div>
        <div><h3> industry today</h3></div>

        <div>
        <button className="bg-[#DF4F3A] text-white px-[51.33px] py-[11.41px] w-[219.66px] h-[56.81px] mt-[37px] rounded-md">Enroll Now</button>
        </div>
         
      

      </section>

    
     
    
  )
}

export default Hero;