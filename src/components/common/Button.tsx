import React, { type ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  onClick,
  className = '',
  type = 'button'
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 active:scale-98';
  
  const variantStyles = {
    primary: 'bg-[#0A2A52] text-white hover:bg-[#174C7A] shadow-xs',
    secondary: 'bg-white text-[#0A2A52] hover:bg-gray-100 shadow-xs border border-gray-200',
    outline: 'border-2 border-[#0A2A52] text-[#0A2A52] hover:bg-[#0A2A52] hover:text-white'
  };

  const sizeStyles = {
    sm: 'h-10 px-4 text-xs',
    md: 'h-12 px-6 text-sm',
    lg: 'h-14 px-8 text-base'
  };

  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};
