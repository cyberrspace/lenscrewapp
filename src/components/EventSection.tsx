import React from 'react';
import WhyChooseUs from './WhyChooseUs';
import KeyPillars from './keypillars';

const EventSection = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <section className="w-full max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-14 py-10 mx-auto">

        <div className="flex flex-col md:flex-row ">

          {/* Our Approach Section */}
          <div className="flex-1 bg-[url('/Frame-bg.png')] bg-cover bg-center p-6 sm:p-10 text-white">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center md:text-left">
              Our Approach
            </h2>
            <p className="mt-2 text-sm sm:text-base font-normal max-w-full sm:max-w-[500px] text-center md:text-left">
              At LensCrew Academy, we believe in hands-on training. Our Courses blend the theory with real-world projects, ensuring you graduate with a portfolio-ready body of work.
            </p>

            <div className="mt-6">
              <h3 className="text-base font-bold underline mb-2">Key Pillars:</h3>
              <div className="text-sm leading-relaxed space-y-2 max-w-full sm:max-w-[500px]">
                <p>
                  <span className="font-bold">- Industry-Aligned Curriculum</span> – Designed by filmmakers, for filmmakers.
                </p>
                <p>
                  <span className="font-bold">- Mentorship from pros</span> – 1:1 feedback from working directors, DOPs, and editors.
                </p>
                <p>
                  <span className="font-bold">- Collaborative Environment</span> – Work with actors, writers, and crew on live sets.
                </p>
              </div>
            </div>
          </div>

          {/* Announcement Section */}
          <div className="w-full md:w-[350px] bg-[#C44836] text-white flex flex-col p-6 sm:p-8 ">
            <h1 className="text-lg sm:text-xl font-bold mb-2">Announcement</h1>
            <h3 className="text-base sm:text-lg font-semibold mb-2">New Short Film Lab</h3>
            <p className="text-sm mb-2">
              Master natural and studio lighting techniques
            </p>
            <p className="font-bold text-sm">25, October 4PM</p>
          </div>
        </div>

        <div className="">
          <WhyChooseUs />
        </div>
        <div className="">
          <KeyPillars />
        </div>
      </section>
    </div>
  );
};

export default EventSection;
