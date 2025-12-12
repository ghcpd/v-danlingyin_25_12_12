import React from 'react'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'ghost' }

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...rest }) => {
  const base = 'px-4 py-2 rounded-full font-semibold transition shadow'
  const styles = variant === 'primary' ? `bg-christmas-green text-white hover:shadow-[0_0_18px_rgba(214,158,46,0.45)]` : `bg-white border border-slate-200`
  return <button className={`${base} ${styles} ${className}`} {...rest}>{children}</button>
}
