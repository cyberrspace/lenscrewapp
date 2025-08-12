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
    <header className="w-full bg-cover bg-center font-poppins">
      <nav className="w-full max-w-[95%] sm:max-w-[90%] lg:max-w-[1363px] mx-auto flex items-center justify-between px-3 sm:px-6 lg:px-[41px] py-4 sm:py-6 lg:py-[57px]">

        {/* Logo */}
        {/* Logo */}
        <Link href="/" className="flex-shrink-0" onClick={() => setMobileOpen(false)}>
          <Image
            src="/Vector-bg.png"
            alt="LensCrew logo"
            width={41}
            height={41}
            className="w-[28px] sm:w-[35px] lg:w-[41px] h-auto"
          />
        </Link>


        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center justify-between flex-1 max-w-[644px] text-white">
          {navItems.map((item, idx) => (
            <li
              key={idx}
              className="relative cursor-pointer"
              onClick={() => setActiveIndex(idx)}
            >
              <Link
                href={item.path}
                className={`inline-block pb-1 transition-all duration-200 text-[14px] sm:text-[16px] lg:text-[18px] ${activeIndex === idx ? 'font-bold' : 'font-normal'}`}
              >
                {item.name}
              </Link>
              <span
                className={`absolute left-0 bottom-0 h-[2px] bg-[#DF4F3A] transition-all duration-300 ${activeIndex === idx ? 'w-full' : 'w-0'}`}
              ></span>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 transform z-50 transition-transform duration-300 ease-in-out ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex justify-between items-center px-6 py-4">
          {/* Mobile Logo */}
          <Link href="/" onClick={() => setMobileOpen(false)}>
            <Image
              src="/Vector-bg.png"
              alt="LensCrew logo"
              width={35}
              height={35}
              className="h-auto"
            />
          </Link>

          {/* Close Icon */}
          <button
            onClick={() => setMobileOpen(false)}
            className="text-white"
          >
            <X size={28} />
          </button>
        </div>

        <ul className="flex flex-col gap-6 mt-10 px-6 text-white text-lg">
          {navItems.map((item, idx) => (
            <li
              key={idx}
              onClick={() => {
                setActiveIndex(idx);
                setMobileOpen(false);
              }}
              className={`${activeIndex === idx ? 'font-bold text-[#DF4F3A]' : 'font-normal'}`}
            >
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
