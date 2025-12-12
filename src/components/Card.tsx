import React from 'react'

type CardProps = {
  title: string
  description: string
  image?: string
  key?: string
}

export default function Card({ title, description, image }: CardProps) {
  return (
    <div className="border rounded-lg p-4 bg-white shadow hover:shadow-lg transition-shadow hover-scale">
      {image && <img src={image} alt={title} className="w-full h-40 object-cover rounded-md mb-3" />}
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm mt-1 text-gray-600">{description}</p>
    </div>
  )
}
