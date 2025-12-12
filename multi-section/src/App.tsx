import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-800">
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </div>
  )
}
