import React from 'react';

const Filmaker = () => {
  const programs = [
    "Acting Intensive (Screen tests, monologues, improv)",
    "Cinematography (Lighting, shot composition, gear mastery)",
    "Video Editing (Premiere Pro, DaVinci Resolve workflows)",
    "Content Creation (Viral scripting, platform algorithms)",
  ];

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="w-full max-w-[1000.15px]">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Films and Media Programs
        </h1>

        <div className="space-y-4">
          {programs.map((title, index) => (
            <div
              key={index}
              className="flex items-center bg-[#F0F0F0] px-4 sm:px-6 min-h-[57.47px] w-full"
            >
              {/* Triangle Icon */}
              <div className="w-0 h-0 border-t-[10px] border-b-[10px] border-l-[20px] border-t-transparent border-b-transparent border-l-[#DF4F3A] mr-4" />

              {/* Content Area */}
              <div className="flex items-center w-full">
                <h2 className="text-base sm:text-lg font-medium text-gray-800 flex-1">
                  {title}
                </h2>

                {/* Button */}
                <button className="w-[165px] h-[57px] px-6 py-4 bg-[#DF4F3A] text-white hover:bg-[#c7432f] text-sm sm:text-base flex items-center justify-center">
                  <span>Enroll Now</span>
                  <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center ml-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-[#DF4F3A]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 14a.75.75 0 01-.53-.22l-5-5a.75.75 0 111.06-1.06L10 12.19l4.47-4.47a.75.75 0 111.06 1.06l-5 5a.75.75 0 01-.53.22z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filmaker;