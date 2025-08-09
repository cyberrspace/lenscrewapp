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
      className={`w-full ${isHome ? 'min-h-screen' : 'min-h-[300px] md:min-h-[408px]'
        } flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 lg:px-8 bg-cover bg-center`}
    // style={{ backgroundImage: "url('/Frame-bg.png')" }}
    >
      {/* Subtitle */}
      {subtitle && (
        <div className="max-w-[90%] sm:max-w-xl mb-2">
          <h2 className="font-poppins font-medium leading-snug text-base sm:text-lg md:text-xl lg:text-2xl">
            {subtitle}
          </h2>
        </div>
      )}

      {/* Title */}
      <div className="max-w-[90%] sm:max-w-4xl mb-2 flex flex-col items-center">
        <h1 className="font-poppins font-bold leading-tight text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
          {title}
        </h1>

        {/* Underline for subpages only */}
        {!isHome && (
          <div className="mt-2 w-[150px] sm:w-[180px] md:w-[211.06px] border-b-[3px] border-[#DF4F3A]"></div>
        )}
      </div>

      {/* Description */}
      {description && (
        <div className="max-w-[90%] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[782px] mb-6">
          <p className="font-poppins font-light text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
            {description}
          </p>
        </div>
      )}

      {/* Button */}
      {showButton && (
        <div>
          <Link href="/enroll">
            <button className="bg-[#DF4F3A] text-white font-medium px-4 py-2 sm:px-6 sm:py-3 rounded-md text-sm sm:text-base md:text-lg hover:bg-[#c94330] transition duration-300">
              Enroll Now
            </button>
          </Link>
        </div>
      )}
      
    </section>
  );
};

export default Hero;
