import React from 'react';
import './About.css';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaAward, FaHospital } from 'react-icons/fa';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  };

  return (
    <section id="about" className="about section-alt">
      <div className="container">
        <motion.div 
          className="section-header"
          {...fadeInUp}
        >
          <h2 className="section-title">About Dr. Suaad</h2>
          <p className="section-subtitle">Dedicated to Excellence in Dental Care</p>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src="/src/assets/dental/about-dentist.jpg" 
              alt="Dr. Suaad performing dental examination" 
              className="rounded-image"
            />
          </motion.div>

          <motion.div 
            className="about-text"
            {...fadeInUp}
          >
            <h3>Your Trusted Dental Care Partner</h3>
            <p>
              With over 2 years of dedicated experience in dental care, I am committed to providing 
              exceptional dental services with a gentle touch. My practice combines modern techniques 
              with compassionate care to ensure your comfort and oral health.
            </p>

            <div className="credentials">
              <div className="credential-item">
                <FaGraduationCap className="credential-icon" />
                <h4>Education</h4>
                <p>Doctor of Dental Surgery</p>
              </div>

              <div className="credential-item">
                <FaAward className="credential-icon" />
                <h4>Experience</h4>
                <p>2+ Years of Practice</p>
              </div>

              <div className="credential-item">
                <FaHospital className="credential-icon" />
                <h4>Modern Facility</h4>
                <p>State-of-the-art Clinic</p>
              </div>
            </div>

            <div className="specialties">
              <h4>Areas of Expertise</h4>
              <ul>
                <li>Preventive Dentistry</li>
                <li>Cosmetic Dentistry</li>
                <li>Restorative Care</li>
                <li>Dental Implants</li>
                <li>Orthodontics</li>
                <li>Emergency Dental Care</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
