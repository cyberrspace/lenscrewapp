import React from 'react';

const page = () => {
  const instructors = [
    { src: '/ajayi.png', alt: 'Instructor' },
    { src: '/smart.png', alt: 'Instructor' },
    { src: '/olaiya.png', alt: 'Instructor' },
    { src: '/ronald.png', alt: 'Instructor' },
    { src: '/devon.png', alt: 'Instructor' },
    { src: '/robert.png', alt: 'Instructor' },
    { src: '/muphy.png', alt: 'Instructor' },
    { src: '/bell.png', alt: 'Instructor' },
  ];

  return (
    <main className="w-full min-h-screen px-4 py-8">
      <section className="w-full max-w-[1320px] mx-auto mt-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className="w-full  border-gray-300 p-2 pb-5  overflow-hidden"
            >
              <img
                src={instructor.src}
                alt={instructor.alt}
                className="w-full h-auto aspect-[309/395] object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default page;
