import React from 'react';

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-white left-208px w-full h-screen max-w-[1445px] max-h-[962px] opacity-100 mx-auto 
      sm:max-w-[640px] sm:max-h-[500px] 
      md:max-w-[768px] md:max-h-[600px] 
      lg:max-w-[1024px] lg:max-h-[800px] 
      xl:max-w-[1280px] xl:max-h-[960px] 
      2xl:max-w-[1445px] 2xl:max-h-[960px] 
      mt-[150px] pb-16">

      <div>
        <h2 className="font-poppins font-medium text-center text-[47.53px] leading-116 tracking-normal flex items-center">
          Unlock your creative potential at
        </h2>
      </div>

      <div>
        <h1 className="font-poppins font-medium text-center text-[96px] leading-116 tracking-normal flex items-center">
          LensCrew Academy
        </h1>
      </div>

      <div className="w-full max-w-[782px] h-auto min-h-[50px] opacity-100 mx-auto 
        sm:max-w-[340px] sm:min-h-[45px] 
        md:max-w-[500px] md:min-h-[60px] 
        lg:max-w-[782px] lg:min-h-[75px] 
        xl:max-w-[720px] xl:min-h-[90px] 
        2xl:max-w-[782px] 2xl:min-h-[99px]">

        <h3 className="text-center align-middle font-light font-poppins tracking-[0px] text-[16px] leading-[140%] 
          sm:text-[18px] sm:leading-[145%] 
          md:text-[19.5px] md:leading-[147%] 
          lg:text-[20.5px] lg:leading-[148%] 
          xl:text-[21.5px] xl:leading-[149%] 
          2xl:text-[21.86px] 2xl:leading-[150%]">
          Master the act of film making, acting and media production with<br />
          industry-leading professionals. Launch your career in the entertainment<br />
          industry today.
        </h3>
      </div>

      <div>
        <button className="bg-[#DF4F3A] text-white px-[51.33px] py-[11.41px] w-[219.66px] h-[56.81px] mt-[37px] mb-[29px]">
          Enroll Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
