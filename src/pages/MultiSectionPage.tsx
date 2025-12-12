import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import Badge from '../components/Badge'

export default function MultiSectionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-12">
        <section className="text-center py-10">
          <h1 className="text-4xl font-extrabold text-christmas-red">Christmas Wonderland 2025</h1>
          <p className="mt-4 text-gray-700">A cozy place for festive joy and community</p>
          <div className="mt-6 flex justify-center gap-3">
            <Button variant="primary">Join Event</Button>
            <Button variant="gold">Sponsor</Button>
          </div>
        </section>

        <section className="py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded shadow">
            <h3 className="font-semibold">Family Activities</h3>
            <p className="text-sm text-gray-600 mt-2">Activities and games for all ages.</p>
            <div className="mt-3"><Badge>Popular</Badge></div>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <h3 className="font-semibold">Gift Exchange</h3>
            <p className="text-sm text-gray-600 mt-2">Participate in our gift exchange and surprises.</p>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <h3 className="font-semibold">Live Performances</h3>
            <p className="text-sm text-gray-600 mt-2">Carolling and local choirs join the celebration.</p>
          </div>
        </section>

        <section className="py-8 bg-white p-6 rounded shadow text-center">
          <h3 className="text-xl font-bold">Ready to enjoy the event?</h3>
          <p className="text-gray-700 mt-2">Sign up now for VIP updates and special treats.</p>
          <div className="mt-4">
            <Button variant="secondary">Sign Up</Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
