import React from 'react';
import { Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f9f9f9]">
      {/* First Section */}
      <div className="w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 mx-auto bg-white">
        <section className="w-full min-h-[600px] flex items-center justify-center">
          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-4 md:gap-2 px-2 sm:px-8">
            {/* Text Content */}
            <div className="w-full max-w-[319.1px] h-auto sm:h-[186.13px] flex flex-col gap-[18.06px] text-black">
              <h1 className="text-2xl font-semibold font-poppins">Connect with us</h1>
              <p className="text-sm text-[13.55px] font-inter">
                Want to chat? We’d love to hear from you! Get in touch with our Customer Success Team to inquire about speaking events, advertising rates, or just say hello.
              </p>
              <button
                className="w-[138.22px] h-[37px] flex items-center justify-center gap-[6.03px] px-[18.06px] bg-[#FF6636] text-white text-sm font-medium hover:bg-[#e65a2f] transition-colors"
              >
                <Mail className="w-4 h-4" />
                Copy Email
              </button>
            </div>

            {/* Image */}
            <div className="w-full max-w-[567px]">
              <img
                src="/connectus.png"
                alt="connect us"
                className="w-full h-auto sm:h-[360px] object-contain"
              />
            </div>
          </div>
        </section>
      </div>

      {/* Second Section (flush with image base) */}
      <section className="w-full max-w-[1445px] min-h-[698.24px] px-4 sm:px-[60px] lg:px-[225.78px] py-[60.21px] flex flex-col gap-[30.1px] mx-auto bg-[#F5F7FA]">
        {/* Add your second section content here */}
      </section>
    </main>
  );
}
