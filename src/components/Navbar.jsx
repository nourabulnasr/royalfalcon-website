import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white/90 backdrop-blur-sm shadow-sm p-6 flex justify-between items-center"
    >
      {/* Logo and Company Name */}
      <div className="flex items-center space-x-3">
        <img
          src="/logo.png"
          alt="Royal Falcon Logo"
          className="w-14 h-14 object-contain"
        />
        <div>
          <h1 className="text-xl font-bold text-gray-800">Royal Falcon Tours</h1>
          <p className="text-sm text-gray-600">Travel Agency</p>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-8">
        <Link to="/" className="text-gray-800 hover:text-teal-600 font-medium">Home</Link>
        <a href="#tours" className="text-gray-800 hover:text-teal-600 font-medium">Tours</a>
        <a href="#destinations" className="text-gray-800 hover:text-teal-600 font-medium">Destinations</a>
        <a href="#hotels" className="text-gray-800 hover:text-teal-600 font-medium">Hotels</a>
        <a href="#contact" className="text-gray-800 hover:text-teal-600 font-medium">Contact Us</a>
      </div>

      {/* WhatsApp Contact Button */}
      <a
        href="https://wa.me/96898887053"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white border border-teal-500 text-teal-600 px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-teal-50 transition-colors"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
        <span className="text-sm font-medium">
          +968 9888 7053
        </span>
      </a>
    </motion.nav>
  );
}

export default Navbar;
