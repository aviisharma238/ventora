import React from 'react';
import { Send } from 'lucide-react';
import { Instagram, Linkedin, Github, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-10 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-7xl mx-auto">
        
        {/* Logo and Description */}
        <div className="space-y-4 col-span-1">
        <img
            src="/logo-dark.svg"
            alt="Ventora Logo"
            className="w-40 h-auto"
          />
          <p className="text-sm leading-relaxed text-gray-300">
            Building impactful websites & visual identities for startups and brands.
            Ventora has empowered 100+ clients with sleek design and seamless development.
            Follow us and be part of our creative tech journey.
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-3">
          <h4 className="font-semibold">Call Us</h4>
          <p className="text-sm text-gray-300">+91 8839845153, +91 7879434673</p>

          <h4 className="font-semibold mt-6">Email Us</h4>
          <p className="text-sm text-gray-300">ventora.vista@gmail.com</p>
        </div>

        {/* Essentials Links */}
        <div>
          <h4 className="font-semibold mb-3">Essentials</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/servicepage">Services</a></li>
            <li><a href="/work">Work</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold mb-3">Join Our Newsletter</h4>
          <p className="text-sm text-gray-300 mb-4">
            We’ll keep you updated with our latest services and smart ideas
            straight from our creative cave to your inbox.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="px-4 py-2 w-full text-black rounded-l-md"
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 rounded-r-md">
  <Send size={18} />
</button>

          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="mt-10 border-t border-gray-700 pt-5 flex flex-col items-center justify-center text-center">
  <p className="text-sm text-gray-400 mb-4">Follow us</p>
  <div className="flex gap-5 text-white text-xl items-center justify-center">
  <a href="https://www.instagram.com/ventora_vesta" target="_blank" rel="noopener noreferrer"> <Instagram /></a>
    <a href="#"><Linkedin /></a>
    <a href="#"><Github /></a>
    <a href="#"><Facebook /></a>
  </div>
</div>

    </footer>
  );
}