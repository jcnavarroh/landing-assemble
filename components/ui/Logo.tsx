import React from 'react';
import Link from 'next/link';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  size = 'medium', 
  className = '' 
}) => {
  const sizeClasses = {
    small: 'text-lg',
    medium: 'text-xl',
    large: 'text-2xl'
  };

  return (
    <Link 
      href="/" 
      className={`font-bold text-gray-900 hover:text-blue-600 transition-colors ${sizeClasses[size]} ${className}`}
      aria-label="Assemble - Go to homepage"
    >
      <span className="text-blue-600">A</span>ssemble
    </Link>
  );
};

export default Logo; 