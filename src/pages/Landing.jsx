import React, { useState, useEffect } from "react";
import "../styles/Landingstyle.css";
export default function Landing() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const cards = [
    {
      icon: "👥",
      title: "Intelligent Roommate Matching",
      text: "Our algorithm connects you with compatible roommates based on lifestyle, habits, and preferences for a harmonious living experience.",
    },
    {
      icon: "🎧",
      title: "Easy Issue Reporting",
      text: "Quickly report maintenance issues, track their status, and communicate with hostel staff through our streamlined support system.",
    },
    {
      icon: "⚙️",
      title: "Simplified Hostel Life",
      text: "Connect with roommates, manage shared responsibilities, and access hostel information for a stress-free living experience.",
    },
  ];

  const rotatingTexts = [
    "Better Hostel Life",
    "Smart Roommate Match",
    "Easy Issue Reporting",
    "Stress-Free Living",
  ];

  // Auto-rotate text every 3 seconds
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
        className="relative flex items-center justify-center h-screen bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/unnamed.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white max-w-2xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Your Portal to a <br />
            <span className="rotating-text-container">
              <span key={currentTextIndex} className="rotating-text">
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
              className="bg-white text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-100"
            >
              SignUp
            </a>
            <a
              href="/Login"
              className="bg-gray-800 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-700 border border-gray-300"
            >
              Login 
            </a>
          </div>
        </div>
      </section>
    )
  }

  const featureSection = () => {
    return (
<section
        id="features"
        className="py-20 px-6 max-w-7xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-4">
          Everything You Need for Hostel Living
        </h2>
        <p className="text-gray-600 mb-12">
          From finding compatible roommates to addressing maintenance requests,
          our platform is designed to improve your hostel life.
        </p>

        <div className="flex items-center justify-center gap-4">
          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            ◀
          </button>

          {/* Cards */}
          <div className="flex gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`bg-white shadow-md rounded-lg p-6 w-72 cursor-pointer transition-all duration-300 ${
                  activeIndex === index ? "transform scale-105 shadow-lg" : ""
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="text-3xl mb-4">{card.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.text}</p>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            ▶
          </button>
        </div>
      </section>

    )
  }
//  const headerSection = () =>{
//   return(

//   )
//  }
  return (
    <div className="flex flex-col min-h-screen font-sans bg-white">
      {/* Navbar */}
      <header className="absolute top-0 left-0 w-full z-20 bg-transparent">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="/logo.jpg"
              alt="HostelEzz Logo"
              className="h-8 w-8"
            />
            <span className="text-white font-semibold text-lg">HostelEzz</span>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex space-x-8 text-white font-medium">
            <a href="#features" className="hover:text-gray-200">
              Features
            </a>
            <a href="#testimonials" className="hover:text-gray-200">
              Testimonials
            </a>
            <a href="#contact" className="hover:text-gray-200">
              Contact
            </a>
          </nav>

          {/* Login */}
          <a
            href="/login"
            className="bg-white text-gray-900 px-4 py-2 rounded-full font-medium hover:bg-gray-100"
          >
            Log In
          </a>
        </div>
      </header>

      {heroSection()}
      {featureSection()}
      
      {/* Call to Action */}
      <section className="bg-gray-100 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready for a Better Hostel Experience?
        </h2>
        <p className="text-gray-600 mb-6">
          Join HostelEzz today and take the first step towards a better student
          living situation.
        </p>
        <a
          href="/login"
          className="bg-white border px-6 py-3 rounded-md font-medium text-gray-900 hover:bg-gray-100"
        >
          Log In
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-blue-400 border-t py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-black text-sm">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#about" className="hover:text-gray-900">
              About
            </a>
            <a href="#terms" className="hover:text-gray-900">
              Terms of Service
            </a>
            <a href="#privacy" className="hover:text-gray-900">
              Privacy Policy
            </a>
            <a href="#contact" className="hover:text-gray-900">
              Contact
            </a>
          </div>
          <p>© {new Date().getFullYear()} HostelEzz. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
