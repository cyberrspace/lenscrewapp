import React from 'react';
import WhyChooseUs from './WhyChooseUs';
import KeyPillars from './keypillars';

const EventSection = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center"> {/* ← Center wrapper */}

      <section className="w-full max-w-[1440px] px-4 mx-auto p-20 pl-14 justify-center items-center"> {/* ← removed mt-[60px] */}

        <div className="flex flex-col md:flex-row mx-auto ml-4 ">

          {/* Our Approach Section */}
          <div className="flex-1 bg-[url('/Frame-bg.png')] bg-cover bg-center sm:p-10 text-white w-full max-w-[817px] min-h-[500px]">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center sm:text-left">
              Our Approach
            </h2>
            <p className="mt-2 text-sm sm:text-base font-normal sm:max-w-[500px] w-[517px] h-[72px] text-center sm:text-left">
              At LensCrew Academy, we believe in hands-on training.Our <br />
              Courses blend the theory with real-world projects, ensuring you 
              graduate with a portfolio-ready body of work.
            </p>

            <div className="mt-6">
              <h3 className="text-base font-bold underline mb-2">Key Pillars:</h3>
              <div className="text-sm leading-relaxed space-y-2 w-[517px] h-[72px]">
                <p>
                  <span className="font-bold">- Industry-Aligned Curriculum</span> – Designed by filmmakers, for<br />
                  <span className="pl-[10px] block">filmmakers.</span>
                </p>
                <p>
                  <span className="font-bold">- Mentorship from pros</span> – 1:1 feedback from working directors, <span className="pl-[10px] block">DOPs, and editors.</span>
                </p>
                <p>
                  <span className="font-bold">- Collaborative Environment</span> – Work with actors, writers, and <span className="pl-[10px] block">crew on live sets.</span>
                </p>
              </div>

            </div>
          </div>

          {/* Announcement Section */}
          <div className="flex-shrink-0 w-full max-w-[437.91px] md:max-w-[400px] bg-[#C44836] text-white flex flex-col p-10">
            <h1 className="text-xl font-bold mb-2 ">Announcement</h1>
            <h3 className="text-lg font-semibold mb-2">New Short Film Lab</h3>
            <p className="text-sm mb-2">
              Master natural and studio lighting techniques
            </p>
            <p className="font-bold text-sm">25, October 4PM</p>
          </div>
        </div>

        <WhyChooseUs />
        <KeyPillars />
      </section>
    </div>
  );
};

export default EventSection;
