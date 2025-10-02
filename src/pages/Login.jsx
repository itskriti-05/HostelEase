import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // Simple placeholder validation
    if (!data.email || !data.password) {
      setError("Please fill in all fields");
      return;
    }

    // TODO: Replace with backend API call
    if (data.email === "admin@example.com" && data.password === "admin123") {
      alert("Login successful!");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(/placeholder.svg?height=1080&width=1920&query=modern+hostel+room+interior)",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center px-4 py-12 md:py-20">
        <div className="w-full max-w-md">
          {/* Login Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Log In</h1>
              <p className="text-gray-600">Welcome back to HostelEzz</p>
            </div>

            {error && (
              <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2B4FD9] focus:border-transparent transition"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2B4FD9] focus:border-transparent transition"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#2B4FD9] text-white font-semibold rounded-xl hover:bg-[#2340b8] transition shadow-lg shadow-blue-500/30"
              >
                Log In
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Don’t have an account?{" "}
                <Link
                  to="/signup"
                  className="text-[#2B4FD9] font-semibold hover:underline"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <p className="text-center text-white/80 text-sm mt-6">
            Secure login to access your hostel dashboard
          </p>
        </div>
      </div>
    </div>
  );
}
