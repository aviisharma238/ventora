"use client";
import { FaYoutube, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const team = [
  {
    name: "Manas Gupta",
    role: "Founder & Full Stack Developer",
    img: "/team/ayush.png",
    color: "from-cyan-500 to-blue-600",
  },
  {
    name: "Ayush Sharma",
    role: "Co-Founder & UI/UX Designer",
    img: "/team/ayush.png",
    color: "from-pink-500 to-purple-500",
  },
  {
    name: "Ojas Sharma",
    role: "Front-End Developer",
    img: "/team/ayush.png",
    color: "from-purple-600 to-pink-700",
  },
  {
    name: "D.Yash Kumar",
    role: "Legal Advisor",
    img: "/team/ayush.png",
    color: "from-blue-600 to-purple-600",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-black text-white py-20 px-4 sm:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-16">
          <div>
            <p className="text-gray-400 text-lg font-semibold">Our Team</p>
            <h2 className="text-4xl sm:text-5xl font-bold mt-2 leading-tight">
              Let’s Meet Our <span className="text-blue-500">Ventora</span> Innovators
            </h2>
          </div>
          <p className="max-w-xl text-white/80 text-base">
            Our talented Ventora team is a group of innovative thinkers and skilled professionals
            dedicated to transforming your ideas into reality. With expertise in Web Development,
            Graphic Design, and User Interface Designing & User Experience Research, we ensure
            exceptional results for every project we undertake.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {team.map((member, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-r ${member.color} rounded-3xl min-h-[260px] overflow-hidden flex transition-transform hover:scale-[1.02] duration-300`}
            >
              {/* Left Content */}
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  {/* Name and underline */}
                  <div className="relative">
                    <h3 className="text-xl sm:text-2xl font-bold mb-1">{member.name}</h3>
                    <span className="block h-[2px] w-48 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </div>
                  <p className="text-white/90 mb-4 text-sm sm:text-base">{member.role}</p>
                </div>
                {/* Icons */}
                <div className="flex gap-4 text-white text-3xl">
                  <FaYoutube className="hover:text-black cursor-pointer" />
                  <FaLinkedin className="hover:text-black cursor-pointer" />
                  <FaGithub className="hover:text-black cursor-pointer" />
                  <FaInstagram className="hover:text-black cursor-pointer" />
                </div>
              </div>

              {/* Right Side Image with drop shadow */}
              <div className="w-[180px] sm:w-[220px] flex items-end justify-end pr-4 pb-4">
                <img
                  src={member.img}
                  alt={member.name}
                  className="h-[200px] sm:h-[230px] object-cover rounded-2xl shadow-[0_10px_40px_rgba(255,255,255,0.2)] transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
