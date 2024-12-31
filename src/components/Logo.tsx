import React from 'react';
import { Binary, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.div 
      className="flex items-center space-x-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <Cpu className="w-8 h-8 text-accent-blue" />
        <motion.div
          className="absolute -top-1 -right-1"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <Binary className="w-4 h-4 text-accent-green" />
        </motion.div>
      </div>
      <span className="text-xl font-bold bg-gradient-to-r from-accent-blue via-accent-green to-accent-magenta bg-clip-text text-transparent">
        Bit Buddies
      </span>
    </motion.div>
  );
};

export default Logo;