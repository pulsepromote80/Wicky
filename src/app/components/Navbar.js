"use client"
import React, { useState } from "react";
import Image from "next/image";
import {  RiMenu4Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#151a1d]/95 backdrop-blur-md border-b border-white/5">
        <div className="w-full px-4 sm:px-6 py-3 sm:py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer group">
              <Image src="/wickwager-logo-light.png" width={150} height={40} alt="WickWager Logo" />
            </div>


            {/* Desktop Auth Buttons - Hidden on mobile */}
            <div className="hidden sm:flex items-center gap-3">
              <button className="px-5 py-2 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 whitespace-nowrap cursor-pointer font-['Space_Grotesk'] text-sm border border-transparent hover:border-cyan-400/30">
                Login
              </button>
              <button className="px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer font-['Space_Grotesk'] text-sm">
                Sign Up
              </button>
            </div>

            {/* Mobile Menu Button - Hidden on desktop */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-all duration-300 cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <RiCloseLine className="text-2xl" />
              ) : (
                <RiMenu4Line className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {/* Backdrop blur overlay */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in" />
          
          {/* Mobile Menu Drawer */}
          <div className="absolute top-0 right-0 w-full max-w-sm h-full bg-[#151a1d] border-l border-white/10 shadow-2xl transform transition-transform duration-300 animate-slide-in-right">
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                <span className="text-xl font-bold text-white font-['Pacifico']">
                  WickWager
                </span>
                <button
                  onClick={toggleMobileMenu}
                  className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 cursor-pointer"
                  aria-label="Close menu"
                >
                  <RiCloseLine className="text-2xl" />
                </button>
              </div>

  

              {/* Mobile Auth Buttons */}
              <div className="px-4 py-6 border-t border-white/10 space-y-3">
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full px-6 py-3 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 cursor-pointer font-['Space_Grotesk'] border border-transparent hover:border-cyan-400/30"
                >
                  Login
                </button>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 cursor-pointer font-['Space_Grotesk']"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-in-right {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        
        @keyframes slide-in-up {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.3s ease-out;
        }
        
        .animate-slide-in-up {
          animation: slide-in-up 0.4s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </>
  );
};

export default Navbar;

