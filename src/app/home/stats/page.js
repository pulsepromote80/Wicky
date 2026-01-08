import React from "react";
import {
  RiExchangeLine,
  RiMoneyDollarCircleLine,
  RiBuildingLine,
  RiGlobalLine,
} from "react-icons/ri";

const StatsSection = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          
          <div className="text-center">
            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-lg">
              <RiExchangeLine className="text-3xl text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">50+ Exchanges</div>
            <div className="text-gray-600">Connected</div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-lg">
              <RiMoneyDollarCircleLine className="text-3xl text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">$500B+</div>
            <div className="text-gray-600">Volume</div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-lg">
              <RiBuildingLine className="text-3xl text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">Institutional</div>
            <div className="text-gray-600">Infrastructure</div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-lg">
              <RiGlobalLine className="text-3xl text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">Global</div>
            <div className="text-gray-600">Community</div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default StatsSection;
