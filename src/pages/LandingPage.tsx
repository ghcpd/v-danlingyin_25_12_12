import React from 'react'
import Navbar from '../components/Navbar'
import Snow from '../components/Snow'
import Countdown from '../components/Countdown'
import GiftGrid from '../components/GiftGrid'
import Footer from '../components/Footer'
import Button from '../components/Button'

export default function LandingPage() {
  const deadline = new Date('2025-12-25T00:00:00')
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-green-50 via-white to-green-100 overflow-hidden">
      <Snow />
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-12">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl font-extrabold text-christmas-red">Christmas Wonderland 2025</h1>
            <p className="mt-4 text-lg text-gray-700">Celebrate the magic with us</p>
            <div className="mt-6 flex gap-3">
              <Button variant="primary">Join Event</Button>
              <Button variant="secondary">Learn More</Button>
            </div>
          </div>
          <div className="bg-white/80 p-6 rounded-lg shadow-md">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Countdown to Christmas</h3>
              <Countdown date={deadline} />
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4 text-center">Gift Grid</h2>
          <GiftGrid />
        </section>

      </main>
      <Footer />
    </div>
  )
}
