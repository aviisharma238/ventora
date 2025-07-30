import React from "react";
import { Rocket, Globe, Users } from "lucide-react";

const About = () => {
  return (
    <section className="bg-black  px-6 md:px-16 py-16">
      {/* Top Section */}
      <div className="flex sm:grid-cols-2 lg:grid-cols-3 flex-col lg:flex-row gap-12 mb-16 items-center">
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

        {/* img */}
        <div className="lg:w-1/2 w-full">
          <img
            src="/8c91cc07830536091f2ea974e8c59fe4.jpg" // Replace with your image path
            alt="Ventora creative team"
            className="rounded-xl h-auto w-full shadow-lg"
          />
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-8 border-b border-white/20 pb-12 mb-16">
        <div>
          <Rocket className=" mb-3 w-6 h-6" />
          <h3 className="text-lg font-semibold mb-1">Founded</h3>
          <p className="text-gray-400 text-sm">
            Founded by Manas gupta, who leads Ventora with vision and
            innovation, ensuring exceptional digital solutions.
          </p>
        </div>

        <div>
          <Globe className=" mb-3 w-6 h-6" />
          <h3 className="text-lg font-semibold mb-1">Crafted 69+ Websites</h3>
          <p className="text-gray-400 text-sm">
            Ventora has successfully crafted over 162 websites, delivering
            exceptional digital solutions for diverse clients worldwide.
          </p>
        </div>

        <div>
          <Users className=" mb-3 w-6 h-6" />
          <h3 className="text-lg font-semibold mb-1">114+ Clients</h3>
          <p className="text-gray-400 text-sm">
            Ventora has proudly served over 260 clients, tailored to their
            unique needs and driving their online success.
          </p>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="grid grid-cols-2 gap-8 relative max-w-6xl mx-auto">
        {/* Titles */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent transition duration-300 transform hover:scale-105 hover:brightness-125">
            OUR MISSION
          </h2>
        </div>
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent transition duration-300 transform hover:scale-105 hover:brightness-125">
            OUR VISSION
          </h2>
        </div>

        {/* Line connecting dots */}
        <div className="absolute top-[75px] left-1/2 transform -translate-x-1/2 h-[90%] w-1 bg-white/20 z-0"></div>

        {/* Row 1 */}
        <div className="relative h-30 hover:scale-105 duration-500  space-y-2">
          <h3 className="text-lg font-semibold ">
            Empowering Brands Digitally
          </h3>
          <p className="text-sm text-gray-300">
            Ventora's mission is to empower businesses by delivering smart,
            creative, and result-driven digital solutions that enhance online
            presence and brand engagement.
          </p>
        </div>
        <div className="relative h-30  space-y-2"></div>

        {/* Row 2 */}
        <div className="relative h-30  space-y-2"></div>
        <div className="relativeh-30  hover:scale-105 duration-500  space-y-2">
          <h3 className="text-lg font-semibold ">
            A Future Where Brands Thrive
          </h3>
          <p className="text-sm text-gray-300">
            To shape a digital future where every brand stands out, connects
            deeply, and scales without limits.
          </p>
        </div>

        {/* Row 3 */}
        <div className="relative h-30 hover:scale-105 duration-500  space-y-2">
          <h3 className="text-lg font-semibold ">
            Breaking Digital Boundaries
          </h3>
          <p className="text-sm text-gray-300">
            Our mission is to break digital boundaries by blending creativity,
            technology, and strategy into unforgettable brand experiences that
            drive real impact.
          </p>
        </div>
        <div className="relativeh-30   space-y-2"></div>

        {/* Row 4 */}
        <div className="relative h-30  space-y-2"></div>
        <div className="relativeh-30  hover:scale-105 duration-500  space-y-2">
          <h3 className="text-lg font-semibold ">
            Breaking Digital Boundaries
          </h3>
          <p className="text-sm text-gray-300">
            To become the creative force behind the world’s most inspiring
            digital experiences where ideas evolve into movements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
