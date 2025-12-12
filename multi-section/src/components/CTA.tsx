import React from 'react'

export default function CTA(){
  return (
    <section className="bg-christmas-gold/10 py-12">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-2xl font-semibold">Join us and make this season memorable</h3>
        <p className="mt-2 text-slate-600">Sign up for updates and exclusive holiday specials</p>
        <div className="mt-4 flex items-center justify-center gap-3">
          <input placeholder="Your email" className="px-4 py-2 rounded-l-md border border-slate-200" />
          <button className="px-4 py-2 rounded-r-md bg-christmas-red text-white font-semibold hover:brightness-110">Notify me</button>
        </div>
      </div>
    </section>
  )
}
