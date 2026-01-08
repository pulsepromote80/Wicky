import React from "react";
import {
  RiExchangeFundsLine,
  RiLineChartLine,
  RiStockLine,
  RiGridLine,
  RiWaterPercentLine,
  RiUserFollowLine,
  RiRouteLine,
  RiCoinLine,
  RiInformationLine
} from "react-icons/ri";

const TradingStrategiesSection = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
            Strategy Infrastructure
          </div>

          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Diversified{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              Trading Strategies
            </span>
          </h2>

          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            WickWager Exchange integrates multiple non-correlated strategy
            frameworks that can be combined based on user risk preference and
            market conditions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              icon: <RiExchangeFundsLine className="text-2xl" />,
              title: "Multi-exchange arbitrage",
              text: "Capture price differences across platforms"
            },
            {
              icon: <RiLineChartLine className="text-2xl" />,
              title: "Market-making and spread capture",
              text: "Profit from bid-ask spreads"
            },
            {
              icon: <RiStockLine className="text-2xl" />,
              title: "Momentum and trend-based automation",
              text: "Follow market trends intelligently"
            },
            {
              icon: <RiGridLine className="text-2xl" />,
              title: "Grid trading for range-bound markets",
              text: "Systematic buy-low, sell-high execution"
            },
            {
              icon: <RiWaterPercentLine className="text-2xl" />,
              title: "Managed liquidity pools",
              text: "Optimized pool participation"
            },
            {
              icon: <RiUserFollowLine className="text-2xl" />,
              title: "Copy trading from verified professionals",
              text: "Mirror successful traders"
            },
            {
              icon: <RiRouteLine className="text-2xl" />,
              title: "Smart order routing",
              text: "Minimize slippage with intelligent routing"
            },
            {
              icon: <RiCoinLine className="text-2xl" />,
              title: "Yield and staking optimization",
              text: "Maximize returns on idle capital"
            }
          ].map((card, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl border border-gray-200 hover:border-purple-400 hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl mb-4 group-hover:from-purple-500 group-hover:to-blue-600 transition-all duration-300 text-purple-600 group-hover:text-white">
                {card.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm">{card.text}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-8 text-center">
          <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-amber-500 rounded-full">
            <RiInformationLine className="text-3xl text-white" />
          </div>
          <p className="text-gray-800 text-lg font-medium">
            These strategies aim to optimize probability and consistency, not
            guarantee outcomes. Performance varies with market conditions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TradingStrategiesSection;
