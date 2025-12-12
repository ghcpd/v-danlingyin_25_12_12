import React from 'react'

export default function Hero(){
  return (
    <section className="bg-gradient-to-b from-[#fff8f0] to-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-christmas-red">Christmas Wonderland 2025</h1>
        <p className="mt-4 text-lg md:text-xl text-slate-700">Celebrate the magic with us</p>
        <div className="mt-6">
          <button className="px-6 py-3 rounded-full bg-christmas-green text-white font-semibold shadow hover:brightness-110 transition">Join Event</button>
        </div>
      </div>
    </section>
  )
}
