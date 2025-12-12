import React from 'react'

export default function Snow() {
  const flakes = Array.from({ length: 30 })
  return (
    <div className="snow-container" aria-hidden>
      {flakes.map((_, i) => (
        <div
          key={i}
          className="snowflake"
          style={{ left: `${(i * 3) % 100}%`, animationDelay: `${(i % 5) * 0.6}s`, width: `${4 + (i % 4)}px`, height: `${4 + (i % 4)}px` }}
        />
      ))}
    </div>
  )
}
