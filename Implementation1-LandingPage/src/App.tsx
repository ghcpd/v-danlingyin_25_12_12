import React from 'react';
import { Hero } from './components/Hero';
import { Countdown } from './components/Countdown';
import { GiftGrid } from './components/GiftGrid';
import { Footer } from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Countdown />
      <GiftGrid />
      <Footer />
    </div>
  );
}

export default App;
