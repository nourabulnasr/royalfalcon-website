import React, { useState } from "react";
import { motion } from "framer-motion";

function Hero() {
  const [activeTab, setActiveTab] = useState("tours");

  // WhatsApp function
  const openWhatsApp = (message) => {
    const phoneNumber = "+96898887053";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen px-6">
        <div className="flex-1 flex flex-col justify-center items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Royal Falcon Tourism and travel
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Experience luxury travel with our premium, comfortable and
              connected journey experiences across the globe.
            </p>
          </motion.div>

          {/* Embedded Search Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-12 w-full max-w-6xl"
          >
            <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-6 md:p-8">
              {/* Tabs */}
              <div className="flex space-x-1 mb-6">
                {[
                  { id: "tours", label: "Tours", icon: "🌍" },
                  { id: "hotels", label: "Hotels", icon: "🏢" },
                  { id: "cars", label: "Cars", icon: "🚗" },
                  { id: "cruises", label: "Cruises", icon: "🚢" },
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

              {/* Fields */}
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
                    className="w-full pl-10 pr-10 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    ▼
                  </div>
                </div>

                <button
                  onClick={() =>
                    openWhatsApp(
                      "Hi! I'm interested in searching for travel options. Please help me find the best deals and packages."
                    )
                  }
                  className="bg-gradient-to-r from-teal-500 to-green-500 text-white py-4 px-8 rounded-lg font-semibold hover:from-teal-600 hover:to-green-600 transition-all flex items-center justify-center space-x-2"
                >
                  <span>🔍</span>
                  <span>Search</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
