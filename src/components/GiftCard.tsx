import React from 'react'
import { GiftSVG } from './Icons'

type Props = {
  title: string
  description: string
  imageVariant?: number
}

export default function GiftCard({ title, description, imageVariant = 1 }: Props) {
  return (
    <div className="card-hover bg-gradient-to-b from-white/6 to-white/3 p-4 rounded-2xl shadow-md flex flex-col items-center text-center">
      <div className="w-28 h-28 p-3 rounded-xl bg-white/5 flex items-center justify-center mb-3">
        <GiftSVG variant={imageVariant} className="w-full h-full" />
      </div>
      <h3 className="font-semibold text-lg text-white/95">{title}</h3>
      <p className="text-sm text-white/70 mt-2">{description}</p>
    </div>
  )
}
