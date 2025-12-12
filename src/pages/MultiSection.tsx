import React from 'react'
import Button from '../components/Button'
import Countdown from '../components/Countdown'
import GiftCard from '../components/GiftCard'
import Footer from '../components/Footer'

export default function MultiSection() {
  return (
    <div className="pt-12 pb-20">
      <div className="container-max px-6 md:px-12">
        <section className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-[var(--gold)] flex items-center justify-center text-black font-bold">❄</div>
            <div className="text-sm text-white/80">Winter Gathering</div>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Christmas Wonderland <span className="text-[var(--green)]">2025</span></h2>
          <p className="mt-3 text-white/80">Celebrate the magic with us — performances, local makers, and warm drinks.</p>

          <div className="mt-6 flex items-center justify-center gap-4">
            <Button color="gold">Get Tickets</Button>
            <a href="#landing" className="px-4 py-2 rounded-full text-sm font-semibold bg-white/6 text-white">See landing</a>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/4 p-6 rounded-2xl card-hover">
            <h3 className="text-lg font-semibold text-white">Live Music</h3>
            <p className="text-sm text-white/70 mt-2">Local choirs and bands playing festive tunes.</p>
            <div className="mt-4">
              <Button variant="outline">See lineup</Button>
            </div>
          </div>

          <div className="bg-white/4 p-6 rounded-2xl card-hover">
            <h3 className="text-lg font-semibold text-white">Makers Market</h3>
            <p className="text-sm text-white/70 mt-2">Handmade gifts from local artisans.</p>
            <div className="mt-4">
              <Button variant="outline">Explore</Button>
            </div>
          </div>

          <div className="bg-white/4 p-6 rounded-2xl card-hover">
            <h3 className="text-lg font-semibold text-white">Family Activities</h3>
            <p className="text-sm text-white/70 mt-2">Crafts, storytelling and more for kids.</p>
            <div className="mt-4">
              <Button variant="outline">Join</Button>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-gradient-to-r from-[#071017] to-[#04101a] p-6 rounded-3xl shadow-lg">
            <div className="md:flex items-center gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white">Countdown to the big night</h3>
                <p className="text-sm text-white/70 mt-2">Mark your calendar — join us for an evening of wonder.</p>
              </div>

              <div className="w-full md:w-96 mt-4 md:mt-0">
                <Countdown />
              </div>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-white mb-4">Gift ideas</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <GiftCard title="Cozy Blanket" description="Soft, warm and perfect for winter nights." imageVariant={1} />
            <GiftCard title="Gourmet Cookies" description="Baked with holiday spices." imageVariant={3} />
            <GiftCard title="Knitted Scarf" description="Stylish and warm." imageVariant={2} />
          </div>
        </section>

      </div>

      <div className="mt-16">
        <Footer />
      </div>
    </div>
  )
}
