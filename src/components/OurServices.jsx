import React from "react";
import { motion } from "framer-motion";

function OurServices({ openWhatsApp }) {
  const services = [
    {
      id: 1,
      title: "Group Booking",
      description: "Exclusive group rates for 10+ travelers with personalized itineraries",
      icon: "👥"
    },
    {
      id: 2,
      title: "Car Rental",
      description: "Premium vehicle selection with 24/7 roadside assistance",
      icon: "🚗"
    },
    {
      id: 3,
      title: "Travel Insurance",
      description: "Comprehensive coverage for medical, trip cancellation, and emergencies",
      icon: "🛡️"
    },
    {
      id: 4,
      title: "Travel Guidance",
      description: "Expert consultation and real-time support throughout your journey",
      icon: "🧭"
    }
  ];

  const handleServiceInquiry = (service) => {
    const message = `Hi! I'm interested in your ${service.title} service.\n\nPlease provide information about:\n- Available options and packages\n- Pricing details\n- Terms and conditions\n- How to book\n\nThank you!`;
    openWhatsApp(message);
  };

  return (
    <div className="relative z-10 bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium mb-4">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Why Choose Royal Falcon?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive travel services with professional expertise and 24/7 support
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              onClick={() => handleServiceInquiry(service)}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-green-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl text-white group-hover:rotate-12 transition-transform duration-300">{service.icon}</span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-teal-600 transition-colors duration-200">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-200">{service.description}</p>
              
              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 to-green-500/0 group-hover:from-teal-500/5 group-hover:to-green-500/5 transition-all duration-300 rounded-2xl"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurServices;