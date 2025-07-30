import React from "react";
import { ArrowRight } from "lucide-react";

const services = [
    {
        title: "Web Development",
        img: "/services/web-dev.svg",
        desc: "We build fast, responsive, and user-friendly websites using modern web tech stacks. From business sites to full web apps, we create clean and secure code with modern UI.",
    },
    {
        title: "Web Design",
        img: "/services/web-design.svg",
        desc: "We craft visually stunning and user-friendly designs that elevate your brand. Our focus is on great user experience, clean UI, and smooth design that drives results.",
    },
    {
        title: "UI/UX Design",
        img: "/services/ui-ux.svg",
        desc: "We design seamless and engaging user experiences with perfect hierarchies, visual consistency, and strong usability to achieve higher satisfaction.",
    },
    {
        title: "Graphic Design",
        img: "/services/graphic.svg",
        desc: "We create eye-catching and memorable designs for your brand including logos, posters, social media, and UI graphics that deliver messages clearly and attractively.",
    },
    {
        title: "Branding",
        img: "/services/branding.svg",
        desc: "We build strong, memorable brand identities with consistent visuals, color palettes, and messaging that leave lasting impact.",
    },
    {
        title: "Digital Marketing",
        img: "/services/marketing.svg",
        desc: "We help you grow online through SEO, paid ads, content strategies, and social media growth to increase engagement and generate leads.",
    },
];

const About = () => {
    return (
        <section className="px-6 md:px-16 py-16 ">
            {/* Top Section */}
            <div className="flex flex-col lg:flex-row gap-12 mb-16 items-center">
                {/* Left */}
                <div className="lg:w-1/2">
                    <p className="text-gray-400 text-sm mb-2">Our Services</p>
                    <h2 className="text-4xl font-bold mb-4 leading-tight">
                        Empowering Your Business with Smart Digital Solutions
                    </h2>
                    <p className="text-gray-300 text-base leading-relaxed">
                        At Ventora, we specialize in delivering high-impact digital services
                        crafted to elevate your brand and streamline your growth. From
                        design to development, we offer result-driven solutions tailored to
                        your goals.
                    </p>
                </div>

                {/* Right Image */}
                <model-viewer
                    src="/models/web-dev.glb"
                    alt='Web Development Model' 
                    auto-rotate
                    camera-controls
                    style={{
                        width: "350px",
                        height: "300px",
                        borderRadius: "0.75rem",
                        backgroundColor: "#ffffff",
                    }}
                />
            </div>

            {/* Services Title */}
            <div className="text-center mb-12">
                <h2 className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent  text-4xl font-bold mb-2 relative inline-block">
                    Services
                </h2>
                <p className="text-lg text-gray-400 mt-2 tracking-wide uppercase font-semibold">
                    Our Specializations
                </p>
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-[#1f1f1f] rounded-2xl p-6 border border-transparent hover:border-blue-600 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transform hover:-translate-y-1"
                    >
                        <h3 className="text-xl font-bold mb-3">{service.title}</h3>

                        {/* Image Here */}
                        <img
                            src={service.img}
                            alt={service.title}
                            className="rounded-lg w-full h-auto max-h-[280px] object-cover mb-4"
                        />

                        <p className="text-sm text-gray-400 mb-8">{service.desc}</p>

                        <div className="flex justify-center">
                            <button className="group bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-600 hover:to-blue-800 font-semibold py-2 px-5 rounded-full inline-flex items-center gap-2 transition-all duration-300 overflow-hidden">
                                <span className="transition-all duration-300 group-hover:translate-x-1">
                                    Get Details
                                </span>
                                <ArrowRight className="w-4 h-4 transform transition-all duration-300 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default About;
