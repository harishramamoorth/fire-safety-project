import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../common/SectionHeader';
import ProjectCard from '../common/ProjectCard';
import './ProjectsSection.css';

const ProjectsSection = () => {
  // Mock data instead of API call
  const mockProjects = [
    {
      id: 1,
      title: 'Louvre Abu Dhabi',
      description: 'Complete fire protection systems including pumps, sprinklers, and wet riser systems.',
      imageUrl: 'https://images.unsplash.com/photo-1566378246598-5b11a0d486cc?w=600',
      location: 'Abu Dhabi, UAE'
    },
    {
      id: 2,
      title: 'Museum of the Future',
      description: 'Advanced fire detection and suppression systems for Dubai\'s iconic landmark.',
      imageUrl: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=600',
      location: 'Dubai, UAE'
    },
    {
      id: 3,
      title: 'Zayed University',
      description: 'Comprehensive safety systems for 200,000 sqm educational facility.',
      imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600',
      location: 'Dubai, UAE'
    }
  ];

  const [projects] = useState(mockProjects);
  const [loading] = useState(false);

  if (loading) return <div>Loading...</div>;

  return (
    <section className="projects-section section-padding">
      <div className="container">
        <SectionHeader
          subtitle="Our Work"
          title="Prestigious Projects"
          description="Trusted by iconic landmarks and industry leaders worldwide"
        />
        <div className="projects-grid">
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard
              key={project.id}
              {...project}
              delay={index * 100}
            />
          ))}
        </div>
        <div className="text-center">
          <Link to="/projects" className="btn btn-outline-secondary">View All Projects</Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;