"use client";
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Instagram, Linkedin, Github, Facebook } from 'lucide-react';
import { RiPhoneFill } from "react-icons/ri";
import { IoMdMailUnread } from "react-icons/io";

export default function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    if (!email) {
      setMessage("Please enter your email.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch('http://localhost:5000/subscribe', { // change to deployed API
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Thank you for subscribing!");
        setEmail('');
      } else {
        setMessage(data.error || "Something went wrong.");
      }
    } catch (error) {
      setMessage("Failed to connect to server.");
    } finally {
      setLoading(false);
    }
  };


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
          <div className="flex items-center gap-2">
            <RiPhoneFill />
            <h4 className="font-semibold">Call Us </h4>
          </div>
          <p className="text-sm text-gray-300">+91 8839845153, +91 7879434673</p>
          
          <div className="flex items-center gap-2">
            <IoMdMailUnread />
            <h4 className="font-semibold">Email Us</h4>
          </div>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
            <button
              onClick={handleSubscribe}
              disabled={loading}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 rounded-r-md flex items-center justify-center"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg
                    className="animate-spin h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                  Sending
                </span>
              ) : (
                <Send size={18} />
              )}
            </button>
          </div>
          {message && <p className="text-sm text-green-400 mt-2">{message}</p>}
        </div>
      </div>
      

      {/* Social Icons */}
      <div className="mt-10 border-t border-gray-700 pt-5 flex flex-col items-center justify-center text-center">
        <p className="text-sm text-gray-400 mb-4">Follow us</p>
        <div className="flex gap-5 text-white text-xl items-center justify-center">
          <a href="https://www.instagram.com/ventora_vesta" target="_blank" rel="noopener noreferrer"><Instagram /></a>
          <a href="#"><Linkedin /></a>
          <a href="#"><Github /></a>
          <a href="#"><Facebook /></a>
        </div>
      </div>
    </footer>
  );
}
