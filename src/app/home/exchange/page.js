import React from "react";
import {
  RiWaterFlashLine,
  RiFlashlightLine,
  RiToolsLine,
  RiStockLine,
  RiPriceTag3Line,
  RiServerLine
} from "react-icons/ri";

const ExchangeFeaturesSection = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-semibold mb-6">
            Key Features
          </div>

          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Enterprise-Grade{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
              Exchange Features
            </span>
          </h2>

          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Professional trading infrastructure designed for performance, reliability, and ease of use.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-cyan-400 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
              <RiWaterFlashLine className="text-3xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Deep liquidity aggregation from 50+ exchanges
            </h3>
            <p className="text-gray-600">
              Access unified order books for optimal execution
            </p>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-cyan-400 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
              <RiFlashlightLine className="text-3xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              High-speed matching engine (&lt;5ms latency)
            </h3>
            <p className="text-gray-600">
              Lightning-fast order execution
            </p>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-cyan-400 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
              <RiToolsLine className="text-3xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Built-in automation tools (no coding required)
            </h3>
            <p className="text-gray-600">
              Easy-to-use strategy deployment
            </p>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-cyan-400 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
              <RiStockLine className="text-3xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Spot, Margin, Futures (Options planned)
            </h3>
            <p className="text-gray-600">
              Comprehensive trading instruments
            </p>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-cyan-400 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
              <RiPriceTag3Line className="text-3xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Competitive, transparent fee structure
            </h3>
            <p className="text-gray-600">
              Clear pricing with no hidden costs
            </p>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-cyan-400 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
              <RiServerLine className="text-3xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Distributed infrastructure with 99.99% uptime
            </h3>
            <p className="text-gray-600">
              Enterprise-grade reliability
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExchangeFeaturesSection;
