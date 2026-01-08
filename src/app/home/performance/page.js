import React from "react";
import {
  RiLineChartLine,
  RiShieldCheckLine,
  RiBarChartGroupedLine,
  RiAlertLine
} from "react-icons/ri";

const PerformanceTargetingSection = () => {
  return (
    <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* IMAGE SECTION */}
          <div className="relative">
            <img
              src="https://readdy.ai/api/search-image?query=Professional%20financial%20performance%20dashboard%20showing%20upward%20trending%20cryptocurrency%20charts%20with%20green%20growth%20indicators%20and%20analytical%20data%20visualizations%20on%20modern%20digital%20screens%20in%20a%20clean%20minimalist%20style%20with%20blue%20and%20green%20accent%20colors%20representing%20consistent%20returns%20and%20risk%20management%20in%20institutional%20trading%20environment&width=800&height=900&seq=perf001&orientation=portrait"
              alt="Performance Analytics"
              className="rounded-3xl shadow-2xl w-full h-auto object-cover object-top"
            />
          </div>

          {/* TEXT SECTION */}
          <div>
            <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-6">
              Performance Targeting
            </div>

            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Designed for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-cyan-600">
                Consistent Returns
              </span>
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              WickWager strategies are designed to target combined daily
              performance ranges of approximately 2–5% under favorable market
              conditions by stacking diversified approaches.
            </p>

            {/* FEATURES LIST */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                <div className="w-10 h-10 flex items-center justify-center bg-green-100 rounded-lg flex-shrink-0">
                  <RiLineChartLine className="text-xl text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    Probability-Optimized
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Strategies focus on consistency over aggressive exposure
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-lg flex-shrink-0">
                  <RiShieldCheckLine className="text-xl text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    Risk Controls Built-In
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Capital preservation prioritized in all strategies
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                <div className="w-10 h-10 flex items-center justify-center bg-purple-100 rounded-lg flex-shrink-0">
                  <RiBarChartGroupedLine className="text-xl text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    Variable Performance
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Some days exceed expectations; others may be flat or negative
                  </p>
                </div>
              </div>
            </div>

            {/* RISK NOTICE */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <RiAlertLine className="text-2xl text-red-600 flex-shrink-0 mt-1" />
                <p className="text-gray-800 font-medium">
                  Losses are possible. Risk controls are built to prioritize capital
                  preservation over aggressive exposure.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PerformanceTargetingSection;
