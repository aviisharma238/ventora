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
              Let’s Meet Our <span className="text-blue-500">Dev N Dez</span> Innovators
            </h2>
          </div>
          <p className="max-w-xl text-white/80 text-base">
            Our talented DevnDez team is a group of innovative thinkers and skilled professionals
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
              className={`relative bg-gradient-to-r ${member.color} rounded-3xl p-8 pb-16 min-h-[220px] overflow-visible`}
            >
              {/* Image on top right */}
              <img
                src={member.img}
                alt={member.name}
                className="absolute right-4 sm:right-6 h-[200px] sm:h-[240px] z-10 object-contain"
              />

              {/* Info */}
              <div className="z-20">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-white/90 mb-4 text-sm sm:text-base">{member.role}</p>
                <div className="flex gap-4 text-white text-xl">
                  <FaYoutube className="hover:text-red-400 cursor-pointer" />
                  <FaLinkedin className="hover:text-blue-300 cursor-pointer" />
                  <FaGithub className="hover:text-gray-300 cursor-pointer" />
                  <FaInstagram className="hover:text-pink-400 cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
