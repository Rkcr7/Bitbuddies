import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import DiscussionList from './components/DiscussionList';
import CommunityStats from './components/CommunityStats';
import TopContributors from './components/TopContributors';

const CommunityPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center space-x-4 mb-8"
        >
          <Users className="w-8 h-8 text-accent-blue" />
          <h1 className="text-4xl font-bold">Community Hub</h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <CommunityStats />
            <DiscussionList />
          </div>
          <div>
            <TopContributors />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityPage;