"use client"
import React from "react";
import { RiExchangeFundsLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#151a1d]">
      <div className="w-full px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
              <RiExchangeFundsLine className="text-white text-2xl" />
            </div>
            <span className="text-2xl font-bold text-white font-['Pacifico']">
              WickWager
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button className="px-6 py-2.5 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 whitespace-nowrap cursor-pointer font-['Space_Grotesk'] border border-transparent hover:border-cyan-400/30">
              Login
            </button>

            <button className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer font-['Space_Grotesk']">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
