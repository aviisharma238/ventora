import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./_component/Header";
import Footer from "./_component/Footer";
import "aos/dist/aos.css";
import { RiWhatsappLine, RiPhoneFill } from "react-icons/ri";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ventora",
  description: "ventora",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black  text-white  overflow-x-hidden relative`}
      >
        <div className="fixed bottom-5 left-5 lg:left-10 z-50 flex flex-col md:flex-row lg:flex-row items-center lg:space-x-4 md:space-x-4 space-y-2 md:space-y-0">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918839845153?text=Hello%2C%20I%20am%20interested%20in%20your%20services%20at%20Ventora."
        className="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiWhatsappLine className="text-3xl" />
      </a>

      {/* Call Button */}
      <a
        href="tel:+918839845153"
        className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:bg-blue-700 transition-all duration-300"
      >
        <RiPhoneFill className="text-3xl" />
      </a>
    </div>
    <Analytics/>
    <SpeedInsights/>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
