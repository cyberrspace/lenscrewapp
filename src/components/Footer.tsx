import React from 'react'

const Footer = () => {
  return (

   <footer className='md:max-w-[1445px] md:max-h-[617px] sm:max-w-[822px] sm:max-h-[308px] w-full bg-[#111822] p-24 space-y-8'>

      <div className="flex flex-col items-center justify-center  max-w-[661.83px]   min-h-[213.83px]   px-4  sm:max-w-full sm:space-y-4 md:max-w-[90%] lg:max-w-[661.83px] w-full mx-auto
  ">
    
          <h2 className='text-white mt-4'>Subscribe to our newsletter</h2>
        <div>
          <p className='text-white'>Get expert advice for your journey to LensCrew Academy delivered to your</p>
          <p className='text-white ml-12'>inbox each month. Its short, and worthwhile – we promise!</p>
        </div>
       
          
        <div className="relative w-full mt-4 max-w-[649px]">
          <input
            type="text"
            placeholder="Email address"
            className="w-full h-[64px] pl-4 pr-[200px]  text-black text-sm"
          />
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#999894] hover:bg-[#999984] text-white
        w-[190px] h-[43.67px]  px-[40px] py-[13.33px] text-[13.33px] leading-[16.67px] font-semibold font-[Poppins] 
      ">
            Subscribe Now
          </button>
        </div>

      
    </div>
      <div className="flex gap-6 flex-row items-center justify-center mx-auto mt-5">
        {/* Facebook */}
        <a href="https://facebook.com/yourProfile" target="_blank" rel="noopener noreferrer">
          <svg
            className="w-6 h-6 text-white hover:text-blue-500 transition"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M22 12a10 10 0 10-11.5 9.87v-6.99H8v-2.88h2.5V9.41c0-2.47 1.47-3.84 3.72-3.84 1.08 0 2.2.19 2.2.19v2.42h-1.24c-1.23 0-1.62.77-1.62 1.56v1.87H18l-.4 2.88h-2.34v6.99A10 10 0 0022 12z" />
          </svg>
        </a>

        {/* Instagram */}
        <a href="https://instagram.com/yourProfile" target="_blank" rel="noopener noreferrer">
          <svg
            className="w-6 h-6 text-white hover:text-pink-500 transition"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0120.5 7.75v8.5a4.25 4.25 0 01-4.25 4.25h-8.5A4.25 4.25 0 013.5 16.25v-8.5A4.25 4.25 0 017.75 3.5zm8.75 2a1 1 0 100 2 1 1 0 000-2zm-4.5 1.25a5.25 5.25 0 100 10.5 5.25 5.25 0 000-10.5zm0 1.5a3.75 3.75 0 110 7.5 3.75 3.75 0 010-7.5z" />
          </svg>
        </a>

        {/* Twitter (X) */}
        <a href="https://twitter.com/yourProfile" target="_blank" rel="noopener noreferrer">
          <svg
            className="w-6 h-6 text-white hover:text-blue-400 transition"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20.94 4.5c-.77.34-1.6.56-2.46.66a4.3 4.3 0 001.88-2.37c-.85.5-1.79.87-2.8 1.07a4.27 4.27 0 00-7.28 3.9A12.1 12.1 0 013 3.65a4.26 4.26 0 001.32 5.7A4.27 4.27 0 012.8 8v.05a4.28 4.28 0 003.42 4.19 4.27 4.27 0 01-1.93.07 4.27 4.27 0 003.99 2.97 8.57 8.57 0 01-5.3 1.83c-.34 0-.67-.02-1-.06a12.07 12.07 0 006.53 1.91c7.84 0 12.13-6.5 12.13-12.13 0-.18 0-.36-.01-.54A8.68 8.68 0 0022 5.44a8.45 8.45 0 01-2.06.56z" />
          </svg>
        </a>

        {/* LinkedIn */}
        <a href="https://linkedin.com/in/yourProfile" target="_blank" rel="noopener noreferrer">
          <svg
            className="w-6 h-6 text-white hover:text-blue-600 transition"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zm-9 19H7V9h3v10zm-1.5-11.25c-.97 0-1.75-.78-1.75-1.75S7.53 4.25 8.5 4.25s1.75.78 1.75 1.75S9.47 7.75 8.5 7.75zM20 19h-3v-4.5c0-1.11-.9-2-2-2s-2 .89-2 2V19h-3V9h3v1.16c.62-.82 1.61-1.41 2.7-1.41 1.99 0 3.6 1.61 3.6 3.6V19z" />
          </svg>
        </a>
      </div>

      <div className='flex flex-row items-center justify-center mt-6 space-x-8 text-white'>
        <a href="">Courses</a>
        <a href="">Instructors</a>
        <a href="">About Us</a>
        <a href="">Contact</a>
       
      </div>

      <p className="text-center text-[13.33px] leading-[16.67px] font-poppins font-medium text-white mt-6">
      Copyright © 2025 - LensCrew Academy
      </p>
      
      
   </footer>
  )
}

export default Footer;