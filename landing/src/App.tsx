import React from 'react'
import Hero from './components/Hero'
import Countdown from './components/Countdown'
import GiftGrid from './components/GiftGrid'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-[#F8FAFC] text-slate-800">
      <Hero />
      <Countdown />
      <GiftGrid />
      <Footer />
    </div>
  )
}
