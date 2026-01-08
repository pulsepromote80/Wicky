import React from "react";
import {
  RiTwitterXLine,
  RiTelegramLine,
  RiDiscordLine,
  RiLinkedinLine,
} from "react-icons/ri";

const Footer = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900">
    <div className="max-w-7xl mx-auto px-6 py-20 relative z-10 ">
      <div className="grid md:grid-cols-5 gap-12 mb-16">

        <div className="md:col-span-1">
          <div className="text-4xl font-['Pacifico'] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-4">
            WickWager
          </div>

          <p className="text-gray-400 text-sm mb-8 leading-relaxed font-['Inter']">
            Institutional-grade crypto trading infrastructure for everyone.
          </p>

          <div className="flex gap-3">
            <a
              href="#"
              className="w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-600 border border-white/10 hover:border-transparent rounded-xl transition-all duration-300 cursor-pointer group"
            >
              <RiTwitterXLine className="text-lg group-hover:text-white transition-colors duration-300" />
            </a>

            <a
              href="#"
              className="w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-600 border border-white/10 hover:border-transparent rounded-xl transition-all duration-300 cursor-pointer group"
            >
              <RiTelegramLine className="text-lg group-hover:text-white transition-colors duration-300" />
            </a>

            <a
              href="#"
              className="w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-600 border border-white/10 hover:border-transparent rounded-xl transition-all duration-300 cursor-pointer group"
            >
              <RiDiscordLine className="text-lg group-hover:text-white transition-colors duration-300" />
            </a>

            <a
              href="#"
              className="w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-600 border border-white/10 hover:border-transparent rounded-xl transition-all duration-300 cursor-pointer group"
            >
              <RiLinkedinLine className="text-lg group-hover:text-white transition-colors duration-300" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-bold mb-6 text-lg font-['Space_Grotesk'] tracking-wide">
            Product
          </h3>
          <ul className="space-y-4">
            {["Features", "Strategies", "Pricing", "Security"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 cursor-pointer font-['Inter'] text-sm hover:translate-x-1 inline-block"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-6 text-lg font-['Space_Grotesk'] tracking-wide">
            Company
          </h3>
          <ul className="space-y-4">
            {["About", "Blog", "Careers", "Press"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 cursor-pointer font-['Inter'] text-sm hover:translate-x-1 inline-block"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-6 text-lg font-['Space_Grotesk'] tracking-wide">
            Resources
          </h3>
          <ul className="space-y-4">
            {["Documentation", "Help Center", "Community", "API"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 cursor-pointer font-['Inter'] text-sm hover:translate-x-1 inline-block"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-6 text-lg font-['Space_Grotesk'] tracking-wide">
            Legal
          </h3>
          <ul className="space-y-4">
            {["Privacy", "Terms", "Compliance", "Licenses"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 cursor-pointer font-['Inter'] text-sm hover:translate-x-1 inline-block"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 pt-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm font-['Inter']">
            © 2024 WickWager Exchange. All rights reserved.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;
