import React from "react";
import { RiCalendarLine, RiArrowRightLine, RiCheckLine } from "react-icons/ri";

const LaunchSection = () => {
  return (
    <div className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://readdy.ai/api/search-image?query=Futuristic%20cryptocurrency%20exchange%20platform%20interface%20with%20glowing%20blue%20and%20cyan%20holographic%20displays%20showing%20trading%20charts%20and%20data%20streams%20in%20a%20sleek%20modern%20digital%20environment%20representing%20advanced%20financial%20technology%20and%20innovation%20with%20depth%20perspective%20and%20professional%20institutional%20atmosphere&width=1920&height=1080&seq=finalcta001&orientation=landscape')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Date Badge */}
        <div className="inline-flex items-center gap-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full px-6 py-3 mb-8">
          <RiCalendarLine className="text-cyan-300 text-xl" />
          <span className="text-cyan-300 font-semibold">July 1, 2026</span>
        </div>

        {/* Heading */}
        <h2 className="text-6xl md:text-7xl font-bold text-white mb-8">
          Be Ready for{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            July 1, 2026
          </span>
        </h2>

        {/* Paragraph */}
        <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
          WickWager Exchange brings years of liquidity expertise, automation
          technology, and transparent design into one unified platform. If
          you're seeking structured access to advanced crypto trading
          infrastructure—this is where it begins.
        </p>

        {/* Button */}
        <button className="group px-12 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xl font-bold rounded-full hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer">
          <span className="flex items-center gap-3">
            Join the Waitlist
            <RiArrowRightLine className="text-2xl group-hover:translate-x-2 transition-transform duration-300" />
          </span>
        </button>

        {/* Features */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-gray-400">
          <div className="flex items-center gap-2">
            <RiCheckLine className="text-cyan-400 text-xl" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <RiCheckLine className="text-cyan-400 text-xl" />
            <span>Early access benefits</span>
          </div>
          <div className="flex items-center gap-2">
            <RiCheckLine className="text-cyan-400 text-xl" />
            <span>Exclusive launch offers</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchSection;
