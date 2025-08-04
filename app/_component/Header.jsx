"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Menu, X, CircleArrowOutUpRight } from "lucide-react";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={` fixed top-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? "w-[75%] top-4 left-1/2 transform -translate-x-1/2 rounded-full backdrop-blur-md bg-white/20 dark:bg-black/30 py-2 px-6 shadow-md"
          : "w-full bg-transparent py-4 px-6"
      }`}
    >
      <div className="flex items-center relative ">
        {/* Logo (Left - pushed to edge) */}
        <a href="/" className="flex-shrink-0 mr-auto">
          <img src="/logo-dark.svg" className=" dark:block h-8" alt="Logo" />
        </a>

        {/* Nav Links (Center) */}
        <ul className="hidden lg:flex gap-10 text-base font-semibold text-white absolute left-1/2 transform -translate-x-1/2">
          <li
            className={`transition border-b-2 ${
              pathname === "/"
                ? "text-blue-500 border-blue-500"
                : "border-transparent hover:text-blue-500"
            }`}
          >
            <a href="/">Home</a>
          </li>
          <li
            className={`transition border-b-2 ${
              pathname === "/about"
                ? "text-blue-500 border-blue-500"
                : "border-transparent hover:text-blue-500"
            }`}
          >
            <a href="/about">About</a>
          </li>
          <li
            className={`transition border-b-2 ${
              pathname === "/work"
                ? "text-blue-500 border-blue-500"
                : "border-transparent hover:text-blue-500"
            }`}
          >
            <a href="/work">Work</a>
          </li>
          <li
            className={`transition border-b-2 ${
              pathname === "/servicepage"
                ? "text-blue-500 border-blue-500"
                : "border-transparent hover:text-blue-500"
            }`}
          >
            <a href="/servicepage">Service</a>
          </li>
          <li
            className={`transition border-b-2 ${
              pathname === "/Contact" || pathname === "/contact"
                ? "text-blue-500 border-blue-500"
                : "border-transparent hover:text-blue-500"
            }`}
          >
            <a href="/Contact">Contact</a>
          </li>
        </ul>

        {/* Contact Button (Right - pushed to edge) */}
        <div className="hidden lg:flex ml-auto">
          <a href="/contact.html">
            <button className="flex items-center gap-2 bg-blue-600 px-6 py-2 rounded-3xl text-white font-medium hover:shadow-lg hover:bg-blue-700 transition-all">
              Contact Us
              <div className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center">
                <CircleArrowOutUpRight className="w-4 h-4" />
              </div>
            </button>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center gap-3 text-white text-xl ml-auto">
          <button onClick={() => setMobileMenuOpen(true)}>
            <Menu />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex flex-col items-center justify-center">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            <X />
          </button>
          <ul className="flex flex-col gap-6 text-lg font-semibold text-white text-center">
            <li>
              <a href="/" onClick={() => setMobileMenuOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="/about" onClick={() => setMobileMenuOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="/work" onClick={() => setMobileMenuOpen(false)}>
                Work
              </a>
            </li>
            <li>
              <a href="/servicepage" onClick={() => setMobileMenuOpen(false)}>
                Service
              </a>
            </li>
            <li>
              <a href="/contact" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
