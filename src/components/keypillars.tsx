import React from 'react';

const KeyPillars = () => {
  return (
    <section className="w-full flex flex-col-reverse md:flex-row items-center justify-center  px-4 md:px-8 m-w-[1264px]">


      {/* Text Block */}
      <div className="bg-[#98281B] w-full max-w-[408px] h-auto min-h-[500px]  sm:p-8 flex flex-col justify-start">
        <h1 className="w-full text-[24px] sm:text-[28px] md:text-[32px] font-semibold leading-[150%] font-Poppins text-[#FFFFFF] mb-4">
          Key Pillars
        </h1>

        <ul className="w-full text-[14px] sm:text-[15.5px] leading-[150%] font-[Poppins] text-[#FFFFFF] list-disc list-inside space-y-3 break-words">
          <li>
            <span className="font-extrabold">
              Industry-Aligned Curriculum –
            </span>{' '}
            Designed by filmmakers, for filmmakers.
          </li>
          <li>
            <span className="font-extrabold">
              Mentorship from Pros –
            </span>{' '}
            1:1 feedback from working directors, DOPs, and editors.
          </li>
          <li>
            <span className="font-extrabold">
              Real-World Projects –
            </span>{' '}
            Feature Films / Social Media Content.
          </li>
        </ul>
      </div>

      {/* Image Block */}
      <div className="w-full max-w-[847px] h-[200px] sm:h-[360px] md:h-[420px] lg:h-[470px] xl:h-[500px] 2xl:h-[506.67px] mx-auto">
        <img
          src="/pillars-bg.png"
          alt="Black Camera Background"
          className="w-full h-full object-cover"
        />
      </div>

    </section>
  );
};

export default KeyPillars;
