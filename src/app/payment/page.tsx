'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function PaymentPage() {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState('');
  
  return (
    <main className="relative w-full min-h-screen flex flex-col md:flex-row">
      {/* LEFT SIDE - FORM */}
      <section className="w-full md:w-1/2 bg-[#111822] text-white px-4 sm:px-6 md:px-10 lg:pl-20 pt-4 md:pt-6 flex flex-col justify-start min-h-screen">
        <div className="w-full max-w-xl mx-auto h-full space-y-10 md:space-y-16">
          {/* Top Bar Overlay */}
          <div className="hidden md:block fixed top-0 left-0 w-1/2 h-[80px] bg-[#111822]/50 backdrop-blur-md z-20" />

          {/* Header */}
          <div className="space-y-3">
            <button
              onClick={() => router.push('/enroll')}
              className="flex items-center hover:underline text-base  mb-6 font-poppins font-normal text-[13.25px] leading-[100%] tracking-[0%] align-middle text-[#C4C4C4]"
            >
              <ArrowLeft className="w-5 h-5 mr-2"/>
              Back
            </button>

            <div className="space-y-4">
              <Link href="/">
                <Image
                  src="/Vector-bg.png"
                  alt="LensCrew logo"
                  width={70}
                  height={70}
                  className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px]"
                />
              </Link>

              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium font-poppins leading-tight">
                  Enrolment Form
                </h1>
                <div className="w-full max-w-xs h-[2px] bg-[#DF4F3A]"/>
              </div>

              <p className="text-sm sm:text-base font-poppins">
                Begin Your Creative Journey in 3 Steps
              </p>
            </div>
          </div>

          {/* Payment Plan */}
          <div className="space-y-5">
            <h3 className="text-lg sm:text-xl font-semibold">Payment Plan</h3>

            {/* Full Payment */}
            <div className="flex items-center gap-3">
              <input
                type="radio"
                id="full"
                name="payment"
                checked={selectedOption === 'full'}
                onChange={() => setSelectedOption('full')}
                className="w-5 h-5 accent-[#DF4F3A]"
              />
              <label
                htmlFor="full"
                className="cursor-pointer font-poppins font-normal text-[16px] leading-[100%]"
              >
                Full Payment (5% Discount) –
                <span className="ml-1 font-inter text-[16px]">₦ 275,000</span>
              </label>
            </div>

            {/* Instalment */}
            <div className="flex items-center gap-3">
              <input
                type="radio"
                id="instalment"
                name="payment"
                checked={selectedOption === 'instalment'}
                onChange={() => setSelectedOption('instalment')}
                className="w-5 h-5 accent-[#DF4F3A]"
              />
              <label
                htmlFor="instalment"
                className="cursor-pointer font-poppins font-normal text-[16px] leading-[100%] flex flex-wrap"
              >
                <span>2 Instalment –</span>
                <span className="ml-2 font-inter text-[16px]">₦ 150,000</span>
              </label>
            </div>

            {/* Conditional Alert Message */}
            {selectedOption === 'instalment' && (
              <div className="flex gap-3 mt-3 items-start">
                <AlertCircle className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                <ul className="list-disc pl-5 space-y-1 text-[13px] sm:text-[14px] text-[#C4C4C4] font-poppins italic leading-snug max-w-[335px]">
                  <li>
                    Second Payment: Remaining 50% (due at 6 weeks/ halfway point)
                  </li>
                  <li>
                    Total payable amount remains the same as one-time payment
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Payment Button */}
          <div className="pt-6 pb-10">
            <Link href="/payment">
              <button className="w-full h-[50px] sm:h-[60px] bg-[#DF4F3A] text-white font-light text-sm sm:text-base px-6">
                Make payment
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* RIGHT SIDE - BACKGROUND IMAGE */}
      <div className="w-full md:w-1/2 relative group overflow-hidden h-[300px] md:h-auto">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-300"
          style={{
            backgroundImage: `linear-gradient(to left, transparent, #111822 100%), url('/formimage-bg.png')`,
          }}
        />
        <div className="absolute inset-0 overflow-y-hidden group-hover:overflow-y-scroll no-scrollbar">
          <div className="h-[1500px]" />
        </div>
      </div>
    </main>
  );
}
