import React from "react";
import {
  RiExchangeLine,
  RiMoneyDollarCircleLine,
  RiBuildingLine,
  RiGlobalLine,
  RiLinksLine,
  RiRobot2Line,
  RiFileChartLine,
  RiShieldCheckLine,
  RiFocus3Line,
} from "react-icons/ri";

const AboutWickWager = () => {
  return (
    <section className="relative py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>

      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-cyan-100 to-transparent rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-tr from-blue-100 to-transparent rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-cyan-600 font-bold text-sm tracking-[0.3em] uppercase font-['Space_Grotesk']">
              About WickWager
            </span>
            <div className="h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mt-2 rounded-full"></div>
          </div>

          <h2 className="text-6xl md:text-7xl font-bold mb-8 font-['Orbitron']">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-cyan-700 to-blue-700">
              Built on Liquidity.
            </span>
            <br />
            <span className="text-gray-900">Designed for Performance.</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-['Inter']">
            Founded in 2018, WickWager was created to solve crypto's liquidity fragmentation problem. By aggregating order books across dozens of exchanges, WickWager enabled tighter spreads, reduced slippage, and scalable execution for professional market participants.
          </p>
        </div>

        {/* Image + Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">

          {/* Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>

            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://readdy.ai/api/search-image?query=A%20sophisticated%20modern%20cryptocurrency%20trading%20platform%20interface%20displaying%20multiple%20exchange%20connections%20with%20flowing%20data%20streams%20and%20liquidity%20pools%20represented%20by%20interconnected%20nodes%20and%20pathways%20in%20a%20clean%20professional%20design%20with%20cyan%20and%20blue%20accent%20colors%20against%20a%20dark%20elegant%20background%20showcasing%20institutional%20grade%20technology%20and%20advanced%20financial%20infrastructure&width=800&height=600&seq=about001&orientation=landscape"
                alt="WickWager Platform"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>

          {/* Text List */}
          <div>
            <h3 className="text-4xl font-bold text-gray-900 mb-6 font-['Orbitron']">
              What Sets Us Apart
            </h3>

            <p className="text-lg text-gray-600 mb-10 leading-relaxed font-['Inter']">
              WickWager Exchange extends this foundation to individual traders—combining execution infrastructure with automation, analytics, and community participation.
            </p>

            <div className="space-y-6">

              <div className="group flex items-start gap-5 p-6 bg-white rounded-2xl border-2 border-gray-100 hover:border-cyan-400 hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <RiLinksLine className="text-2xl text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2 font-['Space_Grotesk']">
                    Aggregated Liquidity
                  </h4>
                  <p className="text-gray-600 font-['Inter']">
                    50+ exchanges connected for optimal execution
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-5 p-6 bg-white rounded-2xl border-2 border-gray-100 hover:border-cyan-400 hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <RiRobot2Line className="text-2xl text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2 font-['Space_Grotesk']">
                    AI-Assisted Execution
                  </h4>
                  <p className="text-gray-600 font-['Inter']">
                    Smart automation and strategy optimization
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-5 p-6 bg-white rounded-2xl border-2 border-gray-100 hover:border-cyan-400 hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <RiFileChartLine className="text-2xl text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2 font-['Space_Grotesk']">
                    Transparent Reporting
                  </h4>
                  <p className="text-gray-600 font-['Inter']">
                    Real-time analytics and fee disclosure
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-5 p-6 bg-white rounded-2xl border-2 border-gray-100 hover:border-cyan-400 hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <RiShieldCheckLine className="text-2xl text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2 font-['Space_Grotesk']">
                    Institutional Security
                  </h4>
                  <p className="text-gray-600 font-['Inter']">
                    Enterprise-grade protection and compliance
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 rounded-3xl p-12 md:p-16 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/30 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/30 to-transparent rounded-full blur-3xl"></div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl mx-auto mb-8">
              <RiFocus3Line className="text-4xl text-white" />
            </div>

            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Orbitron']">
              Our Mission
            </h3>

            <p className="text-2xl text-cyan-100 leading-relaxed font-['Inter'] font-light">
              Unify global crypto liquidity and make professional-grade trading infrastructure accessible to everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWickWager;
