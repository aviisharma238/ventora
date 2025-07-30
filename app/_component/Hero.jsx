import React from 'react'

function Hero() {
  return (
    <section className=" px-6 py-16 bg-white lg:px-16 min-h-[70vh] flex items-center justify-center text-center">
      <div className="max-w-5xl z-10">
        <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold leading-[0.9] tracking-tight">
          A CREATIVE DIGITAL 
          <br />
          <span className="text-blue-500 relative">AGENCY</span>{" "}
          BUILDING SMART 
          <br />
          AND EFFECTIVE SOLUTION
        </h1>
        <p className="text-xl text-gray-300 mt-8 max-w-2xl mx-auto leading-relaxed">
          We create innovative digital experiences that drive results and help businesses thrive in the modern digital
          landscape.
        </p>
      </div>
    </section>
  )
}

export default Hero
