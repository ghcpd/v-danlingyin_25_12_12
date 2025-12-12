import React from 'react';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { CTASection } from './components/CTASection';
import { FooterSection } from './components/FooterSection';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <FeaturesSection />
      <CTASection />
      <FooterSection />
    </div>
  );
}

export default App;
