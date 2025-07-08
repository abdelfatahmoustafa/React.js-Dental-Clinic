import React from 'react';
import "./Services.css";
import { motion } from 'framer-motion';
import { 
  FaTooth, 
  FaTeeth, 
  FaUserMd,
  FaMagic,
  FaBriefcaseMedical,
  FaRegClock
} from 'react-icons/fa';

const services = [
  {
    id: 1,
    icon: <FaTeeth />,
    name: "General Dentistry",
    description: "Comprehensive dental care including cleanings, fillings, and preventive treatments to maintain your oral health.",
    features: ["Regular Check-ups", "Professional Cleaning", "Cavity Treatment", "Gum Care"]
  },
  {
    id: 2,
    icon: <FaMagic />,
    name: "Cosmetic Dentistry",
    description: "Transform your smile with our range of cosmetic procedures designed to enhance your dental aesthetics.",
    features: ["Teeth Whitening", "Veneers", "Bonding", "Smile Makeover"]
  },
  {
    id: 3,
    icon: <FaTooth />,
    name: "Restorative Care",
    description: "Restore damaged or missing teeth with advanced dental procedures and materials.",
    features: ["Dental Crowns", "Bridges", "Implants", "Root Canals"]
  },
  {
    id: 4,
    icon: <FaUserMd />,
    name: "Orthodontics",
    description: "Achieve a perfectly aligned smile with our orthodontic treatments and expert care.",
    features: ["Braces", "Clear Aligners", "Retainers", "Bite Correction"]
  },
  {
    id: 5,
    icon: <FaBriefcaseMedical />,
    name: "Emergency Care",
    description: "Quick and effective treatment for dental emergencies to relieve pain and prevent complications.",
    features: ["Same-day Appointments", "Pain Management", "Trauma Care", "Emergency Repairs"]
  },
  {
    id: 6,
    icon: <FaRegClock />,
    name: "Preventive Care",
    description: "Proactive dental care to prevent issues before they develop and maintain long-term oral health.",
    features: ["Dental Sealants", "Fluoride Treatment", "Oral Cancer Screening", "Education"]
  }
];

function Services() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true }
  };

  return (
    <section id="services" className="services section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.whileInView}
          viewport={fadeInUp.viewport}
        >
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Comprehensive Dental Care Solutions</p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="service-card"
              initial={fadeInUp.initial}
              whileInView={fadeInUp.whileInView}
              viewport={fadeInUp.viewport}
              transition={{ delay: index * 0.1 }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.name}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button className="service-button">
                Learn More
                <span className="arrow">→</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
