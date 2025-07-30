"use client";
import React, { useState, useEffect } from "react";
import { Rocket, Globe, Users } from "lucide-react";
import clsx from "clsx";

// 💫 Image array
const images = [
  "/img/img1.jpg",
  "/img/img2.jpg",
  "/img/img3.jpg",
  "/img/img4.jpg",
];

const About = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const next = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className=" px-6 md:px-16 py-16 ">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row gap-12 mb-16 items-center">
        {/* Left */}
        <div className="lg:w-1/2">
          <p className="text-gray-400 text-sm mb-2">Welcome to Ventora!!!</p>
          <h2 className="text-4xl font-bold mb-4 leading-tight">
            Elevate Your Digital Journey
          </h2>
          <p className="text-gray-300 text-base leading-relaxed">
            Ventora isn’t just a digital solutions provider — we’re your growth
            partner in the ever-evolving digital landscape. Driven by innovation
            and focused on delivering impactful results, we offer a complete
            range of services tailored to amplify your brand’s digital
            footprint.
            <br />
            Our talented team blends creativity with strategy to craft impactful
            websites, smart user experiences, and compelling content that
            resonates. Whether you're launching a new venture or scaling an
            existing one, Ventora is here to turn your ideas into reality and
            your vision into success. With Ventora, your brand isn’t just online
            — it’s unforgettable. Let’s create something amazing, together.
          </p>
        </div>

        {/* 💖 Right - Auto Looping Image Slider */}
        <div className="lg:w-1/2 w-full flex justify-center items-center h-[300px] sm:h-[400px] relative">
          {images.map((img, index) => {
            const isActive = index === activeIndex;
            const isPrev =
              index === (activeIndex - 1 + images.length) % images.length;
            const isNext = index === (activeIndex + 1) % images.length;

            let base =
              "absolute rounded-xl object-cover w-[260px] h-[320px] sm:w-[320px] sm:h-[400px] transition-all duration-500 ease-in-out";
            let extra = "scale-90 blur-[2px] opacity-60";

            if (isActive) {
              extra = "z-30 scale-100 blur-0 opacity-100";
            } else if (isPrev) {
              extra += " -translate-x-1/2 sm:-translate-x-[180px] z-20";
            } else if (isNext) {
              extra += " translate-x-1/2 sm:translate-x-[180px] z-20";
            }

            return (
              <img
                key={index}
                src={img}
                alt={`Slide ${index}`}
                className={clsx(base, extra)}
              />
            );
          })}
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid md:grid-cols-3 gap-8 border-b border-white/20 pb-12 mb-16">
        <div>
          <Rocket className="mb-3 w-6 h-6" />
          <h3 className="text-lg font-semibold mb-1">Founded</h3>
          <p className="text-gray-400 text-sm">
            Founded by Manas Gupta, who leads Ventora with vision and innovation.
          </p>
        </div>
        <div>
          <Globe className="mb-3 w-6 h-6" />
          <h3 className="text-lg font-semibold mb-1">Crafted 69+ Websites</h3>
          <p className="text-gray-400 text-sm">
            Ventora has successfully crafted over 162 websites globally.
          </p>
        </div>
        <div>
          <Users className="mb-3 w-6 h-6" />
          <h3 className="text-lg font-semibold mb-1">114+ Clients</h3>
          <p className="text-gray-400 text-sm">
            Ventora proudly serves over 260 clients, customizing for their success.
          </p>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="grid grid-cols-2 gap-8 relative max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent transition duration-300 transform hover:scale-105 hover:brightness-125">
            OUR MISSION
          </h2>
        </div>
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent transition duration-300 transform hover:scale-105 hover:brightness-125">
            OUR VISION
          </h2>
        </div>

        {/* Middle Line */}
        <div className="absolute top-[75px] left-1/2 transform -translate-x-1/2 h-[90%] w-1 bg-white/20 z-0"></div>

        {/* Mission Rows */}
        <div className="relative space-y-2 hover:scale-105 duration-500">
          <h3 className="text-lg font-semibold">Empowering Brands Digitally</h3>
          <p className="text-sm text-gray-300">
            Ventora empowers brands through smart, creative, and result-driven solutions.
          </p>
        </div>
        <div></div>
        <div></div>
        <div className="relative space-y-2 hover:scale-105 duration-500">
          <h3 className="text-lg font-semibold">A Future Where Brands Thrive</h3>
          <p className="text-sm text-gray-300">
            Creating a future where every brand thrives and grows without limits.
          </p>
        </div>
        <div className="relative space-y-2 hover:scale-105 duration-500">
          <h3 className="text-lg font-semibold">Breaking Digital Boundaries</h3>
          <p className="text-sm text-gray-300">
            We break boundaries through creativity, tech, and strategy that delivers.
          </p>
        </div>
        <div></div>
        <div></div>
        <div className="relative space-y-2 hover:scale-105 duration-500">
          <h3 className="text-lg font-semibold">Inspiring Digital Movements</h3>
          <p className="text-sm text-gray-300">
            Ventora fuels the world’s most inspiring digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
