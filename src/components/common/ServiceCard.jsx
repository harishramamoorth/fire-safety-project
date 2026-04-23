import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './ServiceCard.css';

const ServiceCard = ({ icon, title, description, link, delay = 0 }) => {
  return (
    <div className="service-card" data-aos="fade-up" data-aos-delay={delay}>
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={link} className="read-more">
        Learn More <FaArrowRight />
      </Link>
    </div>
  );
};

export default ServiceCard;