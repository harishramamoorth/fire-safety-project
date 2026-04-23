import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';

// Context Provider
import { AppProvider } from './context/AppContext';

// Main Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Resources from './pages/Resources';
import ResourceDetail from './pages/ResourceDetail';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// ========== INDIVIDUAL SERVICE PAGES ==========
import FireSuppressionSystems from './pages/services/FireSuppressionSystems';
import DetectionAlarmSystems from './pages/services/DetectionAlarmSystems';
import FireExtinguishersService from './pages/services/FireExtinguishers';
import FoamConcentrates from './pages/services/FoamConcentrates';
import SafetyTraining from './pages/services/SafetyTraining';
import CertificationTesting from './pages/services/CertificationTesting';

// ========== INDIVIDUAL PRODUCT PAGES ==========
// Fire Extinguishers
import ABCExtinguisher from './pages/products/ABCExtinguisher';
import CO2Extinguisher from './pages/products/CO2Extinguisher';
import WetChemicalExtinguisher from './pages/products/WetChemicalExtinguisher';
import FoamExtinguisher from './pages/products/FoamExtinguisher';

// Foam Concentrates
import AFFFoamConcentrate from './pages/products/AFFFoamConcentrate';
import ARAFFFoamConcentrate from './pages/products/ARAFFFoamConcentrate';
import ProteinFoamConcentrate from './pages/products/ProteinFoamConcentrate';

// Dry Chemical Powders
import ABCPowder from './pages/products/ABCPowder';
import BCPowder from './pages/products/BCPowder';
import PurpleK from './pages/products/PurpleK';

// Suppression Systems
import FM200System from './pages/products/FM200System';
import Novec1230System from './pages/products/Novec1230System';
import KitchenSuppression from './pages/products/KitchenSuppression';

// Foam Equipment
import FoamChamber from './pages/products/FoamChamber';
import FoamMonitor from './pages/products/FoamMonitor';
import FoamProportioner from './pages/products/FoamProportioner';

import './App.css';

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-in-out'
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <AppProvider>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          {/* Main routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/:id" element={<ResourceDetail />} />
          <Route path="/contact" element={<Contact />} />

          {/* Service detail routes (individual pages) */}
          <Route path="/services/fire-suppression-systems" element={<FireSuppressionSystems />} />
          <Route path="/services/detection-alarm-systems" element={<DetectionAlarmSystems />} />
          <Route path="/services/fire-extinguishers" element={<FireExtinguishersService />} />
          <Route path="/services/foam-concentrates" element={<FoamConcentrates />} />
          <Route path="/services/safety-training" element={<SafetyTraining />} />
          <Route path="/services/certification-testing" element={<CertificationTesting />} />

          {/* Product detail routes (individual pages) */}
          {/* Fire Extinguishers */}
          <Route path="/products/abc-extinguisher" element={<ABCExtinguisher />} />
          <Route path="/products/co2-extinguisher" element={<CO2Extinguisher />} />
          <Route path="/products/wet-chemical-extinguisher" element={<WetChemicalExtinguisher />} />
          <Route path="/products/foam-extinguisher" element={<FoamExtinguisher />} />

          {/* Foam Concentrates */}
          <Route path="/products/afff-foam" element={<AFFFoamConcentrate />} />
          <Route path="/products/ar-afff-foam" element={<ARAFFFoamConcentrate />} />
          <Route path="/products/protein-foam" element={<ProteinFoamConcentrate />} />

          {/* Dry Chemical Powders */}
          <Route path="/products/abc-powder" element={<ABCPowder />} />
          <Route path="/products/bc-powder" element={<BCPowder />} />
          <Route path="/products/purple-k" element={<PurpleK />} />

          {/* Suppression Systems */}
          
          <Route path="/products/fm200-system" element={<FM200System />} />
          <Route path="/products/novec-1230-system" element={<Novec1230System />} />
          <Route path="/products/kitchen-suppression" element={<KitchenSuppression />} />

          {/* Foam Equipment */}
          <Route path="/products/foam-chamber" element={<FoamChamber />} />
          <Route path="/products/foam-monitor" element={<FoamMonitor />} />
          <Route path="/products/foam-proportioner" element={<FoamProportioner />} />

          {/* 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </AppProvider>
  );
}

export default App;