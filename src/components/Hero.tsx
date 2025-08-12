'use client';
import React from 'react';
import Link from 'next/link';

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  showButton?: boolean;
  variant?: 'home' | 'subpage';
}

const Hero: React.FC<HeroProps> = ({
  title = 'LensCrew Academy',
  subtitle = 'Unlock your creative potential at',
  description = `Master the art of filmmaking, acting, and media production with
  industry-leading professionals. Launch your career in the entertainment 
  industry today.`,
  showButton = true,
  variant = 'home',
}) => {
  const isHome = variant === 'home';

  return (
    <section
      className={`w-full 
        ${isHome
          ? 'min-h-screen' // 🟢 Home page keeps full height
          : 'min-h-[50vh] md:min-h-[50vh]'} // 🟢 Subpages now 75% height
        flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 lg:px-8 bg-cover bg-center
        relative -mt-14`}
    >
      {/* Subtitle (Only for Home Page) */}
      {isHome && subtitle && (
        <div className="max-w-full mb-4">
          <h2 className="font-poppins font-medium leading-snug text-[37px]">
            {subtitle}
          </h2>
        </div>
      )}

      {/* Title */}
      {title && (
        <div className="max-w-full mb-6 relative">
          <h1 className={`font-poppins font-bold leading-tight 
            ${isHome ? 'text-[71px]' : 'text-[50px]'} // 🟢 Smaller title for subpages
            max-w-full`}>
            {title}
          </h1>

          {/* 🟢 Underline for Subpages */}
          {!isHome && (
            <div className="w-[200px] h-[4px] bg-[#DF4F3A] mx-auto mt-8"></div>
          )}
        </div>
      )}

      {/* Description */}
      {description && (
        <div className="max-w-[90%] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[782px] mb-8">
          <p className="font-poppins font-light text-[21.86px] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
            {description}
          </p>
        </div>
      )}

      {/* Button */}
      {isHome && showButton && (
        <div className="mt-0">
          <Link href="/enroll">
            <button className="bg-[#DF4F3A] text-white font-medium px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base md:text-lg hover:bg-[#c94330] transition duration-300 max-w-[299px]">
              Enroll Now
            </button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default Hero;
