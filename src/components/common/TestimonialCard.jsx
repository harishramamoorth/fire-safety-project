import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import './TestimonialCard.css';

const TestimonialCard = ({ name, company, content, rating, delay = 0 }) => {
  return (
    <div className="testimonial-card" data-aos="fade-up" data-aos-delay={delay}>
      <FaQuoteLeft className="quote-icon" />
      <p className="testimonial-content">{content}</p>
      <div className="testimonial-rating">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className={i < rating ? 'star filled' : 'star'} />
        ))}
      </div>
      <div className="testimonial-author">
        <h4>{name}</h4>
        <span>{company}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;