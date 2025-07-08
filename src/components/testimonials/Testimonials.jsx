import React from 'react';
import './Testimonials.css';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    image: "/src/assets/dental/patient1.jpg",
    rating: 5,
    text: "Dr. Suaad is amazing! She made my dental experience comfortable and painless. Her attention to detail and gentle approach made me feel at ease throughout my treatment.",
    treatment: "Teeth Whitening"
  },
  {
    id: 2,
    name: "Michael Chen",
    image: "/src/assets/dental/patient2.jpg",
    rating: 5,
    text: "I had severe dental anxiety before visiting Dr. Suaad's clinic. Her patience and professional care helped me overcome my fears. Now I actually look forward to my dental visits!",
    treatment: "Root Canal Treatment"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    image: "/src/assets/dental/patient3.jpg",
    rating: 5,
    text: "The entire team at Dr. Suaad's clinic is fantastic! From the front desk to the dental assistants, everyone is friendly and professional. Best dental experience ever!",
    treatment: "Dental Implants"
  }
];

const Testimonials = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true }
  };

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <motion.div 
          className="section-header"
          {...fadeInUp}
        >
          <h2 className="section-title">Patient Reviews</h2>
          <p className="section-subtitle">What Our Patients Say About Us</p>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="testimonial-card"
              initial={fadeInUp.initial}
              whileInView={fadeInUp.whileInView}
              viewport={fadeInUp.viewport}
              transition={{ delay: index * 0.1 }}
            >
              <FaQuoteLeft className="quote-icon" />
              <div className="testimonial-content">
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="star-icon" />
                  ))}
                </div>
              </div>
              <div className="testimonial-author">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="author-image"
                />
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="treatment-type">{testimonial.treatment}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="testimonial-cta"
          {...fadeInUp}
        >
          <h3>Ready to Transform Your Smile?</h3>
          <p>Join our satisfied patients and experience exceptional dental care.</p>
          <button className="cta-button">Book Your Appointment</button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 