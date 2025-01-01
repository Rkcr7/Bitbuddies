import React from 'react';
import { motion } from 'framer-motion';

interface GlowEffectProps {
  color?: string;
  className?: string;
}

const GlowEffect = ({ color = 'accent-blue', className = '' }: GlowEffectProps) => {
  return (
    <motion.div
      className={`absolute -z-10 blur-[100px] rounded-full ${className}`}
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0.2, 0.4, 0.2],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      style={{
        background: `var(--${color})`,
      }}
    />
  );
};

export default GlowEffect;