import React from "react";
import {
  RiEye2Line,
  RiWaterFlashLine,
  RiEyeLine,
  RiShieldStarLine,
  RiLightbulbFlashLine,
  RiTeamLine,
} from "react-icons/ri";

const VisionPrinciples = () => {
  return (
    <section className="relative py-32 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden">

      {/* subtle gradient lines background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent"></div>
        <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent"></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section title */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-blue-600 font-bold text-sm tracking-[0.3em] uppercase font-['Space_Grotesk']">
              Vision & Principles
            </span>
            <div className="h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mt-2 rounded-full"></div>
          </div>

          <h2 className="text-6xl md:text-7xl font-bold mb-8 font-['Orbitron'] leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600">
              Building the Future
            </span>
            <br />
            <span className="text-gray-900">of Crypto Trading</span>
          </h2>
        </div>

        {/* Vision Card */}
        <div className="relative bg-gradient-to-br from-blue-600 via-cyan-600 to-purple-600 rounded-3xl p-1 mb-20 max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl p-12 md:p-16">
            <div className="flex items-center justify-center mb-8">
              <div className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl">
                <RiEye2Line className="text-5xl text-white" />
              </div>
            </div>

            <h3 className="text-4xl md:text-5xl font-bold text-center mb-6 font-['Orbitron'] text-gray-900">
              Our Vision
            </h3>

            <p className="text-2xl text-center text-gray-700 leading-relaxed font-['Inter'] font-light">
              To build the world's most liquid, transparent, and community-driven crypto exchange.
            </p>
          </div>
        </div>

        {/* Core Principles */}
        <div className="mb-12 text-center">
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-['Orbitron']">
            Core Principles
          </h3>
          <p className="text-xl text-gray-600 font-['Inter']">
            The foundation of everything we build
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="group relative bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-transparent transition-all duration-500 cursor-pointer overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0.5 bg-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-cyan-100 to-blue-100 group-hover:from-cyan-500 group-hover:to-blue-600 rounded-xl mb-6 transition-all duration-500">
                <RiWaterFlashLine className="text-3xl text-cyan-600 group-hover:text-white transition-colors duration-500" />
              </div>

              <h4 className="text-2xl font-bold text-gray-900 mb-4 font-['Space_Grotesk'] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-blue-600 transition-all duration-500">
                Liquidity-First Execution
              </h4>

              <p className="text-gray-600 leading-relaxed font-['Inter'] group-hover:text-gray-700">
                Aggregating global order books for optimal trade execution
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-transparent transition-all duration-500 cursor-pointer overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0.5 bg-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-cyan-100 to-blue-100 group-hover:from-cyan-500 group-hover:to-blue-600 rounded-xl mb-6 transition-all duration-500">
                <RiEyeLine className="text-3xl text-cyan-600 group-hover:text-white transition-colors duration-500" />
              </div>

              <h4 className="text-2xl font-bold text-gray-900 mb-4 font-['Space_Grotesk'] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-blue-600 transition-all duration-500">
                Transparency by Design
              </h4>

              <p className="text-gray-600 leading-relaxed font-['Inter'] group-hover:text-gray-700">
                Clear fees, real-time reporting, and open communication
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-transparent transition-all duration-500 cursor-pointer overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0.5 bg-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-cyan-100 to-blue-100 group-hover:from-cyan-500 group-hover:to-blue-600 rounded-xl mb-6 transition-all duration-500">
                <RiShieldStarLine className="text-3xl text-cyan-600 group-hover:text-white transition-colors duration-500" />
              </div>

              <h4 className="text-2xl font-bold text-gray-900 mb-4 font-['Space_Grotesk'] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-blue-600 transition-all duration-500">
                Security Without Compromise
              </h4>

              <p className="text-gray-600 leading-relaxed font-['Inter'] group-hover:text-gray-700">
                Institutional-grade protection for every transaction
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="group relative bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-transparent transition-all duration-500 cursor-pointer overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0.5 bg-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-cyan-100 to-blue-100 group-hover:from-cyan-500 group-hover:to-blue-600 rounded-xl mb-6 transition-all duration-500">
                <RiLightbulbFlashLine className="text-3xl text-cyan-600 group-hover:text-white transition-colors duration-500" />
              </div>

              <h4 className="text-2xl font-bold text-gray-900 mb-4 font-['Space_Grotesk'] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-blue-600 transition-all duration-500">
                Continuous Innovation
              </h4>

              <p className="text-gray-600 leading-relaxed font-['Inter'] group-hover:text-gray-700">
                Evolving technology to meet market demands
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="group relative bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-transparent transition-all duration-500 cursor-pointer overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0.5 bg-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-cyan-100 to-blue-100 group-hover:from-cyan-500 group-hover:to-blue-600 rounded-xl mb-6 transition-all duration-500">
                <RiTeamLine className="text-3xl text-cyan-600 group-hover:text-white transition-colors duration-500" />
              </div>

              <h4 className="text-2xl font-bold text-gray-900 mb-4 font-['Space_Grotesk'] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-blue-600 transition-all duration-500">
                Community Alignment
              </h4>

              <p className="text-gray-600 leading-relaxed font-['Inter'] group-hover:text-gray-700">
                Building together with our global trading network
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisionPrinciples;
