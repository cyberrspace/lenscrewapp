import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_9yher8u", 
        "template_6r53fk8", 
        { user_email: email },
        "q8HD3p5J-GfkDUgoa" 
      )
      .then(
        () => {
          alert("✅ Subscription successful!");
          setEmail("");
          setLoading(false);
        },
        (error) => {
          alert("❌ Failed to send email. Please try again.");
          console.error(error);
          setLoading(false);
        }
      );
  };

  return (
    <footer className="w-full bg-[#111822] px-4 py-10 sm:px-8 sm:py-14 md:px-16 md:py-20 lg:px-24 lg:py-24 space-y-10 mx-auto">

      {/* Newsletter Section */}
      <div className="flex flex-col items-center justify-center w-full max-w-3xl px-4 mx-auto space-y-4 text-center">
        <h2 className="text-white text-lg sm:text-xl md:text-2xl font-semibold">
          Subscribe to our newsletter
        </h2>

        <div className="text-white text-sm sm:text-base leading-relaxed">
          <p>Get expert advice for your journey to LensCrew Academy delivered to your inbox.</p>
          <p>LensCrew Academy doesnt just teach — we mentor.</p>
        </div>

        {/* Input & Button */}
        <form
          onSubmit={sendEmail}
          className="relative w-full mt-4"
        >
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full h-14 pl-4 pr-[140px] text-black text-sm focus:outline-none"
          />



          <button
            type="submit"
            disabled={loading}
            className="
            absolute right-0 top-0 h-14
      bg-[#999894] hover:bg-[#999984] text-white
      p-4 sm:px-6 md:px-8
      text-sm sm:text-base font-semibold font-[Poppins] 
      transition duration-300 
    "
          >
            {loading ? "Sending..." : "Subscribe Now"}
          </button>
        </form>

      </div>

      {/* Social Icons */}
      <div className="flex flex-wrap gap-6 justify-center items-center mt-5">
        {/* Facebook */}
        <a href="https://facebook.com/yourProfile" target="_blank" rel="noopener noreferrer">
          <svg className="w-6 h-6 text-white hover:text-blue-500 transition" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 12a10 10 0 10-11.5 9.87v-6.99H8v-2.88h2.5V9.41c0-2.47 1.47-3.84 3.72-3.84 1.08 0 2.2.19 2.2.19v2.42h-1.24c-1.23 0-1.62.77-1.62 1.56v1.87H18l-.4 2.88h-2.34v6.99A10 10 0 0022 12z" />
          </svg>
        </a>

        {/* Instagram */}
        <a href="https://instagram.com/yourProfile" target="_blank" rel="noopener noreferrer">
          <svg className="w-6 h-6 text-white hover:text-pink-500 transition" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0120.5 7.75v8.5a4.25 4.25 0 01-4.25 4.25h-8.5A4.25 4.25 0 013.5 16.25v-8.5A4.25 4.25 0 017.75 3.5zm8.75 2a1 1 0 100 2 1 1 0 000-2zm-4.5 1.25a5.25 5.25 0 100 10.5 5.25 5.25 0 000-10.5zm0 1.5a3.75 3.75 0 110 7.5 3.75 3.75 0 010-7.5z" />
          </svg>
        </a>

        {/* Twitter */}
        <a href="https://twitter.com/yourProfile" target="_blank" rel="noopener noreferrer">
          <svg className="w-6 h-6 text-white hover:text-blue-400 transition" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.94 4.5c-.77.34-1.6.56-2.46.66a4.3 4.3 0 001.88-2.37c-.85.5-1.79.87-2.8 1.07a4.27 4.27 0 00-7.28 3.9A12.1 12.1 0 013 3.65a4.26 4.26 0 001.32 5.7A4.27 4.27 0 012.8 8v.05a4.28 4.28 0 003.42 4.19 4.27 4.27 0 01-1.93.07 4.27 4.27 0 003.99 2.97 8.57 8.57 0 01-5.3 1.83c-.34 0-.67-.02-1-.06a12.07 12.07 0 006.53 1.91c7.84 0 12.13-6.5 12.13-12.13 0-.18 0-.36-.01-.54A8.68 8.68 0 0022 5.44a8.45 8.45 0 01-2.06.56z" />
          </svg>
        </a>

        {/* LinkedIn */}
        <a href="https://linkedin.com/in/yourProfile" target="_blank" rel="noopener noreferrer">
          <svg className="w-6 h-6 text-white hover:text-blue-600 transition" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zm-9 19H7V9h3v10zm-1.5-11.25c-.97 0-1.75-.78-1.75-1.75S7.53 4.25 8.5 4.25s1.75.78 1.75 1.75S9.47 7.75 8.5 7.75zM20 19h-3v-4.5c0-1.11-.9-2-2-2s-2 .89-2 2V19h-3V9h3v1.16c.62-.82 1.61-1.41 2.7-1.41 1.99 0 3.6 1.61 3.6 3.6V19z" />
          </svg>
        </a>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-wrap justify-center items-center gap-4 text-white text-sm sm:text-base">
        <a href="">Courses</a>
        <a href="">Instructors</a>
        <a href="">About Us</a>
        <a href="">Contact</a>
      </div>

      {/* Copyright */}
      <p className="text-center text-xs sm:text-sm md:text-base font-poppins font-medium text-white">
        © 2025 - LensCrew Academy
      </p>
    </footer>
  );
};

export default Footer;
