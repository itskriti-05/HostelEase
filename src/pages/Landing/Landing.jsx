import React, { useState, useEffect } from "react";
import { cards, rotatingTexts } from "./Constants";
import "./Landingstyle.css";
// ❌ Wrong import, removed: import { section } from "framer-motion/client";

export default function Landing() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  const heroSection = () => {
    return (
      <section
        className="relative flex items-center justify-center h-screen bg-cover bg-center -mt-18"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url('/unnamed.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white max-w-3xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Your Portal to a <br />
            <span className="inline-block uppercase text-5xl font-bold mt-4 leading-tight text-primarydark">
              <span
                key={currentTextIndex}
                className="inline-block bg-gradient-to-r from-blue-500 to-white text-transparent bg-clip-text px-3 py-1 rounded-md animate-fadeIn"
              >
                {rotatingTexts[currentTextIndex]}
              </span>
            </span>
          </h1>

          <p className="mb-6 text-lg text-gray-200">
            Connect with roommates, manage hostel life, and get support when you
            need it. Welcome to the HostelEzz community.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="/SignUp"
              className="bg-[#1d2f6d] text-white px-8 py-3 rounded-xl font-semibold shadow-lg border border-transparent 
               hover:bg-white hover:text-black hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out"
            >
              Sign Up
            </a>
            <a
              href="/Login"
              className="bg-white text-black px-8 py-3 rounded-xl font-semibold shadow-lg border border-transparent 
               hover:bg-[#1d2f6d] hover:text-white hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out"
            >
              Login
            </a>
          </div>
        </div>
      </section>
    );
  };

  const featureSection = () => {
    return (
       <section id="features" className="py-20 bg-black/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything You Need for Hostel Living</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From finding compatible roommates to addressing maintenance requests, our platform is designed to improve your hostel life.
            </p>
          </div>

          <div className="space-y-20">
            {/* Feature 1 - Image Left, Text Right */}
            <div className="grid grid-cols-2 gap-12 items-center">
              <div className="w-full">
                <div className="relative group">
                  <div className="w-full h-80 bg-gradient-to-br from-blue-800 to-blue-600 rounded-2xl shadow-2xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
                    <div className="text-center text-white p-8">
                      <div className="text-8xl mb-4">👥</div>
                      <h4 className="text-2xl font-bold mb-2">Roommate Matching</h4>
                      <p className="text-blue-100">Find Your Perfect Match</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              <div className="w-full space-y-6">
                <h3 className="text-3xl font-bold text-gray-900">Intelligent Roommate Matching</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our advanced algorithm analyzes your lifestyle preferences, study habits, and personality traits to connect you with the most compatible roommates.
                </p>
                <div className="flex space-x-4 text-sm text-gray-500">
                  <span className="flex items-center">✓ Personality Analysis</span>
                  <span className="flex items-center">✓ Smart Matching</span>
                </div>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                  Find Your Perfect Match
                </button>
              </div>
            </div>

            {/* Feature 2 - Text Left, Image Right */}
            <div className="grid grid-cols-2 gap-12 items-center">
              <div className="w-full space-y-6">
                <h3 className="text-3xl font-bold text-gray-900">Easy Issue Reporting</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Report maintenance issues, complaints, or requests instantly through our intuitive mobile interface. Track resolution progress in real-time.
                </p>
                <div className="flex space-x-4 text-sm text-gray-500">
                  <span className="flex items-center">✓ Real-time Tracking</span>
                  <span className="flex items-center">✓ Instant Notifications</span>
                </div>
                <button className="bg-gradient-to-r from-purple-800 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-900 hover:to-purple-500 transform hover:scale-105 transition-all duration-300 shadow-lg">
                  Report an Issue
                </button>
              </div>
              <div className="w-full">
                <div className="relative group">
                  <div className="w-full h-80 bg-gradient-to-br from-purple-800 to-purple-600 rounded-2xl shadow-2xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
                    <div className="text-center text-white p-8">
                      <div className="text-8xl mb-4">📱</div>
                      <h4 className="text-2xl font-bold mb-2">Issue Reporting</h4>
                      <p className="text-red-100">Quick & Easy Solutions</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-800/30 to-purple-600/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>

            {/* Feature 3 - Image Left, Text Right */}
            <div className="grid grid-cols-2 gap-12 items-center">
              <div className="w-full">
                <div className="relative group">
                  <div className="w-full h-80 bg-gradient-to-br from-gray-600 to-gray-800 rounded-2xl shadow-2xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
                    <div className="text-center text-white p-8">
                      <div className="text-8xl mb-4">🏠</div>
                      <h4 className="text-2xl font-bold mb-2">Hostel Dashboard</h4>
                      <p className="text-green-100">Manage Everything</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-gray-500/20 to-gray-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              <div className="w-full space-y-6">
                <h3 className="text-3xl font-bold text-gray-900">Simplified Hostel Life</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Access your personalized dashboard to manage everything from meal planning and study schedules to hostel announcements and community events.
                </p>
                <div className="flex space-x-4 text-sm text-gray-500">
                  <span className="flex items-center">✓ Unified Dashboard</span>
                  <span className="flex items-center">✓ Community Events</span>
                </div>
                <button className="bg-gradient-to-r from-gray-600 to-gray-800 text-white px-8 py-3 rounded-full font-semibold hover:from-gray-500 hover:to-gray-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
                  Explore Dashboard
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-white" id="hostelezz">
      {heroSection()}
      {featureSection()}
    </div>
  );
}
