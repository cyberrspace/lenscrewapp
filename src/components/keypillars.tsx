import React from 'react';

const KeyPillars = () => {
  return (
    <section className="flex flex-col lg:flex-row w-full max-w-[1440px] mx-auto">

      {/* Text Block (same width as WhyChooseUs info block) */}
      <div className="flex-1 bg-[#98281B] text-white p-6 sm:p-8">
        <h1 className="text-2xl font-semibold mb-4">Key Pillars</h1>
        <ul className="list-disc list-inside space-y-3 text-sm">
          <li>
            <span className="font-extrabold">Industry-Aligned Curriculum –</span> Designed by
            <span className="pl-[20px] block">filmmakers, for filmmakers.</span>
          </li>
          <li>
            <span className="font-extrabold">Mentorship from Pros –</span> 1:1 feedback from
            <span className="pl-[20px] block">working directors, DOPs, and editors.</span>
          </li>
          <li>
            <span className="font-extrabold">Real-World Projects –</span> Feature Films / Social
            <span className="pl-[20px] block">Media Content.</span>
          </li>
        </ul>
      </div>

      {/* Image Block (same width as specialization + image in WhyChooseUs) */}
      <div className="w-[700px] flex-shrink-0 h-[300px] sm:h-[400px] md:h-[500px]">
        <img
          src="/pillars-bg.png"
          alt="Pillars Image"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default KeyPillars;
