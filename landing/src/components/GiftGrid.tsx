import React from 'react'
import gifts from '../data/gifts'

export default function GiftGrid(){
  return (
    <section className="container mx-auto px-6 py-12">
      <h3 className="text-xl md:text-2xl font-semibold mb-6 text-center">Gift Ideas</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {gifts.map(g=> (
          <div key={g.id} className="bg-white rounded-lg p-3 shadow hover:scale-105 transition-transform contents">
            <div className="flex flex-col items-center gap-3">
              <img src={g.image} alt={g.title} className="w-20 h-20 object-contain" />
              <div className="font-semibold">{g.title}</div>
              <div className="text-sm text-slate-600">{g.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
