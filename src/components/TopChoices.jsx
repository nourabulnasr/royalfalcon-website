import React from "react";
import { motion } from "framer-motion";

function TopChoices({id, handleDestinationExplore }) {
  const topChoices = [
    {
      id: 1,
      name: "Dubai",
      places: "1,150 places",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      badge: "Popular"
    },
    {
      id: 2,
      name: "Tokyo",
      places: "890 places",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      badge: "Trending"
    },
    {
      id: 3,
      name: "Barcelona",
      places: "650 places",
      image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      badge: "Best Value"
    },
    {
      id: 4,
      name: "Singapore",
      places: "780 places",
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      badge: "Luxury"
    }
  ];

  return (
    <div
      className="relative bg-cover bg-center bg-fixed py-24 px-6"
      style={{
        backgroundImage: "url('/road.jpg')", 
      }}
    >




      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0"></div>

      <div className="relative max-w-7xl mx-auto z-10 text-white">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="text-sm text-orange-200 mb-2">Top Choices</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Most Popular Destinations
          </h2>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto">
            Discover the most sought-after destinations that travelers love to visit.
          </p>
        </motion.div>

        {/* Destination Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topChoices.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative group cursor-pointer"
              onClick={() => handleDestinationExplore(destination)}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/80 group-hover:via-black/40 transition-all duration-300"></div>

                {/* Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {destination.badge}
                </div>

                {/* Content */}
                <div className="absolute bottom-4 left-4 text-white transform group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-2xl transition-all duration-300">{destination.name}</h3>
                  <p className="text-sm opacity-90 group-hover:opacity-100 transition-opacity duration-300">{destination.places}</p>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <div className="bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full text-sm font-medium">
                      View Details
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopChoices;
