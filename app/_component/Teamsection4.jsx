import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

export default function BentoTeamLayout() {
  return (
    <section className="">
      <div className=" top-0 right-0 px-20 mb-16">
        <h2 className="text-4xl font-bold">Our Team</h2>
        <p className="text-lg text-gray-400 mt-2">
          Let’s Meet Our Ventora Creators
        </p>
      </div>

      <div className="grid grid-cols-5 grid-rows-7 gap-4 max-w-6xl mx-auto">
        {/* CENTER BOX - EMPTY */}
        <div className="col-start-3 col-end-4 row-start-4 row-end-5"></div>

        {/* TOP LEFT */}
        <div className="bg-[#2b2b2b] rounded-2xl p-6 col-start-1 col-end-4 row-start-1 row-end-4">
          <Card
            name="MANAS GUPTA"
            role="Founder"
            title="Full Stack Developer"
            image="/team/ayush.png"
          />
        </div>

        {/* BOTTOM LEFT */}
        <div className="bg-[#2b2b2b] rounded-2xl p-6 col-start-1 col-end-3 row-start-4 row-end-8">
          <Card
            name="D.YASH KUMAR"
            role="SEO"
            title="Full Stack Developer"
            image="/team/ayush.png"
          />
        </div>

        {/* BOTTOM RIGHT */}
        <div className="bg-[#2b2b2b] rounded-2xl p-6 col-start-3 col-end-6 row-start-5 row-end-8">
          <Card
            name="OJAS DESHMUKH"
            role="UX Expert"
            title=""
            image="/team/ayush.png"
          />
        </div>

        {/* TOP RIGHT —  */}
        <div className="bg-[#2b2b2b] rounded-2xl p-6 col-start-4 col-end-6 row-start-1 row-end-5">
          <Card
            name="AYUSH SHARMA"
            role="Co-Founder"
            title="Full Stack Developer"
            image="/team/ayush.png"
          />
        </div>
      </div>
    </section>
  );
}

function Card({ name, role, title, image }) {
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <h3 className="text-lg font-bold uppercase mb-1 flex justify-between items-center">
          {name}
          <span className="w-4 h-1 bg-white rounded-full"></span>
        </h3>
        <p className="text-sm text-gray-300">{role}</p>
        {title && <p className="text-sm text-gray-400">{title}</p>}
      </div>
      <div className="">
        <img
          src={image}
          alt={name}
          className="w-20 h-30 object-contain mx-auto"
        />
      </div>
      <div className="flex justify-center gap-4 text-xl text-white">
        <FaInstagram />
        <FaLinkedin />
        <FaGithub />
        <FaFacebook />
      </div>
    </div>
  );
}
