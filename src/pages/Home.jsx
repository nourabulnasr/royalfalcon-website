import React from "react";
import Hero from "../components/Hero";
import SearchForm from "../components/SearchForm";
import TopDestinations from "../components/TopDestinations";
import TopChoices from "../components/TopChoices";
import TravelPackages from "../components/TravelPackages";
import OurServices from "../components/OurServices";
import FloatingElements from "../components/FloatingElements";
import Footer from "../components/Footer";

function Home() {
  const openWhatsApp = (message) => {
    const phoneNumber = "+96898887053";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePackageBooking = (pkg) => {
    const message = `Hi! I'm interested in booking the ${pkg.title} package.\n\nDetails:\n- Location: ${pkg.location}\n- Price: ${pkg.price}\n- Duration: ${pkg.duration}\n- Features: ${pkg.features.join(', ')}\n\nPlease provide more information about this package.`;
    openWhatsApp(message);
  };

  const handleDestinationExplore = (destination) => {
    const message = `Hi! I'm interested in exploring ${destination.name}.\n\nPlease provide information about:\n- Available tours and packages\n- Best time to visit\n- Accommodation options\n- Pricing details\n\nThank you!`;
    openWhatsApp(message);
  };

  return (
    <div className="relative">
      <Hero />
      

      <section id="tours">
        <TopChoices handleDestinationExplore={handleDestinationExplore} />
      </section>

      <section id="destinations">
        <TopDestinations handleDestinationExplore={handleDestinationExplore} />
      </section>

      <section id="hotels">
        <TravelPackages handlePackageBooking={handlePackageBooking} />
      </section>

      <section id="contact">
        <Footer openWhatsApp={openWhatsApp} />
      </section>



      <FloatingElements openWhatsApp={openWhatsApp} />
    </div>
  );
}

export default Home;