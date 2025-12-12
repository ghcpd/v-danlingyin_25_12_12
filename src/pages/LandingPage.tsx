import React from 'react'
import Countdown from '../components/Countdown'
import GiftCard from '../components/GiftCard'
import Footer from '../components/Footer'
import Button from '../components/Button'

const gifts = [
  { title: 'Cozy Blanket', desc: 'Soft, warm and perfect for winter nights.', v: 1 },
  { title: 'Wooden Toys', desc: 'Hand-crafted toys for little ones.', v: 2 },
  { title: 'Gourmet Cookies', desc: 'Baked with holiday spices.', v: 3 },
  { title: 'Holiday Candle', desc: 'Scented with pine & cinnamon.', v: 1 },
  { title: 'Knitted Scarf', desc: 'Stylish and warm.', v: 2 },
  { title: 'Hot Cocoa Kit', desc: 'Everything for a cozy evening.', v: 3 }
]

export default function LandingPage() {
  return (
    <div className="relative overflow-hidden">
      <section className="relative pt-20 pb-12 md:pt-28 md:pb-20">
        <div className="hero-snow" aria-hidden>
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i} />
          ))}
        </div>

        <div className="container-max px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[var(--green)] shadow-lg flex items-center justify-center text-white font-bold">★</div>
                <div className="text-sm uppercase tracking-wider text-white/80">Seasonal Event</div>
              </div>

              <h1 className="text-4xl md:text-6xl leading-tight font-extrabold text-white">
                Christmas Wonderland <span className="text-[var(--gold)]">2025</span>
              </h1>
              <p className="mt-4 text-lg md:text-xl text-white/80">Celebrate the magic with us</p>

              <div className="mt-8 flex items-center gap-4">
                <Button onClick={() => alert('Thanks for joining!')} className="shadow-xl" color="red">Join Event</Button>
                <a href="#library" className="px-4 py-2 rounded-full text-sm font-semibold bg-white/6 text-white">Explore components</a>
              </div>

              <div className="mt-8 w-full max-w-lg">
                <Countdown />
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-tr from-[#071029]/40 to-[#04101b]/50 rounded-3xl p-6 shadow-2xl">
                <h3 className="text-white font-semibold text-xl mb-4">Gift Highlights</h3>
                <div className="grid grid-cols-2 gap-4">
                  {gifts.slice(0,4).map((g, i) => (
                    <div key={i} className="bg-white/3 p-3 rounded-2xl card-hover">
                      <div className="flex items-center gap-3">
                        <div className="w-16 h-16 p-2 rounded-lg bg-white/6 flex items-center justify-center">
                          <img src={`/assets/gift-${(g.v) || 1}.svg`} />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white">{g.title}</div>
                          <div className="text-xs text-white/70">{g.desc}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <h4 className="text-white/90 font-semibold mb-2">All Gifts</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {gifts.map((g, i) => (
                      <GiftCard key={i} title={g.title} description={g.desc} imageVariant={g.v} />
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="container-max px-6 md:px-12">
          <div className="bg-gradient-to-b from-[#051428] to-[#03101a] p-8 rounded-3xl shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <div className="text-lg text-white font-semibold">Don’t miss the sparkle</div>
                <div className="text-sm text-white/70 mt-1">Special performances, giveaways and a cozy market — all in one magical night.</div>
              </div>

              <div className="flex items-center gap-3">
                <Button color="green">Reserve spot</Button>
                <Button variant="outline">Learn more</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
