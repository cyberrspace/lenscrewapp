'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Instructors', path: '/instructors' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="w-full bg-cover bg-center">
      <nav className="w-full max-w-[95%] sm:max-w-[90%] md:max-w-[1363px] mx-auto flex items-center justify-between px-4 sm:px-6 md:px-[41px] pt-6 sm:pt-10 md:pt-[57px] min-h-[41px] font-poppins">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/Vector-bg.png"
            alt="LensCrew logo"
            width={41}
            height={41.45}
            className="w-[28px] sm:w-[35px] md:w-[41px] h-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center justify-between flex-1 max-w-[644px] text-white text-[16px] font-poppins">
          {navItems.map((item, idx) => (
            <li
              key={idx}
              className="relative cursor-pointer text-[16px] md:text-[18px]"
              onClick={() => setActiveIndex(idx)}
            >
              <Link
                href={item.path}
                className={`inline-block pb-1 transition-all duration-200 ${activeIndex === idx ? 'font-bold' : 'font-normal'
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

        {/* Hamburger Icon */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Nav Menu */}
      {mobileOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="flex flex-col gap-4 text-white font-poppins text-[16px]">
            {navItems.map((item, idx) => (
              <li key={idx} onClick={() => setMobileOpen(false)}>
                <Link href={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
