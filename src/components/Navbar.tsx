import React from 'react';
import Image from 'next/image';
import Hero from './Hero';


const Navbar = () => {
  return (
    <header className="w-full bg-cover bg-center bg-[url('/Frame-bg.png')]">
      <nav className="w-full max-w-[1363px] h-[41.445px] flex justify-between items-center mx-auto px-[41px] pt-[57px]">
        <a href="#">
          <Image
            src="/Vector-bg.png"
            alt="LensCrew logo"
            width={24}
            height={24}
          />
        </a>

        <ul className="hidden md:flex w-[644px] h-[35px] gap-[50px] text-sm lg:text-base font-medium text-white items-center justify-end">
          {['Home', 'Courses', 'Instructors', 'About Us', 'Contact'].map((item, idx) => (
            <li key={idx} className="relative group w-[81px] h-[27px] rotate-0 opacity-100 ">
              <a
                href="#"
                className="inline-block pb-1  transition-colors duration-200 font-[poppins] font-bold text-[18px] "
              >
                {item}
              </a>
              <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-[1px] bg-[#DF4F3A] transition-all duration-300"></span>
            </li>
          ))}
        </ul>
        
      </nav>
      <Hero />
    </header>
  );
};

export default Navbar;
