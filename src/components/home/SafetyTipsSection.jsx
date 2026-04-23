import React from 'react';
import { FaFireExtinguisher, FaBuilding, FaTemperatureLow, FaBell, FaClipboardList } from 'react-icons/fa';
import './SafetyTipsSection.css';

const SafetyTipsSection = () => {
  return (
    <section className="safety-tips section-padding">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="subtitle">Fire Safety Tips</span>
          <h2>Protect What Matters Most</h2>
          <p>Simple yet vital practices to prevent fire hazards and safeguard lives</p>
        </div>

        <div className="tips-grid">
          {/* Tip 1: Separation of materials */}
          <div className="tip-card" data-aos="fade-up" data-aos-delay="0">
            <div className="tip-icon">
              <FaBuilding />
            </div>
            <h3>Keep Flammables Away</h3>
            <p>
              Separate light materials (paper, cloth) from flammable ones (solvents, oils). 
              Store flammable materials in a cool, stable room temperature – avoid drastic temperature changes 
              that could ignite a fire.
            </p>
          </div>

          {/* Tip 2: Install prevention systems */}
          <div className="tip-card" data-aos="fade-up" data-aos-delay="100">
            <div className="tip-icon">
              <FaBell />
            </div>
            <h3>Install Fire Prevention Systems</h3>
            <p>
              Sprinkler systems, smoke alarms, and fire extinguishers are essential. 
              Keep extinguishers in visible, accessible locations. Inform employees and residents 
              about extinguisher positions and fire exit routes.
            </p>
          </div>

          {/* Tip 3: Stay calm and act wisely */}
          <div className="tip-card" data-aos="fade-up" data-aos-delay="200">
            <div className="tip-icon">
              <FaClipboardList />
            </div>
            <h3>Don't Panic – Follow the Plan</h3>
            <p>
              In case of fire, stay calm, think straight, and follow your emergency plan. 
              Your life is the most valuable asset – act decisively to save yourself and others.
            </p>
          </div>
        </div>

        {/* Callout box with the detailed message */}
        <div className="tips-callout" data-aos="fade-up" data-aos-delay="300">
          <div className="callout-content">
            <FaFireExtinguisher className="callout-icon" />
            <h4>Remember: Prevention is better than cure</h4>
            <p>
              Always keep flammable materials at moderate room temperature. Never store them in 
              areas where temperature changes drastically. Notify everyone about fire extinguisher 
              locations and emergency exits. In an emergency, don't panic – follow the basic rules 
              to protect lives and property. You have only one life – treasure every moment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyTipsSection;