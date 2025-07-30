import React from "react";

function Sco(){
  return (
    <section className="px-6 py-24 lg:px-16 bg-gradient-to-br  relative overflow-hidden">
      <div className="max-w-4xl relative z-10">
        <h2 className="text-5xl md:text-7xl font-bold mb-12 leading-tight">
          <span className="text-gray-500">SEO Tool</span> That
          <br />
          <span className="text-gray-500">Delivers</span> <span className="text-white">Real Result</span>
        </h2>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl leading-relaxed">
          Our advanced SEO tools and strategies help businesses achieve higher rankings, increased visibility, and
          measurable growth in organic traffic.
        </p>
        <button className="bg-white text-black hover:bg-gray-200 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl">
          Get Assist -
        </button>
      </div>

      {/* Decorative geometric shapes */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-10">
        <div className="grid grid-cols-3 gap-6">
          {[...Array(9)].map((_, i) => (
            <div key={i} className={`w-24 h-24 bg-white rounded-lg ${i % 3 === 0 ? "opacity-30" : "opacity-20"}`}></div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Sco 