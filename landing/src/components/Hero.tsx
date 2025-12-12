import React from 'react'

export default function Hero(){
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="snow z-0" />
      </div>
      <div className="container mx-auto px-6 py-20 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-christmas-red mb-4">Christmas Wonderland 2025</h1>
        <p className="text-xl md:text-2xl text-slate-700 mb-6">Celebrate the magic with us</p>
        <button className="join-btn inline-block px-6 py-3 rounded-full bg-christmas-green text-white font-semibold shadow-lg hover:shadow-[0_0_20px_rgba(214,158,46,0.5)] transition-all">
          Join Event
        </button>
      </div>
    </header>
  )
}
