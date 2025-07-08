import React, { useState } from 'react';
import './Appointment.css';
import { motion } from 'framer-motion';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt, FaClock, FaUser, FaPhone, FaEnvelope, FaCommentMedical } from 'react-icons/fa';

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    notes: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log({ ...formData, appointmentDate: selectedDate });
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      notes: ''
    });
    setSelectedDate(null);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true }
  };

  return (
    <section id="appointment" className="appointment section">
      <div className="container">
        <motion.div 
          className="section-header"
          {...fadeInUp}
        >
          <h2 className="section-title">Book an Appointment</h2>
          <p className="section-subtitle">Schedule Your Visit with Dr. Suaad</p>
        </motion.div>

        <div className="appointment-container">
          <motion.div 
            className="appointment-info"
            {...fadeInUp}
          >
            <h3>Why Choose Us?</h3>
            <ul className="benefits-list">
              <li>
                <FaClock className="benefit-icon" />
                <div>
                  <h4>Flexible Scheduling</h4>
                  <p>Choose from various available time slots</p>
                </div>
              </li>
              <li>
                <FaUser className="benefit-icon" />
                <div>
                  <h4>Personal Care</h4>
                  <p>Individualized treatment plans</p>
                </div>
              </li>
              <li>
                <FaCommentMedical className="benefit-icon" />
                <div>
                  <h4>Free Consultation</h4>
                  <p>Discuss your dental concerns</p>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.form 
            className="appointment-form"
            onSubmit={handleSubmit}
            {...fadeInUp}
          >
            <div className="form-group">
              <label>
                <FaUser className="input-icon" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </label>
            </div>

            <div className="form-group">
              <label>
                <FaPhone className="input-icon" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </label>
            </div>

            <div className="form-group">
              <label>
                <FaEnvelope className="input-icon" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </label>
            </div>

            <div className="form-group">
              <label>
                <FaCalendarAlt className="input-icon" />
                <DatePicker
                  selected={selectedDate}
                  onChange={date => setSelectedDate(date)}
                  placeholderText="Select Date"
                  minDate={new Date()}
                  required
                  className="date-picker"
                />
              </label>
            </div>

            <div className="form-group">
              <label>
                <FaCommentMedical className="input-icon" />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Service</option>
                  <option value="general">General Check-up</option>
                  <option value="cleaning">Teeth Cleaning</option>
                  <option value="whitening">Teeth Whitening</option>
                  <option value="implants">Dental Implants</option>
                  <option value="orthodontics">Orthodontics</option>
                  <option value="emergency">Emergency Care</option>
                </select>
              </label>
            </div>

            <div className="form-group">
              <textarea
                name="notes"
                placeholder="Additional Notes"
                value={formData.notes}
                onChange={handleInputChange}
                rows="4"
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Schedule Appointment
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Appointment; 