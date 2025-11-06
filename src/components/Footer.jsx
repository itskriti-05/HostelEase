// src/components/Footer.jsx
import {
  FaTwitter,
  FaFacebookF,
  FaEllipsisH,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";


export default function Footer() {
  return (
    <footer className={`bg-[#1B3C53] text-gray-300 py-10 px-20 md:px-16`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div>
          <h2 className="text-white text-xl font-bold mb-2">HostelEase</h2>
          <p className="text-sm mb-4">
            Your all-in-one solution for a seamless and comfortable hostel
            experience.
          </p>
          <div className="flex space-x-4 text-lg">
            <a href="#" className="hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white">
              <FaEllipsisH />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                User Guides
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Support Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Community Forum
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-white" />
              <span>123 HostelLane, Student City, 12345</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaEnvelope className="text-white" />
              <span>support@hostelease.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaPhoneAlt className="text-white" />
              <span>(123) 456-7890</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-15 pt-4 text-center text-xs text-gray-400">
        © 2024 HostelEase. All rights reserved.{" "}
        <a href="#" className="hover:text-white">
          Privacy Policy
        </a>{" "}
        |{" "}
        <a href="#" className="hover:text-white">
          Terms of Service
        </a>
      </div>
    </footer>
  );
}
