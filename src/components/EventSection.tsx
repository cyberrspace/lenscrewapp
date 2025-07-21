import React from 'react'
import WhyChooseUs from './WhyChooseUs';
import KeyPillars from './keypillars';


const EventSection = () => {
  return (
    <section className="w-full max-w-[1255.95px] h-auto min-h-[600px] lg:min-h-[1502px] mx-auto  px-4 sm:px-6 lg:px-[95px] py-10">
        
        <div className='flex flex-col md:flex-row  px-4 sm:px-6 lg:px-8 '>

          <div className="w-full max-w-[820px] min-h-[500.67pxpx] bg-gray-500 p-10">
            <div>
              <h2 className="w-[245px] h-[51px] text-[34.23px] text-[#FFFFFF] font-semibold leading-[150%] font-[Poppins]">
                Our Approach
              </h2>
              <p className="w-full max-w-[515px] text-[#FFFFFF]  px-0 py-4 text-base sm:text-lg leading-relaxed">
                At LensCrew Academy, we believe in hands-on training. Our Courses blend the theory with real-world projects, ensuring you graduate with a portfolio-ready body of work.
              </p>
            </div>

            <div>
              <h3 className="w-[89px] h-[24px] text-[15.69px] font-bold leading-[150%] font-[Poppins] underline underline-offset-0 decoration-solid decoration-[0.5px] text-[#FFFFFF]">
                Key Pillars:
              </h3>
              <p className="max-w-[519px] text-[15.69px] font-normal leading-[150%] text-[#FFFFFF] font-[Poppins] ">
                - Industry-Aligned Curriculum – Designed by filmmakers, for filmmakers.<br />
                - Mentorship from pros – 1:1 feedback from working directors, DOPs, and editors.<br />
                - Collaborative Environment – Work with actors, writers, and crew on live sets
              </p>
            </div>
          </div>

          <div className="w-[437.9px] h-[500.67px] max-w-full bg-[#C44836] flex flex-col p-6">
            <div className='top-0'>
              <h1 className="text-2xl font-bold mb-2 text-[#FFFFFF]">Announcement</h1>
              <h3 className="text-lg font-semibold mb-1 text-[#FFFFFF]">New Short Film Lab</h3>
              <p className="mb-1 text-[#FFFFFF]">Master natural and studio lighting techniques</p>
              <p className="text-sm text-[#FFFFFF]">25, October 4PM</p>
            </div>

          </div>

        </div>

        <WhyChooseUs/>
        <KeyPillars/>
     
     

    </section>

  )
}

export default EventSection;