
import React from 'react'

export default function PaymentPage(){
  return (
    <main className='max-h-full'>
      <div>
        <section className="w-full  max-h-[496px] mx-auto px-4 sm:px-[60px] lg:px-[60px] py-[60.24px] gap-[84.34px] flex flex-col md:flex-row  justify-between">
          {/* Left - Text */}
          <div className="flex-1 min-w-0 space-y-5 p-2">
            <div className=' h-[146.05px] space-y-2 pl-5'>
              <h1 className="font-inter font-semibold text-[60.24px] leading-[60.24px] tracking-[-0.02em] text-[#E9EAF0] whitespace-nowrap truncate">
                LensCrew Academy:
              </h1>

              <h2 className='max-w-[580px] h-[48px] font-semibold text-[36.14px]'>The Industry&rsquo;s Best-Kept Secret
              </h2>
              <p className=''>Where legendary production expertise meets next-gen creativity</p>
            </div>

            <div className=" w-full max-w-[612px] h-auto sm:h-[191.05px] flex flex-col gap-[15.05px] px-4 sm:px-6">
               <h2 className="w-[276.96px] h-[31px] text-[24.08px] font-semibold leading-[30.1px] tracking-[-0.01em] text-[#1D2026] font-['Inter'] space-y-5">
                Our Legacy
              </h2>

              <div>
                <p className='font-normal text-[12.04px] text-[#525252]'>Founded by Award-Winning Visual Producer Kayode Ajayi, whose 35-year career includes:</p>
                <ul className='list-disc font-normal text-[12.04px] text-[#525252] pl-6'>
                  <li>Producing 20% of TV/streaming ads you see today (MTN, Pepsi, Dangote campaigns)</li>
                  <li>Producer of Nigeria’s most-watched reality show <span className='font-semibold'>(Gulder Ultimate Search Seasons 1-12)</span></li>
                  <li>Mentoring 3 generations of Africa’s top cinematographers</li>
               </ul>
              </div>

              <div className='font-normal text-[12.04px] text-[#525252]'>
                <p>I’ve seen brilliant talents fail from lack of practical knowledge. At LensCrew, we teach the unspoken rules that make or break careers.</p>
                <p>— Kayode Ajayi, Founder/Executive Producer</p>
              </div>
              
            </div>
           


          </div>

          {/* Right - Image */}
          <div className="w-[506px] h-[376px] shrink-0">
            <img
              src="/headphone.png"
              alt="Headphone"
              className="w-full h-full object-contain"
            />
          </div>
        </section>

        <section className="w-full max-w-[1445px] min-h-[535px] bg-[url('/generation.png')] bg-cover max-h-screen relative overflow-hidden">
          <div className="flex items-center w-full h-full absolute left-0 top-1/2 -translate-y-1/2">

            {/* Left colored div — flush to the edge */}
            <div className="w-[55px] h-[297px] bg-[#DF4F3AF7]"></div>

            {/* Center content */}
            <div className="flex-1 text-[#FFFFFF] w-[583px] px-6 h-[236px]">
              <div className='w-[583px] pb-2'>
                <h1 className="font-bold w-[583px] text-[46px]">Join the Next Generation</h1>
                <p>Explore Courses</p>
              </div>
              <div className="text-sm space-y-3 ">
                <p>Studio Visits Welcome</p>
                <p>80 Sparklight Estate, Ojodu, Lagos</p>
                <p>+234 812 345 6789</p>
                <p>apply@lenscrew.africa</p>
              </div>
            </div>

            {/* Right colored div */}
            <div className="w-[644px] h-[297px] bg-[#DF4F3AF7]"></div>
          </div>
        </section>

      </div>
     
     

    </main>
    
  )
}

