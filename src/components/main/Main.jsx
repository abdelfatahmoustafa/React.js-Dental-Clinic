import React from 'react';
import './Main.css';
import { motion } from 'framer-motion';
import { FaTooth, FaCalendarAlt, FaFileMedical } from 'react-icons/fa';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Main() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section id="home" className="main">
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={fadeIn.transition}
        >
          <h1 className="hero-title">
            Your Smile, Our <span className="text-primary">Passion</span>
          </h1>
          <p className="hero-subtitle">
            Welcome to Dr. Suaad's Dental Care, where we combine expertise with compassion to create healthy, beautiful smiles that last a lifetime.
          </p>
          
          <div className="hero-cta">
            <AnchorLink href="#appointment" className="btn-primary">
              <FaCalendarAlt className="btn-icon" />
              Book Appointment
            </AnchorLink>
            <a 
              href="Dr-Suaad-Dental-Credentials.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-secondary"
            >
              <FaFileMedical className="btn-icon" />
              View Credentials
            </a>
          </div>

          <div className="hero-features">
            <div className="feature-card">
              <FaTooth className="feature-icon" />
              <h3>Modern Equipment</h3>
              <p>State-of-the-art dental technology</p>
            </div>
            <div className="feature-card">
              <FaCalendarAlt className="feature-icon" />
              <h3>Flexible Hours</h3>
              <p>Convenient scheduling options</p>
            </div>
            <div className="feature-card">
              <FaFileMedical className="feature-icon" />
              <h3>Expert Care</h3>
              <p>2+ years of specialized experience</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="image-container">
            <div 
              className="rounded-image placeholder-image"
              style={{
                backgroundColor: '#E8F4F6',
                width: '100%',
                height: '400px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <FaTooth style={{ fontSize: '64px', color: '#4BB6C2' }} />
            </div>
            <div className="experience-badge">
              <span className="years">2+</span>
              <span className="text">Years of Excellence</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Main;
