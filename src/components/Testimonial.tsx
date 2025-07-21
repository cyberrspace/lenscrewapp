import React from 'react';
import Image from 'next/image';

const Testimonial = () => {

  return (
    <div className='w-full max-w-[320px] h-[180px] sm:max-w-[640px] sm:h-[240px] md:max-w-[900px] md:h-[300px] lg:max-w-[1264px] lg:h-[386px] ml-12 mt-10 
  
  bg-white'>

      <div className='flex flex-col items-center justify-center text-center '>
        <h2 className='w-[143px] h-[31px] text-[25.85px] font-bold p-8'>Testimonials</h2>
      </div>
      
      <div className='flex flex-row items-center justify-center mt-8 space-x-96 '>

        <div className=" w-[full] h-[250px] ml-[20px] sm:w-[150px] sm:h-[180px] sm:ml-[40px] md:w-[176px] md:h-[213px]  flex flex-row space-x-8   ">

           <Image
              src="/cimenaphoto-bg.png"
              alt="Cinemaphoto Background"
              width={800}
              height={400}
              style={{ objectFit: 'cover', width: '100%' }}
            />
            
         
        <div className=" max-w-[700px] sm:max-w-[600px] flex flex-col space-y-2 w-[1750px] mt-3">
            <h1 className="text-lg font-bold leading-tight w-full text-[17.26px] ">Cinematography Graduates</h1>
            <p className="text-sm leading-snug w-[315px] text-[8.62px]">
              Landed my first Bollywood film within 6 months! The DOP mentorship program gave me real on-set confidence.
            </p>
            <p className="text-sm font-medium text-[8.62px]">
              <span className="text-black">Damian Otedola,</span> Assistant Camera
            </p>
          </div>
        </div>

        <div className=" w-[120px] h-[150px] ml-[20px] sm:w-[150px] sm:h-[180px] sm:ml-[40px] md:w-[176px] md:h-[213px] md:ml-[80px] lg:ml-[171px] flex flex-row  space-x-8  bg-[rgba(243,126,126,0.98)] ">

          <Image
            src="/cimenablack-bg.png"
            alt="Cinemaphoto Background"
            width={800}
            height={400}
            style={{ objectFit: 'cover', width: '100%' }}
          />
          <div className=" max-w-[700px] sm:max-w-[600px] flex flex-col space-y-2 w-[1750px] mt-3 ">
            <h1 className="text-lg font-bold leading-tight w-full text-[17.26px]">Video Editing Graduate</h1>
            <p className="text-sm leading-snug w-[315px] text-[8.62px]">
              From editing class projects to cutting ads for Amazon – the hands-on training made all the difference.
            </p>
            
            <p className="text-sm font-medium w-full text-[8.62px]">
              <span className="text-black">Paul McKenzie,</span>  Assistant Camera
            </p>
          </div>

        </div>

        <div className=" w-[120px] h-[150px] ml-[20px] sm:w-[150px] sm:h-[180px] sm:ml-[40px] md:w-[176px] md:h-[213px] md:ml-[80px] lg:ml-[171px] flex flex-row">
          <Image
            src="/cimenatech-bg.png"
            alt="Cinemaphoto Background"
            width={800}
            height={400}
            style={{ objectFit: 'cover', width: '100%' }}
          />
         </div>

      </div>


      <div>
        
      </div>
      

      
    </div>
  );
};

export default Testimonial;
