import React from 'react';
import { Mail } from 'lucide-react';
import { Send } from 'lucide-react';
export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f9f9f9]">
      {/* First Section */}
      <div className="w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 mx-auto bg-white mb-12">
        <section className="w-full min-h-[600px] flex items-center justify-center">
          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-8 px-2 sm:px-8 py-10">
            {/* Text Content */}
            <div className="w-full max-w-md text-black space-y-4">
              <h1 className="text-2xl sm:text-3xl font-semibold font-poppins">Connect with us</h1>
              <p className="text-sm sm:text-base font-inter">
                Want to chat? We’d love to hear from you! Get in touch with our Customer Success Team to inquire about speaking events, advertising rates, or just say hello.
              </p>
              <button
                className="w-fit flex items-center justify-center gap-2 px-4 py-2 bg-[#FF6636] text-white text-sm font-medium hover:bg-[#e65a2f] transition-colors"
              >
                <Mail className="w-4 h-4" />
                Copy Email
              </button>
            </div>

            {/* Image */}
            <div className="w-full max-w-xl">
              <img
                src="/connectus.png"
                alt="connect us"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </section>
      </div>

      {/* Second Section */}
      <section className="w-full max-w-[1440px] px-4 sm:px-6 lg:px-[100px] py-10 gap-30  mx-auto bg-[#E9EAF0]">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center pb-10">
          <h1 className="text-[24px] sm:text-[30px] leading-tight font-semibold text-[#1D2026] tracking-tight">
            Contact us
          </h1>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row lg:space-x-20 justify-center items-start">
          {/* Contact Details */}
          <div className="p-6 w-[403.5px] h-[300.48px]   space-y-10">
            <h3 className="text-lg font-medium text-[#1D2026] w-[402.64px] h-[49px]">
              Will you be in Lagos any time soon? Stop by the office! We’d love to meet.
            </h3>

            <div className="space-y-4 text-sm text-[#1D2026] w-[403.4px] h-[37px] opacity-100">
              <p className='text-[12.04px] flex flex-row gap-6'>
                <span className=" text-[#FF6636] font-semibold w-[238.84px] h-[25px]">ADDRESS</span>
                <span className='text-normal w-[234.81px]'> 80, Sparklight Estate,<br /> Ojodu, Lagos</span>
              </p>
              <div className='w-[403.7px] border-[0.75px] my-8 bg-[#E9EAF0]'></div>
              <p className='text-[12.04px] flex flex-row gap-4'>
                <span className=" text-[#FF6636] font-semibold text-[12.04px] w-[238.84px] h-[25px] ">PHONE NUMBER</span>
                <span className='text-normal w-[234.81px]'> +234 123 456 7890</span>
              </p>
              <div className='w-[403.7px] border-[0.75px] bg-[#E9EAF0] '></div>
              <p className='text-[12.04px] flex flex-row gap-4'>
                <span className=" text-[#FF6636] font-semibold w-[238.84px] h-[25px] ">EMAIL ADDRESS</span>
                <span className='text-normal w-[234.81px]'>contact@lenscrew.com <br />career@lenscrew.africa</span> 
              </p>
              <div className='w-[403.7px] border-[0.75px] bg-[#E9EAF0]'></div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="w-full max-w-lg bg-white p-6 rounded-md shadow-md space-y-4">
            <div className='space-y-4'>
              <h2 className="text-xl font-semibold text-[#1D2026] max-w-[427.48px] h-[25px]">Get in touch</h2>
              <p className="text-sm text-gray-600 text-[12.05px] max-w-[427.48px] h-[29px]">
                Feel free to contact us, we love to make new partners & friends.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row ">
              <div className="w-full">
                <label className="block text-sm font-medium text-[10.56px] text-[#1D2026]  h-[17px]">First Name:</label>
                <input type="text" className=" mt-1 p-2  w-[207.72px] h-[33.42px] border-[0.75px] border-[#E9EAF0]  px-2 " />
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium text-[10.56px] text-[#1D2026]  h-[17px]">Last Name:</label>
                <input type="text" className="mt-1 p-2 w-[207.72px] h-[33.42px] border-[0.75px] border-[#E9EAF0]  px-2 " />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[10.56px] text-[#1D2026]  h-[17px]">Email:</label>
              <input type="email" className=" mt-1 p-2 w-[439.48px] h-[33.42px] border-[0.75px] border-[#E9EAF0]  px-3" />
            </div>

            <div>
              <label className="block text-sm font-medium text-[10.56px] text-[#1D2026]  h-[17px]">Subject:</label>
              <input type="text" className=" mt-1 p-2 w-[439.48px] h-[33.42px] border-[0.75px] border-[#E9EAF0]  px-3  " />
            </div>

            <div>
              <label className="block text-sm font-medium text-[10.56px] text-[#1D2026]  h-[17px]">Message:</label>
              <textarea className=" mt-1 p-2  h-32 resize-none w-[439.48px] border-[0.75px] border-[#E9EAF0]  px-3" />
            </div>

            <button
              className="w-fit flex items-center justify-center gap-2 px-4 py-2 bg-[#FF6636] text-white text-sm font-medium hover:bg-[#e65a2f] transition-colors"
            >
              
              Send message
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
