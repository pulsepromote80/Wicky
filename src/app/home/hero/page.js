import React from "react";
import { RiArrowRightLine } from "react-icons/ri";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">

      {/* Background Image + overlays */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url(https://readdy.ai/api/search-image?query=A%20futuristic%20digital%20financial%20trading%20floor%20with%20holographic%20cryptocurrency%20charts%20and%20data%20streams%20flowing%20through%20a%20sleek%20modern%20environment%20featuring%20deep%20blue%20and%20cyan%20neon%20lights%20against%20dark%20backgrounds%20with%20abstract%20network%20connections%20and%20geometric%20patterns%20representing%20global%20liquidity%20and%20advanced%20technology%20infrastructure%20creating%20a%20professional%20institutional%20atmosphere&width=1920&height=1080&seq=hero001&orientation=landscape)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-950/40 to-cyan-950/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.15),transparent_50%)]"></div>
      </div>

      {/* floating glow blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-4xl">

          {/* badge */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/40 rounded-full px-6 py-3 mb-10 backdrop-blur-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-400"></span>
            </span>
            <span className="text-cyan-300 text-sm font-semibold tracking-wide font-['Space_Grotesk']">
              LAUNCHING JULY 1, 2026
            </span>
          </div>

          {/* heading */}
          <h1 className="text-7xl md:text-8xl font-bold text-white mb-8 leading-[1.1] font-['Orbitron']">
            The Next Era of{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
                Crypto Trading
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 blur-sm"></div>
            </span>{" "}
            Begins Here
          </h1>

          {/* subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed font-['Inter'] font-light">
            From powering liquidity across{" "}
            <span className="text-cyan-400 font-semibold">50+ global exchanges</span> to launching a next-generation trading platform—WickWager Exchange goes live July 1, 2026, giving traders access to{" "}
            <span className="text-cyan-400 font-semibold">institutional-grade tools</span> designed to target 2–5% daily performance ranges under disciplined risk management.
          </p>

          {/* glass card */}
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl p-10 mb-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <p className="text-gray-200 leading-relaxed mb-6 font-['Inter'] text-lg">
                For years, WickWager has operated behind the scenes as a high-performance crypto liquidity provider, supporting exchanges, funds, and protocols worldwide. With over{" "}
                <span className="text-cyan-400 font-bold">$500B+ in cumulative trading volume</span> and{" "}
                <span className="text-cyan-400 font-bold">99.99% infrastructure uptime</span>, WickWager now brings its execution technology directly to traders.
              </p>

              <p className="text-gray-200 leading-relaxed font-['Inter'] text-lg">
                WickWager Exchange combines multi-exchange liquidity aggregation, AI-assisted automation, and a community-aligned reward model—allowing traders to deploy structured strategies traditionally reserved for institutions.
              </p>
            </div>
          </div>

          {/* buttons */}
          <div className="flex flex-wrap gap-5">
            <button className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 whitespace-nowrap cursor-pointer font-['Space_Grotesk'] text-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center gap-3">
                Join the Waitlist
                <RiArrowRightLine className="text-xl group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>

            <button className="px-10 py-5 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-300 whitespace-nowrap cursor-pointer font-['Space_Grotesk'] text-lg">
              Explore Automated Strategies
            </button>
          </div>

          {/* stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              ["50+", "Exchanges Connected"],
              ["$500B+", "Trading Volume"],
              ["99.99%", "Uptime"],
              ["Global", "Community"],
            ].map(([value, label]) => (
              <div key={value} className="text-center group cursor-pointer">
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-500 mb-2 font-['Orbitron'] group-hover:scale-110 transition-transform duration-300">
                  {value}
                </div>
                <div className="text-gray-400 text-sm font-['Inter'] tracking-wide">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* bottom white fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/50 to-transparent z-10"></div>
    </div>
  );
};

export default HeroSection;
