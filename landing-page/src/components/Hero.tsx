import { useEffect, useState } from 'react'

const Hero = () => {
  const [snowflakes, setSnowflakes] = useState<Array<{id: number, left: number, delay: number, duration: number}>>([])

  useEffect(() => {
    const flakes = Array.from({length: 50}, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 5 + Math.random() * 10
    }))
    setSnowflakes(flakes)
  }, [])

  return (
    <section className="relative flex flex-col items-center justify-center h-screen text-center text-white overflow-hidden">
      {snowflakes.map(flake => (
        <div
          key={flake.id}
          className="snowflake"
          style={{
            left: `${flake.left}%`,
            animationDelay: `${flake.delay}s`,
            animationDuration: `${flake.duration}s`
          }}
        >
          ❄
        </div>
      ))}
      <h1 className="text-6xl font-bold mb-4">Christmas Wonderland 2025</h1>
      <p className="text-xl mb-8">Celebrate the magic with us</p>
      <button className="bg-christmas-gold hover:bg-christmas-gold/80 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 hover:shadow-xl">Join Event</button>
    </section>
  )
}

export default Hero