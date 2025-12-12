import React from 'react'
import Card from './Card'

const gifts = Array.from({ length: 6 }).map((_, i) => ({
  title: `Gift ${i + 1}`,
  description: `A festive gift box filled with surprises. #${i + 1}`,
  image: `/assets/gift-${(i % 3) + 1}.svg`
}))

export default function GiftGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {gifts.map((g) => (
        <Card key={g.title} title={g.title} description={g.description} image={g.image} />
      ))}
    </div>
  )
}
