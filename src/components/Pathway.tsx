import React from 'react'

const Pathway = () => {
  return (
    <div className="w-full flex flex-wrap lg:flex-nowrap max-w-[1094.56px] mx-auto bg-[#FFFFFF] h-auto">

      {/* Image Container */}
      <div className="w-full sm:w-full md:w-[100%] lg:w-[583.33px] h-[300px] sm:h-[400px] md:h-[450px] lg:h-[520px]">
        <img
          src="/diversegraduate-bg.png"
          alt="Black Camera Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Container */}
      <div className="w-full sm:w-full md:w-[100%] lg:w-[680px] h-auto bg-[#FBFBFBFB] p-4 sm:p-6 md:p-8 flex flex-col justify-center">
        <div className="mb-4">
          <h2 className="font-poppins font-bold text-[14px] sm:text-[18px] md:text-[22px] lg:text-[24px] leading-[121%]">Career Pathways at</h2>
          <h1 className="font-poppins font-bold text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] leading-[121%]">LensCrew Academy</h1>
        </div>

        <div className="mb-4">
          <h3 className="font-bold">Technical Expertise</h3>
          <ul className="list-disc list-inside">
            <li>Camera operation</li>
            <li>Editing software</li>
            <li>Lighting design</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="font-bold">Professional Toolkit</h3>
          <ul className="list-disc list-inside">
            <li>Pitch decks</li>
            <li>Freelance contract</li>
            <li>Film Budgeting</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold">Career Growth</h3>
          <ul className="list-disc list-inside">
            <li>LinkedIn optimization</li>
            <li>Agent networking</li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Pathway
