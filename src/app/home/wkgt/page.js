import React from "react";
import {
  RiDiscountPercentLine,
  RiCoinLine,
  RiGovernmentLine,
  RiGiftLine
} from "react-icons/ri";

const WKGTokenSection = () => {
  return (
    <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <div className="inline-block px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold mb-6">
              WKG Token
            </div>

            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600">
                WickWager Token
              </span>{" "}
              Ecosystem
            </h2>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              WickWager Token (WKG) aligns users with platform utility and
              participation. WKG is designed for ecosystem participation—not
              speculation.
            </p>

            <div className="space-y-4">

              <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-200 hover:border-yellow-400 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl flex-shrink-0">
                  <RiDiscountPercentLine className="text-2xl text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    Trading fee discounts
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Reduce costs with WKG holdings
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-200 hover:border-yellow-400 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl flex-shrink-0">
                  <RiCoinLine className="text-2xl text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    Staking rewards
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Earn rewards tied to platform activity
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-200 hover:border-yellow-400 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl flex-shrink-0">
                  <RiGovernmentLine className="text-2xl text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    Governance participation
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Vote on platform decisions
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-200 hover:border-yellow-400 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl flex-shrink-0">
                  <RiGiftLine className="text-2xl text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    Incentives & loyalty programs
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Exclusive benefits and rewards
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <img
              src="https://readdy.ai/api/search-image?query=Golden%20cryptocurrency%20token%20coin%20floating%20in%20a%20futuristic%20digital%20ecosystem%20with%20holographic%20network%20connections%20and%20glowing%20particles%20representing%20blockchain%20technology%20and%20decentralized%20finance%20with%20warm%20golden%20and%20orange%20lighting%20against%20a%20clean%20modern%20background%20showing%20utility%20and%20value%20in%20professional%20institutional%20style&width=800&height=900&seq=token001&orientation=portrait"
              alt="WKG Token"
              className="rounded-3xl shadow-2xl w-full h-auto object-cover object-top"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default WKGTokenSection;
