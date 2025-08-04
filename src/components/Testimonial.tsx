'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    image: '/cimenaphoto-bg.png',
    title: 'Cinematography Graduates',
    text: 'Landed my first Bollywood film within 6 months! The DOP mentorship program gave me real on-set confidence.',
    name: 'Damian Otedola,',
    role: 'Assistant Camera',
  },
  {
    image: '/cimenablack-bg.png',
    title: 'Video Editing Graduate',
    text: 'From editing class projects to cutting ads for Amazon – the hands-on training made all the difference.',
    name: 'Paul McKenzie,',
    role: 'Video Editor',
  },
  {
    image: '/cimenatech-bg.png',
    title: 'Sound Design Graduate',
    text: 'Mixing and mastering became second nature. The course got me freelance-ready!',
    name: 'Aisha Bello,',
    role: 'Sound Editor',
  },
  
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const { image, title, text, name, role } = testimonials[currentIndex];

  return (
    <div className="w-full max-w-[1264px] mx-auto mt-10 px-4 bg-white py-10 rounded-md shadow">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Testimonials</h2>

        {/* Two testimonial blocks side-by-side on medium+ screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[1200px]">
          {[testimonials[currentIndex], testimonials[(currentIndex + 1) % testimonials.length]].map((testimonial, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-center gap-4 text-left">
              {/* Image */}
              <div className="w-full max-w-[300px] sm:max-w-[250px]">
                <Image
                  src={testimonial.image}
                  alt={testimonial.title}
                  width={300}
                  height={200}
                  className="rounded-md w-full h-auto object-cover"
                />
              </div>

              {/* Text */}
              <div className="max-w-[440px] space-y-2">
                <h3 className="text-xl font-semibold">{testimonial.title}</h3>
                <p className="text-sm text-gray-700">{testimonial.text}</p>
                <p className="text-sm font-medium">
                  <span className="text-black">{testimonial.name}</span> {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows and Circles */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button onClick={goToPrevious} className="text-orange-500 hover:text-orange-600">
            <ChevronLeft size={32} />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full border-2 ${currentIndex === index ? 'bg-orange-500 border-orange-500' : 'border-orange-300'}`}
              />
            ))}
          </div>

          <button onClick={goToNext} className="text-orange-500 hover:text-orange-600">
            <ChevronRight size={32} />
          </button>
        </div>
      </div>

    </div>
  );
};

export default Testimonial;
