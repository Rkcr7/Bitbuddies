import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 pt-16 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <motion.div
        className="w-16 h-16 border-4 border-accent-blue rounded-full border-t-transparent"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

export default LoadingSpinner;