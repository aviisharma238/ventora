"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "dushyant",
    rating: 5,
    text: "INNOVATIVE RESULT We are proud to be the first company to offer a full range of services in the field of digital marketing...",
  },
  {
    name: "ojas",
    rating: 5,
    text: "EXCEPTIONAL SERVICE The team at VENTORA has been instrumental in transforming our digital presence...",
  },
  {
    name: "chandresh",
    rating: 5,
    text: "OUTSTANDING RESULTS Working with VENTORA has been a game-changer for our business...",
  },
  {
    name: "yash",
    rating: 5,
    text: "PROFESSIONAL EXCELLENCE VENTORA's expertise in digital strategy is unmatched...",
  },
  {
    name: "harsh",
    rating: 5,
    text: "CREATIVE SOLUTIONS The creative team at VENTORA brought our vision to life...",
  },
];

export default function Testimonials() {
  return (
    <section className=" overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-right mb-20 leading-tight px-6 lg:px-0">
          What People Say
          <br />
          <span className="text-gray-400">About Us</span>
        </h2>
      </div>

      {/* loo1 */}
      <div className="w-screen p-3 overflow-hidden">
        <div className="flex animate-scroll-loop-left space-x-6 w-max">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="min-w-[300px] max-w-xs bg-gray-900/50 border border-gray-700 p-6 rounded-2xl backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm text-gray-400 font-medium">{testimonial.name}</span>
              </div>
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
      

      {/* loop 2 */}
      <div className="w-screen py-3 overflow-hidden">
        <div className="flex animate-scroll-loop-right space-x-6 w-max">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="min-w-[300px] max-w-xs bg-gray-900/50 border border-gray-700 p-6 rounded-2xl backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm text-gray-400 font-medium">{testimonial.name}</span>
              </div>
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}
