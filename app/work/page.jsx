"use client";
import React, { useEffect, useRef, useState } from "react";

const projects = [
  {
    name: "StarForge",
    image: "/projects/1.jpg",
    role: "AI SaaS Landing Page",
    description:
      "A modern SaaS landing experience that highlights AI productivity. Clean UI, reactive animations, and built for user engagement.",
    tech: ["React", "Vite", "Tailwind CSS", "Parallax.js", "Vercel"],
  },
  {
    name: "NebulaPay",
    image: "/projects/img1.jpeg",
    role: "Payment Interface UI",
    description:
      "Modern financial dashboard UI/UX built for speed and mobile-first usage with real-time components.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    name: "GlowUI",
    image: "/projects/img2.png",
    role: "Admin Analytics Dashboard",
    description:
      "Futuristic design with glowing effects, data analytics, and interactive graphs powered by Chart.js.",
    tech: ["React", "Chart.js", "Tailwind CSS", "Firebase"],
  },
  {
    name: "MetaBlog",
    image: "/projects/metablog.png",
    role: "MDX Blog System",
    description:
      "Clean, optimized blog structure with MDX, syntax highlighting, SEO support, and dynamic content indexing.",
    tech: ["Next.js", "MDX", "Algolia", "Tailwind CSS"],
  },
];

export default function ProjectsShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const refs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.innerHeight * 0.2;
      let closest = 0;

      refs.current.forEach((ref, index) => {
        const rect = ref?.getBoundingClientRect();
        if (rect && rect.top <= offset) {
          closest = index;
        }
      });

      setActiveIndex(closest);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-black text-white min-h-screen py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-2">Our Projects</h2>
        <p className="text-gray-400 text-lg mb-12 max-w-2xl">
          Crafted with care, built for results. We design scalable, smooth, and
          sharp digital experiences.
        </p>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sticky Image Layer (Preloaded all images) */}
          <div className="lg:w-1/2 sticky top-28 h-fit hidden lg:block ">
            {projects.map((proj, i) => (
              <img
                key={i}
                src={proj.image}
                alt={proj.name}
                className={`absolute top-0 left-0 w-full rounded-xl shadow-2xl transition-opacity duration-500 ease-in-out ${
                  activeIndex === i ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>

          {/* Scrollable Text Content */}
          <div className="lg:w-1/2 flex flex-col gap-24">
            {projects.map((proj, i) => (
              <div
                key={i}
                ref={(el) => (refs.current[i] = el)}
                className="space-y-4 scroll-mt-28"
              >
                <h3 className="text-2xl font-semibold text-pink-500">{proj.name}</h3>
                <p className="text-sm text-gray-400">{proj.role}</p>
                <p className="text-gray-300 leading-relaxed">{proj.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {proj.tech.map((tag, j) => (
                    <span
                      key={j}
                      className="bg-gray-800 text-xs px-3 py-1 rounded-full border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile image display */}
          <div className="block lg:hidden mt-8 relative">
            {projects.map((proj, i) => (
              <img
                key={i}
                src={proj.image}
                alt={proj.name}
                className={`absolute top-0 left-0 w-full rounded-xl shadow-xl transition-opacity duration-500 ${
                  activeIndex === i ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
