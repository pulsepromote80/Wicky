import React from "react";
import {
  RiUserAddLine,
  RiShieldCheckLine,
  RiWallet3Line,
  RiRocketLine,
} from "react-icons/ri";

const GetStartedSection = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-6">
            Get Started
          </div>

          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Your Journey{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-cyan-600">
              Starts Here
            </span>
          </h2>

          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Four simple steps to access institutional-grade trading infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-12">

          <div className="relative">
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-green-500 to-cyan-600 rounded-full shadow-lg">
                  <RiUserAddLine className="text-3xl text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  1
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Join the waitlist
              </h3>
              <p className="text-gray-600 text-sm">
                Secure your spot for launch day
              </p>
            </div>
            <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-green-500 to-cyan-600"></div>
          </div>

          <div className="relative">
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-green-500 to-cyan-600 rounded-full shadow-lg">
                  <RiShieldCheckLine className="text-3xl text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  2
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Complete verification
              </h3>
              <p className="text-gray-600 text-sm">
                Quick and secure KYC process
              </p>
            </div>
            <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-green-500 to-cyan-600"></div>
          </div>

          <div className="relative">
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-green-500 to-cyan-600 rounded-full shadow-lg">
                  <RiWallet3Line className="text-3xl text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  3
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Fund your account
              </h3>
              <p className="text-gray-600 text-sm">
                Deposit crypto or fiat easily
              </p>
            </div>
            <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-green-500 to-cyan-600"></div>
          </div>

          <div className="relative">
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-green-500 to-cyan-600 rounded-full shadow-lg">
                  <RiRocketLine className="text-3xl text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  4
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Activate tools and monitor performance
              </h3>
              <p className="text-gray-600 text-sm">
                Start trading with advanced strategies
              </p>
            </div>
          </div>

        </div>

        <div className="text-center">
          <button className="px-10 py-5 bg-gradient-to-r from-green-500 to-cyan-600 text-white text-lg font-bold rounded-full hover:shadow-2xl hover:shadow-green-500/50 hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer">
            Join the Waitlist Now
          </button>
        </div>

      </div>
    </div>
  );
};

export default GetStartedSection;
