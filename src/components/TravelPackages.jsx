import React from "react";
import { motion } from "framer-motion";

function TravelPackages({ handlePackageBooking }) {
  const travelPackages = [
    {
      id: 1,
      title: "Maldives Paradise",
      location: "Maldives",
      price: "$2,499",
      duration: "7 Days",
      rating: "4.9",
      reviews: "156",
      badge: "Best Seller",
      badgeColor: "bg-orange-500",
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      features: ["Water Villa", "Spa Access", "All Inclusive", "Snorkeling"]
    },
    {
      id: 2,
      title: "Rome City Explorer",
      location: "Rome, Italy",
      price: "$1,299",
      duration: "5 Days",
      rating: "4.8",
      reviews: "203",
      badge: "Popular",
      badgeColor: "bg-orange-500",
      image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1996&q=80",
      features: ["Guided Tours", "Local Cuisine", "Skip the Line", "Museums"]
    },
    {
      id: 3,
      title: "Turkey Adventure",
      location: "Istanbul, Turkey",
      price: "$899",
      duration: "6 Days",
      rating: "4.7",
      reviews: "127",
      badge: "Great Value",
      badgeColor: "bg-orange-500",
      image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
      features: ["Cultural Sites", "Turkish Bath", "Hot Air Balloon", "Bazaar Tour"]
    }
  ];

  return (
    <div
      className="relative bg-cover bg-center bg-fixed py-24 px-6"
      style={{
        backgroundImage: "url('/mountain.jpg')", // 🔁 Replace with your own image
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10 text-white">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Book Your Next Adventure
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-teal-100">
            Discover our handpicked selection of premium travel experiences
          </p>
        </motion.div>

        {/* Travel Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {travelPackages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white text-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Card Image */}
              <div className="relative h-64">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover"
                />
                {/* Badge */}
                <div className={`absolute top-4 left-4 ${pkg.badgeColor} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                  {pkg.badge}
                </div>
                {/* Rating */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                  <span className="text-yellow-500">⭐</span>
                  <span className="text-gray-800">{pkg.rating}</span>
                  <span className="text-gray-600">({pkg.reviews})</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <span className="text-sm">📍</span>
                  <span className="ml-1 text-sm">{pkg.location}</span>
                </div>

                {/* Price & Duration */}
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <span className="text-2xl font-bold text-teal-600">From {pkg.price}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-600">{pkg.duration}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <span className="text-green-500">✓</span>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Book Now */}
                <button
                  onClick={() => handlePackageBooking(pkg)}
                  className="w-full bg-gradient-to-r from-teal-500 to-green-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-teal-600 hover:to-green-600 transition-all flex items-center justify-center space-x-2"
                >
                  <span>Book Now</span>
                  <span>→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TravelPackages;
