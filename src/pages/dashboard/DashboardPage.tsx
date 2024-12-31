import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, TrendingUp, Award } from 'lucide-react';
import DashboardStats from './components/DashboardStats';
import ActivityFeed from './components/ActivityFeed';
import LeaderboardWidget from './components/LeaderboardWidget';

const DashboardPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center space-x-4 mb-8"
        >
          <LayoutDashboard className="w-8 h-8 text-accent-blue" />
          <h1 className="text-4xl font-bold">Dashboard</h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <DashboardStats />
            <ActivityFeed />
          </div>
          <div>
            <LeaderboardWidget />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;