import React from 'react';

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  showButton?: boolean;
}

const Hero: React.FC<HeroProps> = ({
  title = 'LensCrew Academy',
  subtitle = 'Unlock your creative potential at',
  description = `Master the art of filmmaking, acting, and media production with
  industry-leading professionals. Launch your career in the entertainment 
  industry today.`,
  showButton = true,
}) => {
  return (
    <section
      className="w-full h-auto min-h-[640px] sm:min-h-[720px] md:min-h-[800px] 
      lg:min-h-[880px] xl:min-h-[920px] 2xl:min-h-[962px] 
      flex flex-col items-center justify-center text-center text-white 
      px-4 py-8 mx-auto bg-cover bg-center "
      // style={{ backgroundImage: "url('/Frame-bg.png')" }}
    >
      {/* Subheading */}
      <div className="w-full max-w-[90%] sm:max-w-xl mb-4">
        <h2 className="font-poppins font-medium leading-snug text-lg sm:text-xl md:text-2xl lg:text-3xl">
          {subtitle}
        </h2>
      </div>

      {/* Main Heading */}
      <div className="w-full max-w-[90%] sm:max-w-4xl mb-6">
        <h1 className="font-poppins font-bold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          {title}
        </h1>
      </div>

      {/* Description */}
      <div className="w-full max-w-[90%] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[782px] mb-10">
        <p className="font-poppins font-light text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
          {description}
        </p>
      </div>

      {/* Button */}
      {showButton && (
        <div>
          <button className="bg-[#DF4F3A] text-white font-medium px-6 py-3 rounded-md text-sm sm:text-base md:text-lg hover:bg-[#c94330] transition duration-300">
            Enroll Now
          </button>
        </div>
      )}
    </section>
  );
};

export default Hero;
