'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';


const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses'},
    { name: 'Instructors', path: '/instructors'},
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className="w-full bg-cover bg-center"
      // style={{ backgroundImage: "url('/Frame-bg.png')" }}
    >
      <nav className="w-full max-w-[95%] sm:max-w-[90%] md:max-w-[1363px] mx-auto flex items-center justify-between px-4 sm:px-6 md:px-[41px] pt-6 sm:pt-10 md:pt-[57px] min-h-[41px] font-poppins">

        <Link href="/">
          <Image
            src="/Vector-bg.png"
            alt="LensCrew logo"
            width={41}
            height={41.45}
            className="w-[28px] sm:w-[35px] md:w-[41px] h-auto"
          />
        </Link>

        <ul className="flex items-center justify-end w-full max-w-full sm:max-w-[90%] md:max-w-[644px] gap-4 sm:gap-5 md:gap-[20px] font-poppins">
          {navItems.map((item, idx) => (
            <li
              key={idx}
              className="relative w-[70px] sm:w-[80px] md:w-[90px] h-[24px] sm:h-[25px] md:h-[27px] text-[14px] sm:text-[16px] md:text-[18px] cursor-pointer text-white font-poppins"
              onClick={() => setActiveIndex(idx)}
            >
              <Link
                href={item.path}
                className={`inline-block pb-1 font-[poppins] transition-all duration-200 ${activeIndex === idx ? 'font-bold' : 'font-normal'
                  }`}
              >
                {item.name}
              </Link>
              <span
                className={`absolute left-0 bottom-0 h-[1px] bg-[#DF4F3A] transition-all duration-300 ${activeIndex === idx ? 'w-full' : 'w-0'
                  }`}
              ></span>
            </li>
          ))}
        </ul>
      </nav>
     
    </header>
  );
};

export default Navbar;
