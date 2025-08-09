'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';

export default function EnrollPage() {
  const router = useRouter();

  return (
    <main className="relative w-full h-screen flex flex-col md:flex-row">
      {/* LEFT SIDE - FORM */}
      <section className="w-full md:w-1/2 h-full bg-[#111822] text-white overflow-y-auto no-scrollbar px-4 sm:px-6 pt-4 pb-10 z-10">
        <div className="w-full max-w-xl mx-auto pt-8">
          {/* Fixed Top Bar */}
          <div className="hidden md:block fixed top-0 left-0 w-1/2 h-[80px] bg-[#111822]/50  " />

          {/* Header */}
          <div className="mb-16 space-y-4">
            <button
              onClick={() => router.push('/courses')}
              className="flex items-center text-white hover:underline font-poppins font-normal text-[13.25px] sm:text-[13.25px] mb-12"
            >
              <ArrowLeft className="w-5 h-5 mr-2 " />
              Back
            </button>

            <Link href="/">
              <Image
                src="/Vector-bg.png"
                alt="LensCrew logo"
                width={60}
                height={60}
                className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70.76px]"
              />
            </Link>

            <div className="space-y-2">
              <h1 className="font-poppins font-medium text-[32px] sm:text-[40px] md:text-[44px] leading-[100%]">
                Enrolment Form
              </h1>
              <div className="w-[200px] sm:w-[361px] h-[2px] bg-[#DF4F3A]"/>
            </div>

            <p className="font-poppins text-sm sm:text-base">
              Begin Your Creative Journey in 3 Steps
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6 pb-32">
            {['Full Name', 'Date of Birth', 'Gender', 'Email', 'Phone Number'].map((label, i) => (
              <div key={i}>
                <label className="block mb-1 font-medium">{label}</label>
                <input
                  type="text"
                  required
                  placeholder={label}
                  className="w-full h-[60px] sm:h-[70px] md:h-[81px] px-4 bg-[#4D5259] text-white placeholder:text-white border border-gray-300 focus:outline-none"
                />
                {['Gender', 'Phone Number'].includes(label) && (
                  <div className="w-[200px] border border-white mt-1"/>
                )}
              </div>
            ))}

            {[
              {
                title: 'Cinematography',
                options: ['Cinematography', 'Acting for Screen', 'Video Editing']
              },
              {
                title: 'Batch',
                options: ['January Batch', 'April Batch', 'August Batch']
              },
              {
                title: 'Highest Qualification',
                options: ['High School', 'Diploma', 'Degree', 'Postgraduate']
              },
              {
                title: 'Years of Media Experience (if any)',
                options: ['None', 'Less than 1 year', '1-3 years', '3+ years']
              }
            ].map(({ title, options }, idx) => (
              <Accordion type="single" collapsible key={idx} className="w-full">
                <AccordionItem value={title}>
                  <AccordionTrigger className="h-[60px] sm:h-[70px] md:h-[81px] px-4 bg-[#4D5259] text-white border border-gray-300">
                    {title}
                  </AccordionTrigger>
                  <AccordionContent className="bg-[#4D5259] text-white border border-t-0 border-gray-300">
                    <ul className="space-y-2 px-4 py-2">
                      {options.map((opt, index) => (
                        <li key={index} className="cursor-pointer hover:text-[#DF4F3A]">{opt}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}

            <div className="mt-4">
              <Link href="/payment">
                <button className="w-full h-[50px] sm:h-[60px] bg-[#DF4F3A] text-white font-light px-6">
                  Registration
                </button>
              </Link>
            </div>
          </form>
        </div>
      </section>

      {/* VERTICAL DIVIDER */}
      <div
        className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-[calc(50%-3px)] -translate-y-1/2 z-20"
        style={{
          width: '2px',
          height: '556px',
          backgroundColor: 'white',
          borderRadius: '14px',
          opacity: 1,
        }}
      />

      {/* RIGHT SIDE - SCROLLABLE IMAGE */}
      <div className="w-full md:w-1/2 relative h-full group">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(to left, transparent, #111822 100%), url('/formimage-bg.png')`,
          }}
        />
        {/* Scroll Container */}
        <div className="absolute inset-0 overflow-y-auto no-scrollbar pointer-events-auto">
          <div className="h-[2500px]" />
        </div>
      </div>
    </main>
  );
}
