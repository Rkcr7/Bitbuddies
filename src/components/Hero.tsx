import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from './ui/Button';
import Terminal from './ui/Terminal';

const Hero = () => {
  const navigate = useNavigate();
  const commands = [
    'npm create bit-buddies@latest',
    'cd bit-buddies',
    'npm install',
    'Starting development server...',
    'Ready for coding! 🚀'
  ];

  const handleGetStarted = () => {
    navigate('/challenges');
  };

  const handleLearnMore = () => {
    const featuresSection = document.querySelector('#features');
    featuresSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen pt-16 flex items-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Level Up Your{' '}
              <span className="bg-gradient-to-r from-accent-blue via-accent-green to-accent-magenta bg-clip-text text-transparent">
                Coding Skills
              </span>{' '}
              with Bit Buddies!
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Join our community of learners and master programming through fun, interactive challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={handleGetStarted}
                className="sm:w-auto hover:scale-105 transition-transform duration-300"
              >
                Get Started
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={handleLearnMore}
                className="sm:w-auto hover:scale-105 transition-transform duration-300"
              >
                Learn More
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Terminal commands={commands} className="shadow-2xl shadow-accent-blue/20" />
          </motion.div>
        </div>
      </div>

      {/* Animated background elements */}
      <motion.div
        className="absolute -top-20 -right-20 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-96 h-96 bg-accent-magenta/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      />
    </div>
  );
};

export default Hero;