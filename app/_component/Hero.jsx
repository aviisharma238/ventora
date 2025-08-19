"use client";
import { useState } from "react";
import { Copy } from "lucide-react";
import DotBackground from "./DotBackground"; // ✅ Import added
import {FloatingPaper} from "./FloatingPaper";

function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("ventora.vista@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
 
  return (
    <section
      className="relative px-6 py-48 lg:px-16 min-h-[100vh] flex flex-col items-center justify-center text-center overflow-hidden text-white"
      
    >
      {/* ✅ DotBackground component as canvas layer */}
      <DotBackground />
      <FloatingPaper/>

      {/* Content */}
      <div className="max-w-4xl w-full flex flex-col items-center justify-center gap-6 z-10">
        <h1 className="text-center font-extrabold leading-relaxed tracking-tight text-3xl sm:text-3xl md:text-4xl lg:text-4xl">
          <div className="mb-3">
            A CREATIVE <span className="text-[#5863fa]">DIGITAL AGENCY</span>
          </div>
          <div>BUILDING SMART AND EFFECTIVE SOLUTIONS</div>
        </h1>

        <h3 className="text-base md:text-xl lg:text-2xl max-w-3xl font-medium leading-relaxed mx-auto">
          Turning visionary ideas into beautifully crafted
          <br />
          digital journeys for founders and startups
        </h3>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          {/* Let’s Connect Button */}
          <button className="relative group overflow-hidden bg-white/10 backdrop-blur-md text-white text-wrap md:text-sm lg:text-base font-medium px-4 lg:px-6 py-2 rounded-full shadow-lg transition-all duration-300 border border-white/30 flex items-center gap-2 h-10">
            <span className="relative z-10 transition-colors duration-300 group-hover:text-[#5863fa]">
              Let’s Connect
            </span>
            <span className="ml-2 w-7 h-7 rounded-full bg-white border border-white/50 flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:text-[#5863fa] z-10">
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-black group-hover:text-[#5863fa]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
            <span className="absolute right-0 top-0 h-full w-0 group-hover:w-full bg-white transition-all duration-300 ease-in-out z-0"></span>
          </button>

          {/* Copy Email Button */}
          <button
            onClick={handleCopy}
            className="relative overflow-hidden text-white bg-black px-4 lg:px-6 py-2 h-[40px] rounded-full text-wrap md:text-base lg:text-lg font-semibold transition-all duration-300 group shadow-lg flex items-center gap-2 border border-white/20"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
              {copied ? "Copied!" : "ventora.vista@gmail.com"}
            </span>
            <Copy className="relative z-10 w-5 h-5 transition-colors duration-300 group-hover:text-black" />
            <span className="absolute inset-0 bg-white scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 z-0"></span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
