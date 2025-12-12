import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'solid' | 'outline' | 'ghost'
  color?: 'red' | 'green' | 'gold'
}

const colorMap: Record<string, string> = {
  red: 'from-[var(--red)] to-[var(--gold)]',
  green: 'from-[var(--green)] to-[var(--red)]',
  gold: 'from-[var(--gold)] to-[var(--green)]'
}

export default function Button({ variant = 'solid', color = 'red', className = '', children, ...rest }: Props) {
  const base = 'inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition'
  if (variant === 'solid') {
    return (
      <button
        {...rest}
        className={`${base} ${className} btn-glow bg-gradient-to-r ${colorMap[color]} text-white shadow-glow-red`}
      >
        {children}
      </button>
    )
  }

  if (variant === 'outline') {
    return (
      <button {...rest} className={`${base} ${className} border border-white/10 text-white/90 bg-transparent`}>{children}</button>
    )
  }

  return (
    <button {...rest} className={`${base} ${className} text-[var(--gold)] bg-transparent`}>{children}</button>
  )
}
