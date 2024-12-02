import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
}

export function Button({ href, variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyles = 'inline-flex items-center px-6 py-3 border rounded-lg text-base font-medium transition-colors duration-200';
  const variants = {
    primary: 'bg-white text-orange-500 hover:bg-orange-50',
    outline: 'border-orange-500 text-orange-500 hover:bg-orange-50',
  };

  const buttonStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={buttonStyles}>
        {children}
      </a>
    );
  }

  return (
    <button className={buttonStyles} {...props}>
      {children}
    </button>
  );
}