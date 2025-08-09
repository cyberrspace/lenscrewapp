import React from 'react'

export default function PaymentPage() {
  return (
    <main className="max-h-full">
      <div>
        {/* Section 1 */}
        <section className="w-full max-h-auto mx-auto px-4 sm:px-8 lg:px-16 py-10 gap-12 flex flex-col md:flex-row justify-between items-center">

          {/* Left - Text */}
          <div className="flex-1 min-w-0 space-y-5 p-2">
            {/* Heading Section */}
            <div className="space-y-2 px-3 sm:px-5">
              <h1 className="font-inter font-semibold text-[28px] sm:text-[42px] md:text-[60px] leading-tight tracking-[-0.02em] text-[#E9EAF0]">
                LensCrew Academy:
              </h1>

              <h2 className="max-w-full sm:max-w-[580px] font-semibold text-[18px] sm:text-[26px] md:text-[36px] leading-snug">
                The Industry&rsquo;s Best-Kept Secret
              </h2>

              <p className="text-sm sm:text-base text-[#E9EAF0]/90">
                Where legendary production expertise meets next-gen creativity
              </p>
            </div>

            {/* Legacy Section */}
            <div className="w-full max-w-full sm:max-w-[612px] flex flex-col gap-4 px-3 sm:px-6">
              <h2 className="w-full text-[18px] sm:text-[22px] md:text-[24px] font-semibold leading-[1.3] tracking-[-0.01em] text-[#1D2026] font-['Inter']">
                Our Legacy
              </h2>

              <div>
                <p className="font-normal text-xs sm:text-sm text-[#525252]">
                  Founded by Award-Winning Visual Producer Kayode Ajayi, whose 35-year career includes:
                </p>
                <ul className="list-disc font-normal text-xs sm:text-sm text-[#525252] pl-5 sm:pl-6 space-y-1">
                  <li>Producing 20% of TV/streaming ads you see today (MTN, Pepsi, Dangote campaigns)</li>
                  <li>
                    Producer of Nigeria’s most-watched reality show{" "}
                    <span className="font-semibold">(Gulder Ultimate Search Seasons 1-12)</span>
                  </li>
                  <li>Mentoring 3 generations of Africa’s top cinematographers</li>
                </ul>
              </div>

              <div className="font-normal text-xs sm:text-sm text-[#525252] space-y-1">
                <p>
                  I’ve seen brilliant talents fail from lack of practical knowledge. At LensCrew, we teach the
                  unspoken rules that make or break careers.
                </p>
                <p>— Kayode Ajayi, Founder/Executive Producer</p>
              </div>
            </div>
          </div>

          {/* Right - Image */}
          <div className="w-full sm:w-[400px] md:w-[506px] aspect-[4/3] shrink-0">
            <img
              src="/headphone.png"
              alt="Headphone"
              className="w-full h-full object-contain"
            />
          </div>
        </section>

        {/* Section 2 */}
        <section className="w-full max-w-[1445px] min-h-[400px] sm:min-h-[535px] bg-[url('/generation.png')] bg-cover relative overflow-hidden mt-6">
          <div className="flex flex-col sm:flex-row items-center w-full h-full absolute inset-0">

            {/* Left colored div */}
            <div className="hidden sm:block w-[55px] h-full bg-[#DF4F3AF7]"></div>

            {/* Center content */}
            <div className="flex-1 text-[#FFFFFF] px-6 py-8 sm:py-0 sm:max-w-[583px]">
              <div className="pb-4">
                <h1 className="font-bold text-[28px] sm:text-[36px] md:text-[46px] leading-tight">
                  Join the Next Generation
                </h1>
                <p className="text-sm sm:text-base">Explore Courses</p>
              </div>
              <div className="text-xs sm:text-sm space-y-2 sm:space-y-3">
                <p>Studio Visits Welcome</p>
                <p>80 Sparklight Estate, Ojodu, Lagos</p>
                <p>+234 812 345 6789</p>
                <p>apply@lenscrew.africa</p>
              </div>
            </div>

            {/* Right colored div */}
            <div className="hidden sm:block flex-1 h-full bg-[#DF4F3AF7]"></div>
          </div>
        </section>
      </div>
    </main>
  )
}
