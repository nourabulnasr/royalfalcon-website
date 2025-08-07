import React from "react";
import { motion } from "framer-motion";

function TopDestinations({ handleDestinationExplore,id }) {
  const topDestinations = [
    {
      id: 1,
      name: "Paris",
      places: "990 places",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 2,
      name: "London",
      places: "850 places",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 3,
      name: "New York",
      places: "1,200 places",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 4,
      name: "Sydney",
      places: "720 places",
      image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  return (
    
    <div
      className="relative bg-cover bg-center bg-fixed py-24 px-6"
      style={{
        backgroundImage: "url('/cliff.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      {/* Content Wrapper */}
      <div className="relative max-w-7xl mx-auto z-10 text-white">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="text-sm text-teal-200 mb-2">Top Destinations</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Explore Our Best Destinations
          </h2>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto">
            From tropical paradises to cultural capitals, discover amazing places around the world.
          </p>
        </motion.div>

        {/* Destination Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topDestinations.map((destination, index) => (
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
                
                {/* Content */}
                <div className="absolute bottom-4 left-4 text-white transform group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-2xl transition-all duration-300">{destination.name}</h3>
                  <p className="text-sm opacity-90 group-hover:opacity-100 transition-opacity duration-300">{destination.places}</p>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-teal-500/0 group-hover:bg-teal-500/20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <div className="bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full text-sm font-medium">
                      Click to Explore
                    </div>
                  </div>
                </div>

                {/* Special Explore Button for New York */}
                {destination.name === "New York" && (
                  <div className="absolute top-4 right-4">
                    <button className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-white hover:shadow-lg transition-all duration-200">
                      Explore
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopDestinations;
