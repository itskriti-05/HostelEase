import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className="w-full z-20 sticky top-0 left-0 bg-black/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.jpg" alt="HostelEzz Logo" className="h-8 w-8" />
          <span className="text-white font-semibold text-lg">
            <a href="/#hostelezz">HostelEzz</a>
          </span>
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

        {/* Conditional Login/Sign Up */}
        {currentPath === "/login" && (
          <Link
            to="/signup"
            className="bg-white text-gray-900 px-4 py-2 rounded-full font-medium hover:bg-gray-100"
          >
            Sign Up
          </Link>
        )}
        {currentPath === "/signup" && (
          <Link
            to="/login"
            className="bg-white text-gray-900 px-4 py-2 rounded-full font-medium hover:bg-gray-100"
          >
            Log In
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
