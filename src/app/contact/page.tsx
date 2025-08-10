import React from 'react';
import { Mail, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f9f9f9]">
      {/* First Section */}
      <div className="w-full bg-white mb-12">
        <section className="w-full min-h-[600px] flex items-center justify-center">
          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-8 px-4 sm:px-8 py-10">
            {/* Text Content */}
            <div className="w-full md:max-w-md text-black space-y-4">
              <h1 className="text-2xl sm:text-3xl font-semibold font-poppins">Connect with us</h1>
              <p className="text-sm sm:text-base font-inter">
                Want to chat? We’d love to hear from you! Get in touch with our Customer Success Team to inquire about speaking events, advertising rates, or just say hello.
              </p>
              <button className="w-fit flex items-center justify-center gap-2 px-4 py-2 bg-[#FF6636] text-white text-sm font-medium hover:bg-[#e65a2f] transition-colors">
                <Mail className="w-4 h-4" />
                Copy Email
              </button>
            </div>

            {/* Image */}
            <div className="w-full md:max-w-xl">
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
      <section className="w-full bg-[#E9EAF0] px-4 sm:px-6 lg:px-[100px] py-10">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center pb-10">
          <h1 className="text-[24px] sm:text-[30px] leading-tight font-semibold text-[#1D2026] tracking-tight">
            Contact us
          </h1>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row lg:space-x-20 justify-center items-start">
          {/* Contact Details */}
          <div className="p-6 w-full sm:w-[403.5px] space-y-10">
            {/* Heading with forced line break */}
            <h3 className="text-lg font-medium text-[#1D2026]">
              Will you be in Lagos any time soon? <br />
              the office! We’d love to meet.
            </h3>

            {/* Contact Info */}
            <div className="space-y-4 text-sm text-[#1D2026] opacity-100">
              <div className="flex gap-6 items-start">
                <span className="text-[#FF6636] font-semibold min-w-[120px]">ADDRESS</span>
                <span className='text-[12.04px]'>80, Sparklight Estate,<br /> Ojodu, Lagos</span>
              </div>
              <div className='border-[0.75px] my-4 bg-[#E9EAF0]'></div>

              <div className="flex gap-6 items-start">
                <span className="text-[#FF6636] font-semibold min-w-[120px]">PHONE NUMBER</span>
                <span className='text-[12.04px]'>+234 123 456 7890</span>
              </div>
              <div className='border-[0.75px] bg-[#E9EAF0]'></div>

              <div className="flex gap-6 items-start">
                <span className="text-[#FF6636] font-semibold min-w-[120px]">EMAIL ADDRESS</span>
                <span className='text-[12.04px]'>contact@lenscrew.com <br />career@lenscrew.africa</span>
              </div>
              <div className='border-[0.75px] bg-[#E9EAF0]'></div>
            </div>
          </div>


          {/* Contact Form */}
          <form className="w-full max-w-lg bg-white p-6 rounded-md shadow-md space-y-4">
            <div className='space-y-4'>
              <h2 className="text-xl font-semibold text-[#1D2026]">Get in touch</h2>
              <p className="text-sm text-gray-600">
                Feel free to contact us, we love to make new partners & friends.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full">
                <label className="block text-sm font-medium text-[#1D2026]">First Name:</label>
                <input type="text" className="mt-1 p-2 w-full border-[0.75px] border-[#E9EAF0] px-2" />
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium text-[#1D2026]">Last Name:</label>
                <input type="text" className="mt-1 p-2 w-full border-[0.75px] border-[#E9EAF0] px-2" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1D2026]">Email:</label>
              <input type="email" className="mt-1 p-2 w-full border-[0.75px] border-[#E9EAF0] px-3" />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1D2026]">Subject:</label>
              <input type="text" className="mt-1 p-2 w-full border-[0.75px] border-[#E9EAF0] px-3" />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1D2026]">Message:</label>
              <textarea className="mt-1 p-2 w-full h-32 resize-none border-[0.75px] border-[#E9EAF0] px-3" />
            </div>

            <button className="w-fit flex items-center justify-center gap-2 px-4 py-2 bg-[#FF6636] text-white text-sm font-medium hover:bg-[#e65a2f] transition-colors">
              Send message
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
