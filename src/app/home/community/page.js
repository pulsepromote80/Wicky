import React from "react";
import {
  RiBookOpenLine,
  RiBarChartBoxLine,
  RiUserStarLine,
  RiTrophyLine,
} from "react-icons/ri";

const CommunitySection = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-6">
            Community &amp; Education
          </div>

          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Join a Global{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Trading Network
            </span>
          </h2>

          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Whether beginner or professional, traders gain access to tools, data, and shared expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">

          <div className="flex items-start gap-6 p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 hover:border-indigo-400 hover:shadow-xl transition-all duration-300 cursor-pointer group">
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
              <RiBookOpenLine className="text-3xl text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Educational resources and live sessions
              </h3>
              <p className="text-gray-600">
                Learn from experts and grow your skills
              </p>
            </div>
          </div>

          <div className="flex items-start gap-6 p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 hover:border-indigo-400 hover:shadow-xl transition-all duration-300 cursor-pointer group">
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
              <RiBarChartBoxLine className="text-3xl text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Strategy analytics and leaderboards
              </h3>
              <p className="text-gray-600">
                Track performance and compete
              </p>
            </div>
          </div>

          <div className="flex items-start gap-6 p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 hover:border-indigo-400 hover:shadow-xl transition-all duration-300 cursor-pointer group">
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
              <RiUserStarLine className="text-3xl text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Ambassador and referral programs
              </h3>
              <p className="text-gray-600">
                Earn rewards for growing the community
              </p>
            </div>
          </div>

          <div className="flex items-start gap-6 p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 hover:border-indigo-400 hover:shadow-xl transition-all duration-300 cursor-pointer group">
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
              <RiTrophyLine className="text-3xl text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Trading challenges and competitions
              </h3>
              <p className="text-gray-600">
                Test your skills and win prizes
              </p>
            </div>
          </div>

        </div>

        <div className="relative rounded-3xl overflow-hidden">
          <img
            src="https://readdy.ai/api/search-image?query=Diverse%20group%20of%20professional%20traders%20and%20investors%20collaborating%20in%20a%20modern%20bright%20workspace%20with%20laptops%20and%20digital%20screens%20showing%20cryptocurrency%20charts%20representing%20global%20community%20education%20and%20teamwork%20in%20a%20clean%20contemporary%20office%20environment%20with%20natural%20lighting%20and%20professional%20atmosphere&amp;width=1400&amp;height=600&amp;seq=community001&amp;orientation=landscape"
            alt="Community"
            className="w-full h-96 object-cover object-top"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-12">
              <h3 className="text-3xl font-bold text-white mb-3">
                Building Together
              </h3>
              <p className="text-xl text-gray-200">
                A community of traders, learners, and innovators
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CommunitySection;
