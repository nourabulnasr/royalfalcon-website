import React, { useState } from "react";
import { motion } from "framer-motion";

function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert("Thank you for subscribing to our newsletter!");
      setEmail("");
    }
  };

  return (
    <footer className="bg-gray-900 text-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Royal Falcon Tours</h3>
            <p className="text-gray-300 mb-4">
              Your trusted partner for unforgettable travel experiences around the world.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 text-gray-300">
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter text-xl hover:text-white"></i>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61577781609666&sk=about" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook-f text-xl hover:text-white"></i>
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noreferrer">
                <i className="fab fa-pinterest-p text-xl hover:text-white"></i>
              </a>
              <a href="https://www.instagram.com/royalfalconom/" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram text-xl hover:text-white"></i>
              </a>
              <a href="https://www.youtube.com/@ROYELFALCONETRAVEL" target="_blank" rel="noreferrer">
                <i className="fab fa-youtube text-xl hover:text-white"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Destinations</a></li>
              <li><a href="#" className="hover:text-white">Travel Packages</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <p className="text-sm text-gray-300 space-y-2">
              📍 Royal Falcon HQ, Oman <br />
              📞 +968 9888 7053 <br />
              📧 Email us at: <a href="mailto:infome1900@gmail.com" className="underline hover:text-teal-400">infome1900@gmail.com</a>
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4 text-sm">
              Subscribe to get special offers and updates.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2024 Royal Falcon Tours. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
