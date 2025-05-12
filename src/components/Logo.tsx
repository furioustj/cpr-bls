import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'md',
  variant = 'light'
}) => {
  const sizes = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  };

  return (
    <motion.div 
      className={`relative ${sizes[size]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img
        src="https://rescuefederation.com/wp-content/uploads/2024/11/cropped-Untitled-design.png"
        alt="Rescue Federation Logo"
        className={`w-full h-full object-contain ${variant === 'light' ? 'brightness-100' : 'brightness-90'}`}
      />
    </motion.div>
  );
};

export default Logo;