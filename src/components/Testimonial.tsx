'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    image: '/cimenaphoto-bg.png',
    title: 'Cinematography Graduates',
    text: (
      <>
        Landed my first Bollywood film within 6 months! <br />
        The DOP mentorship program gave me real on-set confidence.
      </>
    ),
    name: 'Damian Otedola,',
    role: 'Assistant Camera',
  },
  {
    image: '/cimenablack-bg.png',
    title: 'Video Editing Graduate',
    text: (
      <>
        From editing class projects to cutting ads for Amazon – <br />
        the hands-on training made all the difference.
      </>
    ),
    name: 'Paul McKenzie,',
    role: 'Video Editor',
  },
  {
    image: '/cimenatech-bg.png',
    title: 'Sound Design Graduate',
    text: (
      <>
        Mixing and mastering became second nature. <br />
        The course got me freelance-ready!
      </>
    ),
    name: 'Aisha Bello,',
    role: 'Sound Editor',
  },
];

const Testimonial = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const slideInterval = setInterval(() => {
      // Slide by one card width
      const cardWidth = container.querySelector('div')?.clientWidth || 400;
      container.scrollLeft += cardWidth;

      // Reset to start if near the end
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        container.scrollLeft = 0;
      }
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(slideInterval);
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 400;
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 400;
    }
  };

  return (
    <div className="w-full max-w-[1264px] mx-auto mt-10 px-4 bg-white py-10 rounded-md shadow relative overflow-hidden">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Testimonials</h2>

        {/* Arrows */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
          <button
            onClick={scrollLeft}
            className="bg-white shadow rounded-full p-2 text-orange-500 hover:text-orange-600"
          >
            <ChevronLeft size={28} />
          </button>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
          <button
            onClick={scrollRight}
            className="bg-white shadow rounded-full p-2 text-orange-500 hover:text-orange-600"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="relative w-full">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-scroll scroll-smooth no-scrollbar whitespace-nowrap px-6 py-4"
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 max-w-[600px] flex items-center gap-4 p-4 text-left border bg-white"
              >
                {/* Image */}
                <div className="flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.title}
                    width={176}
                    height={213}
                    className="w-[176px] h-[213px] object-cover"
                  />
                </div>

                {/* Text */}
                <div className="space-y-2 w-[315px] gap-[6px]">
                  <h3 className="text-lg font-semibold text-[17.24px]">{testimonial.title}</h3>
                  <div className="text-[8.26px] text-gray-700 font-poppins leading-snug break-words">
                    {testimonial.text}
                  </div>
                  <p className="text-sm font-medium text-[12px] leading-tight">
                    <span className="text-black">{testimonial.name}</span>{testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
