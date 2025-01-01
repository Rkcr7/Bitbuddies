import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  to?: string;
  className?: string;
}

const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  to, 
  className = '',
  ...props 
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center w-full relative rounded-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 active:scale-95 overflow-hidden";
  
  const variants = {
    primary: "bg-gradient-to-r from-accent-blue to-accent-green hover:from-accent-green hover:to-accent-blue text-white shadow-lg shadow-accent-blue/20",
    secondary: "border border-white/20 hover:bg-white/5 text-white"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg font-medium"
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-accent-blue via-accent-green to-accent-magenta opacity-75 pointer-events-none"
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      )}
    </>
  );

  if (to) {
    return (
      <Link
        to={to}
        className={combinedClassName}
      >
        {content}
      </Link>
    );
  }

  return (
    <motion.button
      className={combinedClassName}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {content}
    </motion.button>
  );
};

export default Button;