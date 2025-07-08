import React from 'react';
import './Contact.css';
import { motion } from 'framer-motion';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock } from 'react-icons/fa';

const Contact = () => {
  const mapContainerStyle = {
    width: '100%',
    height: '400px'
  };

  const center = {
    lat: 30.0444, // Cairo coordinates
    lng: 31.2357
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <motion.div 
          className="section-header"
          {...fadeInUp}
        >
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">Get in Touch with Our Dental Team</p>
        </motion.div>

        <div className="contact-container">
          <motion.div 
            className="contact-info"
            {...fadeInUp}
          >
            <div className="info-card">
              <FaMapMarkerAlt className="info-icon" />
              <h3>Visit Us</h3>
              <p>123 Dental Street, Medical District<br/>Cairo, Egypt</p>
            </div>

            <div className="info-card">
              <FaEnvelope className="info-icon" />
              <h3>Email Us</h3>
              <p>dr.suaad.dental@gmail.com</p>
            </div>

            <div className="info-card">
              <FaPhone className="info-icon" />
              <h3>Call Us</h3>
              <p>+20 10111111111</p>
            </div>

            <div className="info-card">
              <FaClock className="info-icon" />
              <h3>Opening Hours</h3>
              <ul className="hours-list">
                <li>
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 7:00 PM</span>
                </li>
                <li>
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
                <li>
                  <span>Sunday:</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-container"
            {...fadeInUp}
          >
            <form className="contact-form" onSubmit={onSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  required 
                />
              </div>

              <div className="form-group">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email" 
                  required 
                />
              </div>

              <div className="form-group">
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="Your Phone Number" 
                  required 
                />
              </div>

              <div className="form-group">
                <select name="subject" required>
                  <option value="">Select Subject</option>
                  <option value="appointment">Book Appointment</option>
                  <option value="inquiry">General Inquiry</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>

              <div className="form-group">
                <textarea 
                  name="message" 
                  placeholder="Your Message" 
                  rows="5" 
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        <motion.div 
          className="map-container"
          {...fadeInUp}
        >
          <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={15}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
