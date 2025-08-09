import React from 'react';


const WhyChooseUs = () => {
  return (
    <div className="flex flex-col lg:flex-row flex-wrap w-full  px-4 mx-auto">

      {/* Info Block */}
      <div className="flex-1 h-[500px] max-w-[408.5px] bg-[url('/whychooseus-bg.png')] bg-cover bg-center text-white p-6 sm:p-8">
        <h1 className="text-[30px] font-semibold mb-2">Why Choose LensCrew Academy</h1>
        <h3 className="text-sm font-semibold mb-4">Your Creative Launchpad</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Placement support</li>
          <li>Experience industry film making</li>
          <li>Industry Network</li>
        </ul>
      </div>

      {/* Specialization */}
      <div className="flex-1 max-w-[408.5px] h-[500px] bg-[#98281B] text-white p-6 sm:p-8">
        <h1 className="text-2xl font-semibold mb-3">Specialization</h1>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><span className="font-extrabold">Acting:</span> Method Acting / Commercial <span className="pl-[20px] block">Acting</span> </li>
          <li><span className="font-extrabold">Cinematography:</span> Narrative Films / <span className="pl-[20px] block">Advertising</span> </li>
          <li><span className="font-extrabold">Editing:</span> Feature Films / Social Media <span className="pl-[20px] block"> Content</span></li>
        </ul>
      </div>

      {/* Image */}
      <div className="w-full lg:w-[400.91px] h-[500px] max-w-[400.91px]">
        <img
          src="/blackcamera-bg.png"
          alt="Black Camera"
          className="w-full h-full max-h-[500px] object-cover"
        />
      </div>
    </div>



  )
}

export default WhyChooseUs;