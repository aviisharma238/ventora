"use client";

import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import React, { useEffect, useState } from "react";
import {
  Menu,
  X,
  CircleArrowOutUpRight,
} from "lucide-react";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setShowPopup(false);
    };
    if (showPopup) document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [showPopup]);

  // ✅ Disable scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("overflow-hidden", "h-screen");
    } else {
      document.body.classList.remove("overflow-hidden", "h-screen");
    }
  }, [mobileMenuOpen]);
  

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Invalid email.";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required.";
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "10 digit phone only.";
    if (!formData.service.trim()) newErrors.service = "Select a service.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Submitted:", formData);
      alert("Form submitted successfully!");
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 transition-all duration-300 ${
          scrolled
            ? "w-[75%] top-4 left-1/2 transform -translate-x-1/2 rounded-full backdrop-blur-md bg-white/20 dark:bg-black/30 py-2 px-6 shadow-md"
            : "w-full bg-transparent py-4 px-6"
        }`}
      >
        <div className="flex items-center relative">
          <a href="/" className="flex-shrink-0 mr-auto">
            <img src="/logo-dark.svg" className="dark:block h-8" alt="Logo" />
          </a>
          <ul className="hidden lg:flex gap-10 text-base font-semibold text-white absolute left-1/2 transform -translate-x-1/2">
            <li className={`transition border-b-2 ${pathname === "/" ? "text-blue-500 border-blue-500" : "border-transparent hover:text-blue-500"}`}><a href="/">Home</a></li>
            <li className={`transition border-b-2 ${pathname === "/about" ? "text-blue-500 border-blue-500" : "border-transparent hover:text-blue-500"}`}><a href="/about">About</a></li>
            <li className={`transition border-b-2 ${pathname === "/work" ? "text-blue-500 border-blue-500" : "border-transparent hover:text-blue-500"}`}><a href="/work">Work</a></li>
            <li className={`transition border-b-2 ${pathname === "/servicepage" ? "text-blue-500 border-blue-500" : "border-transparent hover:text-blue-500"}`}><a href="/servicepage">Service</a></li>
            <li className="transition border-b-2 border-transparent hover:text-blue-500">
              <button onClick={() => setShowPopup(true)}>Contact</button>
            </li>
          </ul>
          <div className="hidden lg:flex ml-auto">
            <button
              onClick={() => setShowPopup(true)}
              className="flex items-center gap-2 bg-blue-600 px-6 py-2 rounded-3xl text-white font-medium hover:shadow-lg hover:bg-blue-700 transition-all"
            >
              Contact Us
              <div className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center">
                <CircleArrowOutUpRight className="w-4 h-4" />
              </div>
            </button>
          </div>
          <div className="lg:hidden flex items-center gap-3 text-white text-xl ml-auto">
            <button
              onClick={() => {
                setMobileMenuOpen(true);
                window.scrollTo(0, 0); // ✅ Scroll to top
              }}
            >
              <Menu />
            </button>
          </div>
        </div>

        {/* ✅ Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex justify-center items-center">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-white text-3xl"
            >
              <X />
            </button>
            <ul className="flex flex-col gap-6 text-lg font-semibold text-white text-center">
              <li><a href="/" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
              <li><a href="/about" onClick={() => setMobileMenuOpen(false)}>About</a></li>
              <li><a herf="/work" onClick={() => setMobileMenuOpen(false)} >Work</a></li>
              <li><a href="/servicepage" onClick={() => setMobileMenuOpen(false)}>Service</a></li>
              <li>
                <button onClick={() => {
                  setShowPopup(true);
                  setMobileMenuOpen(false);
                }}>
                  Contact
                </button>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* ✅ Contact Popup */}
      {showPopup && (
        <div
          className="fixed inset-0 bg-white/10 backdrop-blur-sm flex justify-center items-center z-[9999]"
          onClick={() => setShowPopup(false)}
        >
          <div
            className="bg-[#fefefe] w-[95%] max-w-2xl rounded-xl shadow-xl p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#aeaeae] rounded-t-lg p-4">
              <h2 className="text-2xl font-bold text-black">Let’s Connect</h2>
              <p className="text-sm text-gray-700">“Start your digital journey with us 🚀”</p>
              <div className="flex items-center gap-6 mt-2">
                <div className="flex items-center gap-2 text-black font-semibold">
                  <FaWhatsapp size={18} color="green" /> Chat With Us
                </div>
                <div className="flex items-center gap-2 text-black font-semibold">
                  <MdEmail size={18} color="blue" /> Email Us
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="bg-[#fefefe] mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4"
              autoComplete="on"
            >
              <div>
                <label className="block text-black font-semibold mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  className="w-full border text-black bg-[#d5d5d5] border-gray-300 rounded-md p-2"
                />
                {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-black font-semibold mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  className="w-full border text-black bg-[#d5d5d5] border-gray-300 rounded-md p-2"
                />
                {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-black font-semibold mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  className="w-full border text-black bg-[#d5d5d5] border-gray-300 rounded-md p-2"
                />
                {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-black font-semibold mb-1">Services</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full border text-black bg-[#d5d5d5] border-gray-300 rounded-md p-2"
                >
                  <option value="" disabled>Select a service</option>
                  <option value="web-development">Web Development</option>
                  <option value="web-design">Web Design</option>
                  <option value="ui-ux-design">UI/UX Design</option>
                  <option value="branding">Branding</option>
                  <option value="social-media-marketing">Social Media Marketing</option>
                  <option value="graphic-design">Graphic Design</option>
                </select>
                {errors.service && <p className="text-red-600 text-sm">{errors.service}</p>}
              </div>

              <div className="sm:col-span-2">
                <label className="block text-black font-semibold mb-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us a bit about your project or idea..."
                  className="w-full border text-black bg-[#d5d5d5] border-gray-300 rounded-md p-2"
                />
                {errors.message && <p className="text-red-600 text-sm">{errors.message}</p>}
              </div>

              <div className="flex justify-between items-center sm:col-span-2 mt-2">
                <div className="text-green-600 text-sm font-medium">✅ 100% Confidential</div>
                <button
                  type="submit"
                  className="bg-blue-700 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-800"
                >
                  Send Now
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
