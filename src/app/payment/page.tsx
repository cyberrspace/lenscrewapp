'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


export default function EnrollPage() {
  const router = useRouter();

  return (
    <main className="relative w-full min-h-screen flex flex-col md:flex-row ">
      {/* LEFT SIDE - FORM */}
      <section className="w-full md:w-1/2 bg-[#111822] text-white px-4 sm:px-6  overflow-hidden p-10">
        <div className="w-full max-w-xl mx-auto h-full space-y-20 pl-14">
          {/* Top Bar */}
          <div className="hidden md:block fixed top-0 left-0 w-1/2 h-[80px] bg-[#111822]/50 backdrop-blur-md z-20" />

          <div className="space-y-4 ">
            <button
              onClick={() => router.push('/enroll')}
              className="flex items-center text-white hover:underline font-poppins font-normal text-[18px] sm:text-[20px] mb-12"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
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

            <div className="space-y-1">
              <h1 className="font-poppins font-medium text-[32px] sm:text-[40px] md:text-[44px] leading-[100%]">
                Enrolment Form
              </h1>
              <div className="w-[200px] sm:w-[361px] h-[2px] bg-[#DF4F3A]" />
            </div>

            <p className="font-poppins text-sm sm:text-base">
              Begin Your Creative Journey in 3 Steps
            </p>
          </div>
           
           {/* paymentsection */}

           <div className=' space-y-4'>
            <h3>Payment Plan</h3>
            <div className='flex flex-row items-center space-x-2'>
              <input type="radio" />
              <p>Full Payment (5% Discount) - ₦ 275,000</p>
            </div>

            <div className='flex flex-row items-center space-x-2'>
              <input type="radio" />
              <p>2 Instalment                             - ₦ 150,000</p>
            </div>
            
           </div>
          

          <div className="mt-4">
            <Link href="/payment">
              <button className="w-full h-[50px] sm:h-[60px] bg-[#DF4F3A] text-white font-light px-6">
                Make payment
              </button>
            </Link>
          </div>
        </div>
      </section>

     
      {/* RIGHT SIDE - SCROLLABLE ON HOVER IMAGE */}
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
