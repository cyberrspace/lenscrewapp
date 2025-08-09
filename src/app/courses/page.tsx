import React from 'react';
import Link from 'next/link';


const courses = [
  {
    title: 'Acting for screen',
    description:
      'Master on-camera techniques, emotional authenticity, and audition strategies for film/TV. Graduate with a professional showreel credit.',
    status: 'Application Open',
    image: '/acting-bg.png',
  },
  {
    title: 'Cinematography',
    description:
      'Learn lighting, composition, and camera movement. Gain hands-on experience with professional equipment.',
    status: 'Application closed',
    image: '/cinematography-bg.png',
  },
  {
    title: 'Video Editing',
    description:
      'Master Premiere Pro and DaVinci Resolve. Learn pacing, storytelling, and professional workflows.',
    status: 'Application Open',
    image: '/editing-bg.png',
  },

  {
    title: 'Content Creation',
    description:
      'Crack platform algorithms, shoot pro-quality content on phone, and build an audience. Launch with 15 portfolio pieces and monetization strategies.',
    status: 'Application Open',
    image: '/content-bg.png',
  },
  {
    title: 'Film Direction',
    description:
      'Develop your unique vision - from script breakdown to working with actors. Direct your own short film with crew support.',
    status: 'Application Open',
    image: '/direction-bg.png',
  },
  {
    title: 'Photography Mastery',
    description:
      'Master DSLR & mirrorless cameras, lighting setups, and photo editing. Specialize in portraits, products, or documentary storytelling.',
    status: 'Application Open',
    image: '/Photography-bg.png',
  },
];

const CoursesPage = () => {
  return (
    <main className="w-full max-w-[1247px] mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-12">
      {courses.map((course, index) => (
        <section
          key={index}
          className="flex flex-col md:flex-row justify-between items-center w-full h-full gap-6 md:gap-4 px-4 py-6 "
          style={{
            background: 'linear-gradient(90deg, #5E231A 0%, #C44836 100%)',
          }}
        >
          {/* Image */}
          <figure className="w-full md:w-[442.5px] h-[200px] md:h-[292px]">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-full object-cover "
            />
          </figure>

          {/* Text Content */}
          <div className="max-w-full md:max-w-[480px] px-2 md:px-4 text-white text-center md:text-left">
            <h2
              className="font-poppins font-semibold text-[34.23px] leading-[150%] mb-2"
              style={{ lineHeight: '150%' }}
            >
              {course.title}
            </h2>
            <p
              className="font-poppins font-normal text-[15.69px] leading-[150%] mb-2"
              style={{ lineHeight: '150%' }}
            >
              {course.description}
            </p>
            <p className="font-poppins font-medium text-[15.69px] leading-[150%] text-[#55BE24]">
              {course.status}
            </p>
          </div>

          {/* Vertical Divider (desktop only) */}
          <div className="hidden md:block w-px h-[223.04px] bg-gray-300 mx-4" />

          {/* Button */}
          <div className="mt-4 md:mt-0">
            <Link href="/enroll">
              <button className="bg-white text-[#DF4F3A] font-semibold px-6 py-2 hover:bg-gray-100 transition">
                Enroll Now
              </button>
            </Link>
          </div>
        </section>
      ))}
    </main>
  );
};

export default CoursesPage;
