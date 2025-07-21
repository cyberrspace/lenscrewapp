import React from 'react'


const Pathway = () => {
  return (
    <div className='w-full flex flex-row max-w-[320px] h-[200px] sm:max-w-[640px] sm:h-[300px] md:max-w-[900px] md:h-[400px]
  lg:max-w-[1264px] lg:h-[520px]
  mx-auto
  bg-gray-100'>

     <div className="w-[583.33px] h-[519.96px] sm:h-[450px] md:h-[500px] ml-[171px]">
      <img

          src="/diversegraduate-bg.png"
          alt="Black Camera Background"
          style={{width: '100%', height: '100%', objectFit: 'cover'}}
/>

      </div >
      
      <div className='w-[425px] h-[520px] sm:h-[450px] md:h-[500px] bg-[#FBFBFBFB] p-8'>
       <div className=''>
          <h2 className='font-poppins font-bold text-[10px] sm:text-[14px] md:text-[18px] lg:text-[22px] leading-[121%] tracking-[0px] align-middle'>Career Pathways at</h2>
          <h1 className='font-poppins font-bold text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] leading-[121%] tracking-[0px] align-middle'>LensCrew Academy</h1>
       </div>
      <div>
          <h3 className='font-bold'>Technical Expertise</h3>
          <ul className='list-disc list-inside'>
            <li>Camera operation</li>
            <li>Editing software</li>
            <li>Lighting design</li>
          
          </ul>
      </div>

      <div>
          <h3 className='font-bold'>Professional Toolkit</h3>
          <ul className='list-disc list-inside'>

            <li>Pitch decks</li>
            <li>Freelance contract</li>
            <li>Film Budgeting</li>

          </ul>
      </div>

        <div>
          <h3 className='font-bold'>Career Growth</h3>
          <ul className='list-disc list-inside'>
            <li>LinkedIn optimization</li>
            <li>Agent networking </li>
           

          </ul>
        </div>
       
      </div>


    

    </div>
  )
}

export default Pathway;