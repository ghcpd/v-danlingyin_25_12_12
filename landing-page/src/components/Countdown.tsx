import { useState, useEffect } from 'react'

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const target = new Date('2025-12-25T00:00:00')
    const update = () => {
      const now = new Date()
      const diff = target.getTime() - now.getTime()
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000)
        })
      }
    }
    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-4xl font-bold mb-8 text-christmas-red">Countdown to Christmas</h2>
      <div className="flex justify-center space-x-4">
        <div className="bg-christmas-green text-white p-4 rounded shadow">
          <div className="text-2xl font-bold">{timeLeft.days}</div>
          <div>Days</div>
        </div>
        <div className="bg-christmas-green text-white p-4 rounded shadow">
          <div className="text-2xl font-bold">{timeLeft.hours}</div>
          <div>Hours</div>
        </div>
        <div className="bg-christmas-green text-white p-4 rounded shadow">
          <div className="text-2xl font-bold">{timeLeft.minutes}</div>
          <div>Minutes</div>
        </div>
        <div className="bg-christmas-green text-white p-4 rounded shadow">
          <div className="text-2xl font-bold">{timeLeft.seconds}</div>
          <div>Seconds</div>
        </div>
      </div>
    </section>
  )
}

export default Countdown