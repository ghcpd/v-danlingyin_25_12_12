import React from 'react';

export type BadgeVariant = 'red' | 'green' | 'gold' | 'slate';

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'red',
  children,
  className = '',
}) => {
  const variantClasses = {
    red: 'bg-red-100 text-christmas-red',
    green: 'bg-green-100 text-christmas-green',
    gold: 'bg-yellow-100 text-christmas-gold',
    slate: 'bg-slate-100 text-slate-700',
  };

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
