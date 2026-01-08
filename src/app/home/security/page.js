import React from "react";
import {
  RiSafe2Line,
  RiShieldCheckLine,
  RiUserSearchLine,
  RiLock2Line,
} from "react-icons/ri";

const SecuritySection = () => {
  return (
    <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-semibold mb-6">
            Security &amp; Compliance
          </div>

          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
              Security
            </span>{" "}
            Without Compromise
          </h2>

          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Your assets and data protected by institutional-grade security infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="flex items-start gap-6 p-8 bg-white rounded-2xl border border-gray-200 hover:border-red-400 hover:shadow-xl transition-all duration-300 cursor-pointer">
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex-shrink-0">
              <RiSafe2Line className="text-3xl text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                95% cold storage with multi-signature custody
              </h3>
              <p className="text-gray-600">
                Your assets protected with institutional-grade security
              </p>
            </div>
          </div>

          <div className="flex items-start gap-6 p-8 bg-white rounded-2xl border border-gray-200 hover:border-red-400 hover:shadow-xl transition-all duration-300 cursor-pointer">
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex-shrink-0">
              <RiShieldCheckLine className="text-3xl text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Third-party audits and continuous monitoring
              </h3>
              <p className="text-gray-600">
                Regular security assessments and real-time threat detection
              </p>
            </div>
          </div>

          <div className="flex items-start gap-6 p-8 bg-white rounded-2xl border border-gray-200 hover:border-red-400 hover:shadow-xl transition-all duration-300 cursor-pointer">
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex-shrink-0">
              <RiUserSearchLine className="text-3xl text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                AML/KYC compliance in supported jurisdictions
              </h3>
              <p className="text-gray-600">
                Regulatory compliance for your protection
              </p>
            </div>
          </div>

          <div className="flex items-start gap-6 p-8 bg-white rounded-2xl border border-gray-200 hover:border-red-400 hover:shadow-xl transition-all duration-300 cursor-pointer">
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex-shrink-0">
              <RiLock2Line className="text-3xl text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Enterprise-grade risk controls
              </h3>
              <p className="text-gray-600">
                Advanced systems to protect your trading activity
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SecuritySection;
