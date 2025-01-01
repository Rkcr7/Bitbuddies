import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Zap, Star, Trophy } from 'lucide-react';

const FloatingIcons = () => {
  const icons = [
    { Icon: Code, color: 'text-accent-blue', delay: 0 },
    { Icon: Brain, color: 'text-accent-green', delay: 0.2 },
    { Icon: Zap, color: 'text-accent-magenta', delay: 0.4 },
    { Icon: Star, color: 'text-yellow-400', delay: 0.6 },
    { Icon: Trophy, color: 'text-purple-400', delay: 0.8 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none">
      {icons.map(({ Icon, color, delay }, index) => (
        <motion.div
          key={index}
          className={`absolute ${color}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1],
            x: ['0%', '100%', '0%'],
            y: ['0%', '100%', '0%'],
          }}
          transition={{
            duration: 20,
            delay,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          <Icon className="w-8 h-8" />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingIcons;