import React from 'react';
import WhyChooseUs from './WhyChooseUs';
import KeyPillars from './keypillars';

const EventSection = () => {
  return (
    <section
      className="relative w-full mt-[60px] ml-0 px-1 max-w-[1264px] min-h-[600px] 
    sm:max-w-[640px] sm:min-h-[800px] sm:ml-[30px]
    md:max-w-[768px] md:min-h-[1000px] md:ml-[50px] 
    lg:max-w-[1024px] lg:min-h-[1200px] lg:ml-[70px] 
    xl:max-w-[1150px] xl:min-h-[1400px] xl:ml-[85px]  
    2xl:max-w-[1255.95px] 2xl:min-h-[1502px] 2xl:ml-[95px]"
    >
      <div className="flex flex-col md:flex-row  px-4 sm:px-6 lg:px-8 m-w-[1264px]">

        {/* Our Approach Section */}
        <div className="w-full max-w-[817px] aspect-[817/544] bg-[url('/Frame-bg.png')] bg-cover bg-center p-6 sm:p-10 mx-auto">

          <div>
            <h2 className="text-[24px] leading-[36px] font-poppins font-semibold text-center text-white 
          sm:text-[28px] sm:leading-[42px]
          md:text-[30px] md:leading-[45px]
          lg:text-[32px] lg:leading-[48px]
          xl:text-[34.23px] xl:leading-[51.35px]">
              Our Approach
            </h2>

            <p className="mt-2 text-[15px] leading-[22px] text-white font-poppins text-center sm:text-left max-w-[90%] sm:max-w-[500px]">
              At LensCrew Academy, we believe in hands-on training. Our <br />
              Courses blend the theory with real-world projects, ensuring you <br />
              graduate with a portfolio-ready body of work.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-[15.69px] font-bold underline text-white font-poppins mb-2">
              Key Pillars:
            </h3>

            <div className="text-white font-poppins text-[14px] leading-[22px] ">
              <p>
                <span className="font-bold font-poppins">- Industry-Aligned Curriculum</span> – Designed by filmmakers,<br />
                for filmmakers.
              </p>
              <p>
                <span className="font-bold font-poppins">- Mentorship from pros</span> – 1:1 feedback from working directors,<br />
                DOPs, and editors.
              </p>
              <p>
                <span className="font-bold font-poppins">- Collaborative Environment</span> – Work with actors, writers,<br />
                and crew on live sets.
              </p>
            </div>

          </div>
        </div>

        {/* Announcement Section */}
        <div className="w-full max-w-[437px] aspect-[437/544] bg-[#C44836] flex flex-col p-6 mx-auto">

          <h1 className="text-2xl font-bold mb-2 font-poppins text-white">Announcement</h1>
          <h3 className="text-lg font-semibold mb-1 text-white">New Short Film Lab</h3>
          <p className="font-normal text-[15.69px] leading-[150%] text-white font-poppins whitespace-nowrap">
            Master natural and studio lighting techniques
          </p>
          <p className=" font-bold text-[15.69px] tracking-[0px] font-poppins text-sm text-white">25, October 4PM</p>
        </div>

      </div>

      <WhyChooseUs />
      <KeyPillars />
    </section>

  );
};

export default EventSection;
