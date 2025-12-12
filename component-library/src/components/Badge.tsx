import React from 'react'

export const Badge: React.FC<{ tone?: 'red' | 'gold' }> = ({ tone = 'red', children }) => {
  const bg = tone === 'gold' ? 'bg-christmas-gold text-black' : 'bg-christmas-red text-white'
  return <span className={`px-2 py-1 rounded-full text-xs font-semibold ${bg}`}>{children}</span>
}
