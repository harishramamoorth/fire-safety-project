import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import './ProjectCard.css';

const ProjectCard = ({ id, title, description, imageUrl, location, delay = 0 }) => {
  return (
    <div className="project-card" data-aos="fade-up" data-aos-delay={delay}>
      <div className="project-image" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="project-overlay">
          <Link to={`/projects/${id}`} className="project-link">
            Views Project <FaArrowRight />
          </Link>
        </div>
      </div>
      <div className="project-info">
        <h3>{title}</h3>
        <p><FaMapMarkerAlt /> {location}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;