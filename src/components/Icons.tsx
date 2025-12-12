import React from 'react'

export const FacebookIcon: React.FC<{ className?: string }> = ({ className }) => (
  <img src="/assets/facebook.svg" alt="facebook" className={className} />
)

export const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
  <img src="/assets/instagram.svg" alt="instagram" className={className} />
)

export const GiftSVG: React.FC<{ className?: string; variant?: number }>= ({ className, variant = 1 }) => {
  const src = variant === 2 ? '/assets/gift-2.svg' : variant === 3 ? '/assets/gift-3.svg' : '/assets/gift-1.svg'
  return <img src={src} className={className} alt="gift" />
}
