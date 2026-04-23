import React from 'react';
import './SectopmHeader.css';

const SectionHeader = ({ subtitle, title, description, center = true }) => {
  return (
    <div className={`section-header ${center ? 'text-center' : ''}`} data-aos="fade-up">
      {subtitle && <span className="subtitle">{subtitle}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
};

export default SectionHeader;