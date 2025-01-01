import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  to?: string;
}

const Button = ({ variant = 'primary', size = 'md', children, to, ...props }: ButtonProps) => {
  const baseStyles = "rounded-lg transition-all duration-300 ease-in-out focus:outline-none";
  
  const variants = {
    primary: "neon-button",
    secondary: "border border-white/20 hover:bg-white/5"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  if (to) {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          to={to}
          className={`${baseStyles} ${variants[variant]} ${sizes[size]}`}
          {...props}
        >
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;