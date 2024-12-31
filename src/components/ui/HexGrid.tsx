import React from 'react';
import { motion } from 'framer-motion';

const HexGrid = () => {
  const hexagons = Array.from({ length: 50 }, (_, i) => i);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-20 overflow-hidden opacity-20">
      <div className="grid grid-cols-10 gap-4">
        {hexagons.map((hex) => (
          <motion.div
            key={hex}
            className="w-16 h-16 bg-accent-blue/10"
            style={{
              clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HexGrid;