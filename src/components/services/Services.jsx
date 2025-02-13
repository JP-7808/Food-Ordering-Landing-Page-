import React from "react";
import "./services.css";

const services = [
  {
    id: 1,
    title: "Quick Delivery",
    description: "Get your food delivered fresh and hot in no time with our super-fast delivery service.",
    icon: "🚚", // Emoji as an icon; you can replace this with an actual image or icon from a library.
  },
  {
    id: 2,
    title: "Wide Variety",
    description: "Choose from a vast menu featuring dishes from different cuisines worldwide.",
    icon: "🍔",
  },
  {
    id: 3,
    title: "Secure Payments",
    description: "Pay easily and securely with multiple payment options available.",
    icon: "💳",
  },
  {
    id: 4,
    title: "24/7 Support",
    description: "We are here to assist you anytime, day or night, for any questions or issues.",
    icon: "📞",
  },
];

const Services = () => {
  return (
    <div className="services-container">
      <h2 className="services-heading">Our Services</h2>
      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
