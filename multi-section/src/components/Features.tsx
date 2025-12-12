import React from 'react'

const features = [
  { id:1, title: 'Live Music', desc: 'Carols and bands throughout the day', icon: '🎶' },
  { id:2, title: 'Gifts Market', desc: 'Local artisans and seasonal goods', icon: '🎁' },
  { id:3, title: 'Hot Cocoa', desc: 'Warm beverages and treats', icon: '☕' }
]

export default function Features(){
  return (
    <section className="container mx-auto px-6 py-12">
      <h2 className="text-2xl font-semibold text-center mb-8">What to expect</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map(f=> (
          <div key={f.id} className="bg-white rounded-lg p-6 shadow hover:scale-105 transition-transform">
            <div className="text-4xl mb-4">{f.icon}</div>
            <div className="font-semibold text-lg">{f.title}</div>
            <p className="text-sm text-slate-600 mt-2">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
