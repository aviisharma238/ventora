"use client";
import React, { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("https://vb-cqpw.onrender.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    console.log(result);

    if (res.ok) {
      alert("Message sent successfully 💌");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      alert("Something went wrong 😔");
    }

  } catch (error) {
    console.error("ERROR:", error);
    alert("Failed to send message 😢");
  }
};


  return (
    <section className="w-full py-10 px-4 lg:px-16 flex flex-col lg:flex-row items-center justify-between">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
        <h2 className="text-3xl font-bold mb-2">Let’s Connect</h2>
        <p className="text-gray-400 mb-1 italic">
          “Start your digital journey with us 🚀”
        </p>
        <p className="text-gray-500 text-sm mb-6">
          Your vision deserves attention and we’re listening.<br />
          Drop a message, and we’ll respond faster than you expect.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-1 text-white">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none text-black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-white">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none text-black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-white">Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none text-black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-white">Message</label>
            <textarea
              name="message"
              placeholder="Tell us a bit about your project or idea..."
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-700 rounded-md h-28 resize-none focus:outline-none text-black"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Send Now
          </button>
        </form>
      </div>

      {/* Right Side - Illustration */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
        <img
          src="/Contact.png"
          alt="Connect Illustration"
          className="max-w-md w-full"
        />
      </div>
    </section>
  );
}
