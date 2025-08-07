import React from "react";
import { motion } from "framer-motion";

function FloatingElements({ openWhatsApp }) {
  return (
    <>
      {/* Floating Side Elements */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-20 space-y-4">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors"
        >
          <span className="text-white text-lg">📚</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors"
        >
          <span className="text-white text-lg">🎧</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors"
        >
          <span className="text-white text-lg">⚙️</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors"
        >
          <span className="text-white text-lg">💬</span>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-purple-500 rounded-full"></div>
        </motion.div>
      </div>

      {/* Floating Contact Button */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="fixed bottom-6 right-6 z-20"
      >
        <button 
          onClick={() => openWhatsApp("Hi! I'd like to get more information about your travel services and packages.")}
          className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
        >
          <span className="text-white text-2xl">📞</span>
        </button>
      </motion.div>
    </>
  );
}

export default FloatingElements; 