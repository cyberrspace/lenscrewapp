
import React from 'react';


const WhyChooseUs = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-start px-4 sm:px-6 md:px-8 m-w-[1264px]">


      <div className=" w-full max-w-[409px] min-h-[504px] sm:min-h-[520px] md:min-h-[540px] bg-[url('/whychooseus-bg.png')] bg-cover bg-center bg-no-repeat text-white p-6 sm:p-8 mx-auto">
      
        <h1 className="max-w-[346px] text-[34.23px] font-semibold leading-[150%] font-[Poppins] text-[#FFFFFF]" >Why Choose <br/>
          LensCrew Academy</h1>
        <h3 className="max-w-[203px] text-[15.69px] font-semibold leading-[150%] font-[Poppins] text-[#FFFFFF]">Your Creative Launchpad</h3>
        <ul className='list-disc list-inside max-w-[285px] text-[15.69px] leading-[150%] font-normal font-[Poppins] text-[#FFFFFF] sm:text-[16px] md:text-[17px] ml-2'>
          <li className='font-Poppins'>Placement support</li>
          <li>Experience industry film making</li>
          <li>Industry Network</li>
        </ul>
      </div>
      
      <div className="relative w-full max-w-[408.66px] h-[500px] sm:h-[520px] md:h-[540px] bg-[#98281B] p-6 sm:p-8 mx-auto">
        <h1 className="max-w-[245px] text-[34.23px] font-semibold leading-[150%] font-[Poppins] text-[#FFFFFF] mb-2 sm:mb-3">Specialization</h1>
        <ul className="max-w-[338px] leading-[150%] font-[Poppins] text-[#FFFFFF] list-disc list-inside">
          <li><span className='font-extrabold text-[15.69px]'>Acting:</span>  Method Acting / Commercial Acting </li>
          <li><span className='font-extrabold text-[15.69px]'>Cinematography:</span> Narrative Films / Advertising</li>
          <li><span className='font-extrabold text-[15.69px]'>Editing:</span>Feature Films / Social Media Content</li>
        </ul>

      </div>

      <div className="relative w-full max-w-[749px] h-[404px] sm:h-[450px] md:h-[499px] mx-auto">
        <img
          src="/blackcamera-bg.png"
          alt="Black Camera Background"
          className="w-[749px] h-[540px] object-cover"
        />
      </div>

    




      </div>

     
   

    
  )
}

export default WhyChooseUs;