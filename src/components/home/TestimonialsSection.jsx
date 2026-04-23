import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import TestimonialCard from '../common/TestimonialCard';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
  // Mock data instead of API call
  const mockTestimonials = [
    {
      id: 1,
      name: 'Ahmed Alasaly Ali',
      company: 'AG Metal Industries',
      content: 'Their commitment to quality and safety is exceptional. The team provided outstanding support and quick response during a critical situation.',
      rating: 5
    },
    {
      id: 2,
      name: 'Kevin Yao',
      company: 'Fisher Company',
      content: 'The foam-based suppression technology works flawlessly. The training was thorough and their team is always available.',
      rating: 5
    },
    {
      id: 3,
      name: 'Cignetix Systems',
      company: 'Cignetix Systems',
      content: 'Excellent customer service! The team was responsive, knowledgeable, and made the entire process stress-free.',
      rating: 5
    }
  ];

  const [testimonials] = useState(mockTestimonials);

  return (
    <section className="testimonials-section section-padding">
      <div className="container">
        <SectionHeader
          subtitle="Client Feedback"
          title="What Our Clients Say"
          description="Trusted by industry leaders worldwide"
        />
        <div className="testimonials-grid">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              {...testimonial}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;