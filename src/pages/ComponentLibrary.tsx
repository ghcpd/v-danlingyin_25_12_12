import React from 'react'
import Navbar from '../components/Navbar'
import Button from '../components/Button'
import Card from '../components/Card'
import Badge from '../components/Badge'
import Footer from '../components/Footer'

export default function ComponentLibrary() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-christmas-red">Component Library</h1>

        <section className="mt-6">
          <h2 className="font-semibold">Buttons</h2>
          <div className="mt-3 flex gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="gold">Gold</Button>
          </div>
        </section>

        <section className="mt-6">
          <h2 className="font-semibold">Cards</h2>
          <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card title="Sample Card" description="A sample description" image="/assets/gift-1.svg" />
            <Card title="Sample Card" description="A sample description" image="/assets/gift-2.svg" />
            <Card title="Sample Card" description="A sample description" image="/assets/gift-3.svg" />
          </div>
        </section>

        <section className="mt-6">
          <h2 className="font-semibold">Badges</h2>
          <div className="mt-3 flex gap-3">
            <Badge>New</Badge>
            <Badge>Holiday</Badge>
            <Badge>Featured</Badge>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
