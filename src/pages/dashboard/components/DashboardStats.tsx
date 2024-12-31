import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Target, Clock, Zap } from 'lucide-react';
import Card from '../../../components/ui/Card';

const stats = [
  {
    icon: <Trophy className="w-6 h-6 text-accent-blue" />,
    label: 'Total Points',
    value: '2,500',
  },
  {
    icon: <Target className="w-6 h-6 text-accent-green" />,
    label: 'Challenges Completed',
    value: '42',
  },
  {
    icon: <Clock className="w-6 h-6 text-accent-magenta" />,
    label: 'Time Spent',
    value: '128h',
  },
  {
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    label: 'Current Streak',
    value: '7 days',
  },
];

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="flex flex-col items-center p-6 text-center">
            <div className="mb-4">{stat.icon}</div>
            <div className="text-2xl font-bold mb-2">{stat.value}</div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default DashboardStats;