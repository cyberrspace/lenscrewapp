import React from 'react'


const KeyPillars = () => {
  return (
    <div className=" flex flex-row ">

      <div className='bg-[#98281B] w-full max-w-[408px] h-[400px] sm:h-[450px] md:h-[500px]  ml-[32px]'>

        <h1 className="max-w-[245px] text-[34.23px] font-semibold leading-[150%] font-[Poppins] text-[#000000] mb-2 sm:mb-3">Key Pillars</h1>
        <ul className="max-w-[338px] leading-[150%] font-[Poppins] text-[#000000] list-disc list-inside">
          <li><span className='font-extrabold text-[15.69px]'>Industry-Aligned Curriculum -</span>  Designed by filmmakers, for filmmakers </li>
          <li><span className='font-extrabold text-[15.69px]'>Mentorship from Pros –</span>1:1 feedback from working directors, DOPs, and editors.
          </li>
          <li><span className='font-extrabold text-[15.69px]'></span> Feature Films / Social Media Content</li>
        </ul>

      </div>
      
      <div className="relative w-[592px] h-[400px] sm:h-[450px] md:h-[500px]">

        <img

          src="/pillars-bg.png"
          alt="Black Camera Background"
          style={{ width: '100%', height: '100%', objectFit: 'cover'}}

        />

      </div>


      


      {/* <div className="relative w-[592px] h-[400px] sm:h-[450px] md:h-[500px]">
        <Image
          src="/pillars-bg.png"
          alt="pillars Background"
          fill
          className="object-cover"
          sizes="(max-width: 750px) 100vw, 50vw"
        />
      </div> */}

      
      
      

    </div>
  )
}

export default KeyPillars;