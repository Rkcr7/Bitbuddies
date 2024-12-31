import React from 'react';
import { motion } from 'framer-motion';
import ChallengesList from './components/ChallengesList';
import ChallengeFilters from './components/ChallengeFilters';
import { Terminal } from 'lucide-react';

const ChallengesPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center space-x-4 mb-8"
        >
          <Terminal className="w-8 h-8 text-accent-blue" />
          <h1 className="text-4xl font-bold">Coding Challenges</h1>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <ChallengeFilters />
          <div className="lg:col-span-3">
            <ChallengesList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengesPage;