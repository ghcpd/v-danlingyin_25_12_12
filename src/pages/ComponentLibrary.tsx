import React from 'react'
import Button from '../components/Button'
import GiftCard from '../components/GiftCard'
import Countdown from '../components/Countdown'

export default function ComponentLibrary() {
  return (
    <div className="pt-12 pb-20">
      <div className="container-max px-6 md:px-12">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-white">Reusable UI Component Library</h2>
          <p className="mt-2 text-white/80">Buttons, Cards, Badges and a Countdown — built with React + TS + Tailwind.</p>
        </header>

        <section className="mb-12">
          <h3 className="text-xl text-white font-semibold mb-4">Buttons</h3>
          <div className="flex flex-wrap items-center gap-4">
            <Button color="red">Primary</Button>
            <Button color="green">Primary Green</Button>
            <Button color="gold">Primary Gold</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-xl text-white font-semibold mb-4">Cards</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <GiftCard title="Hot Cocoa Kit" description="Everything for a cozy evening." imageVariant={3} />
            <GiftCard title="Holiday Candle" description="Scented with pine & cinnamon." imageVariant={1} />
            <div className="bg-white/6 rounded-2xl p-6 flex flex-col justify-between card-hover">
              <div>
                <div className="text-lg font-semibold text-white">Special Badge</div>
                <div className="text-sm text-white/70 mt-2">Use cards to highlight offers or items.</div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="px-3 py-1 rounded-full bg-[var(--gold)] text-black text-xs font-semibold">Featured</div>
                <Button variant="outline">Action</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-xl text-white font-semibold mb-4">Countdown Component</h3>
          <div className="max-w-md">
            <Countdown />
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-xl text-white font-semibold mb-4">Badges & Utilities</h3>
          <div className="flex items-center gap-4 flex-wrap">
            <div className="px-3 py-1 rounded-full bg-[var(--red)] text-white text-sm">Sold Out</div>
            <div className="px-3 py-1 rounded-full bg-[var(--green)] text-white text-sm">New</div>
            <div className="px-3 py-1 rounded-full bg-[var(--gold)] text-black text-sm">Limited</div>
            <div className="px-3 py-1 rounded-full border border-white/10 text-white text-sm">Info</div>
          </div>
        </section>

        <footer className="mt-12 border-t border-white/6 pt-8">
          <div className="text-sm text-white/70">All components are pure React + TypeScript + Tailwind. No external UI libs.</div>
        </footer>
      </div>
    </div>
  )
}
