
import Hero1 from "./_component/Hero";
import Bentobox from "./_component/Bentobox";
import ServiceSection from "./_component/ServiceSection";
import Teamsection from "./_component/Teamsection";
import Client from "./_component/Client";
import Contact from "./_component/Contact";




export default function Home() {
  return (
    <div className="bg-black text-white    relative ">
      
      <Hero1 />
      <Bentobox />
      <ServiceSection />
      <Teamsection />
      <Client />
      
      <Contact />
      
    </div>
  );
}
