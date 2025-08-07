import React, { useState } from "react";
import { motion } from "framer-motion";

function SearchForm({ openWhatsApp }) {
  const [activeTab, setActiveTab] = useState("tours");

  return (
    <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    className="absolute left-1/2 transform -translate-x-1/2 top-full -mt-12 z-20 w-full max-w-6xl px-6"
  >
  
      <div className="max-w-5xl mx-auto">
       <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 md:p-8">
          {/* Tabs */}
          <div className="flex space-x-1 mb-6">
            {[
              { id: "tours", label: "Tours", icon: "🌍" },
              { id: "hotels", label: "Hotels", icon: "🏢" },
              { id: "cars", label: "Cars", icon: "🚗" },
              { id: "cruises", label: "Cruises", icon: "🚢" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-teal-500 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-lg">{tab.icon}</span>
                  <span>{tab.label}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Search Fields */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                📍
              </div>
              <input
                type="text"
                placeholder="Where do you want to go?"
                className="w-full pl-10 pr-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>

            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                📅
              </div>
              <input
                type="text"
                placeholder="mm/dd/yyyy"
                className="w-full pl-10 pr-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>

            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                👤
              </div>
              <input
                type="text"
                placeholder="Travelers"
                className="w-full pl-10 pr-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                ▼
              </div>
            </div>

            <button 
              onClick={() => openWhatsApp("Hi! I'm interested in searching for travel options. Please help me find the best deals and packages.")}
              className="bg-gradient-to-r from-teal-500 to-green-500 text-white py-4 px-8 rounded-lg font-semibold hover:from-teal-600 hover:to-green-600 transition-all flex items-center justify-center space-x-2"
            >
              <span>🔍</span>
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default SearchForm; 