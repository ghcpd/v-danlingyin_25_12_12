import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'gold' }

const variantMap = {
  primary: 'bg-christmas-red hover:bg-red-700 text-white',
  secondary: 'bg-christmas-green hover:bg-green-600 text-white',
  gold: 'bg-christmas-gold hover:bg-yellow-600 text-white',
}

export default function Button({ variant = 'primary', className = '', children, ...rest }: Props) {
  return (
    <button
      {...rest}
      className={`btn-glow ${variantMap[variant]} px-4 py-2 rounded-md shadow-md focus:outline-none ${className}`}
    >
      {children}
    </button>
  )
}
