"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { CircleArrowOutUpRight } from "lucide-react";

function VentoraGrid() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });

    const handleScroll = () => AOS.refresh();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen px-4 flex items-center justify-center text-black dark: transition-colors duration-300">
      <div
        className="w-full max-w-5xl grid gap-4
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4 lg:grid-rows-4 lg:h-[600px]"
      >
        {/* Logo Card */}
        <div
          className="card-style min-h-[120px] sm:col-span-2 lg:col-span-2 lg:row-span-1"
          data-aos="fade-up"
        >
          <img src="/logo.png" alt="Logo" className="mx-auto" />
        </div>

        <a
          href="/servicepage"
          className="group card-style relative overflow-hidden min-h-[150px] sm:col-span-2 lg:col-span-2 lg:row-span-2 
             before:content-[''] before:absolute before:-inset-1 before:rounded-xl before:bg-blue-500 before:blur-2xl 
             before:opacity-0 group-hover:before:opacity-50 before:transition-opacity before:duration-500 before:-z-10"
          data-aos="fade-up-left"
        >
          <img
            src="/serviceimg.jpeg" // 🔄 Replace with your image
            alt="Services"
            className="w-full h-full object-cover absolute inset-0 z-0"
          />
          <div className="absolute inset-0 bg-black/30 z-10" />
          <div className="absolute top-0 left-0 p-4 px-6 text-5xl font-bold text-white z-20">
            Services
          </div>
          <div className="absolute top-0 right-0 p-4 px-6 text-white z-20">
            <CircleArrowOutUpRight className="w-6 h-6" />
          </div>
        </a>

        <a
          href="/work"
          className="hover:border-blue-800 transition-all duration-300  card-style relative overflow-hidden min-h-[150px] sm:row-span-2 lg:col-span-1 lg:row-span-3 before:absolute before:inset-0 before:rounded-xl before:bg-blue-500 before:blur-xl before:opacity-30 before:-z-10"
          data-aos="fade-right"
        >
          {/* Background Image */}
          <img
            src="/workimg.jpg" // 🖼 Replace this with your image
            alt="Work Preview"
            className="w-full h-full object-cover absolute inset-0 z-0"
          />

          {/* Optional overlay for contrast */}
          <div className="absolute inset-0 bg-black/30 z-10" />

          {/* Top-right icon */}
          <div className="absolute top-0 right-0 p-4 px-6 text-white z-20">
            <CircleArrowOutUpRight className="w-6 h-6" />
          </div>

          {/* Bottom-left text */}
          <div className="absolute bottom-0 left-0 p-3 px-5 text-4xl font-bold text-white z-20">
            Work
          </div>
        </a>

        {/* V Logo Center Card */}
        <a
          className="card-style min-h-[100px] flex items-center justify-center lg:col-span-1 lg:row-span-1"
          data-aos="zoom-in-up"
        >
          <img src="/v-logo-light.svg" alt="V Logo" className="w-full h-full" />
        </a>

        <a
          href="/about"
          className="group card-style relative overflow-hidden min-h-[150px] sm:col-span-2 lg:col-span-3 lg:row-span-2 
             before:content-[''] before:absolute before:-inset-1 before:rounded-xl before:bg-blue-500 before:blur-2xl 
             before:opacity-0 group-hover:before:opacity-50 before:transition-opacity before:duration-500 before:-z-10"
          data-aos="fade-up"
        >
          <img
            src="/Stationery_Mockup_4.jpg"
            alt="About"
            className="w-full h-full object-cover absolute inset-0 z-0"
          />
          <div className="absolute inset-0 bg-black/30 z-10" />
          <div className="absolute top-0 right-0 p-4 px-6 text-white z-20">
            <CircleArrowOutUpRight className="w-6 h-6" />
          </div>
          <div className="absolute bottom-0 right-0 p-4 px-10 text-5xl font-bold text-white z-20">
            About
          </div>
        </a>
      </div>
    </div>
  );
}

export default VentoraGrid;
