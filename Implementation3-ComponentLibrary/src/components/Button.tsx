import React, { ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) => {
  const baseClasses = 'font-bold rounded-lg transition-all duration-300 cursor-pointer focus:outline-none';
  
  const variantClasses = {
    primary: 'bg-christmas-red text-white hover:shadow-lg hover:shadow-christmas-red/50 hover:scale-105',
    secondary: 'bg-christmas-green text-white hover:shadow-lg hover:shadow-christmas-green/50 hover:scale-105',
    outline: 'border-2 border-christmas-gold text-christmas-gold hover:bg-christmas-gold hover:text-white',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
