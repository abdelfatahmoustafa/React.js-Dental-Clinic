import React from 'react';
import "./Footer.css";
import { motion } from 'framer-motion';
import { FaTooth, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Footer = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div 
            className="footer-brand"
            {...fadeIn}
          >
            <div className="brand-info">
              <FaTooth className="brand-icon" />
              <h3>Dr. Suaad Dental Care</h3>
              <p>Your trusted partner in dental health and beautiful smiles. We combine expertise with compassion to provide exceptional dental care.</p>
            </div>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="footer-links"
            {...fadeIn}
          >
            <div className="link-column">
              <h4>Quick Links</h4>
              <ul>
                <li><AnchorLink href="#home">Home</AnchorLink></li>
                <li><AnchorLink href="#about">About</AnchorLink></li>
                <li><AnchorLink href="#services">Services</AnchorLink></li>
                <li><AnchorLink href="#testimonials">Testimonials</AnchorLink></li>
                <li><AnchorLink href="#contact">Contact</AnchorLink></li>
              </ul>
            </div>

            <div className="link-column">
              <h4>Services</h4>
              <ul>
                <li>General Dentistry</li>
                <li>Cosmetic Dentistry</li>
                <li>Orthodontics</li>
                <li>Dental Implants</li>
                <li>Emergency Care</li>
              </ul>
            </div>

            <div className="link-column">
              <h4>Contact Info</h4>
              <ul>
                <li>123 Dental Street</li>
                <li>Medical District, Cairo</li>
                <li>Egypt</li>
                <li>+20 123 456 7890</li>
                <li>dr.suaad.dental@gmail.com</li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="footer-bottom"
          {...fadeIn}
        >
          <div className="footer-bottom-content">
            <p>&copy; {new Date().getFullYear()} Dr. Suaad's Dental Care. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
              <AnchorLink href="#appointment">Book Appointment</AnchorLink>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
