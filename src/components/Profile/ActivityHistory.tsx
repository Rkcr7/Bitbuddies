import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Trophy, MessageSquare } from 'lucide-react';
import Card from '../ui/Card';

const activities = [
  {
    type: 'challenge',
    icon: <Code2 className="w-5 h-5 text-accent-blue" />,
    title: 'Completed "Advanced Algorithms"',
    points: 100,
    time: '2 hours ago',
  },
  {
    type: 'achievement',
    icon: <Trophy className="w-5 h-5 text-accent-green" />,
    title: 'Earned "Code Warrior" badge',
    description: 'Completed 50 challenges',
    time: '1 day ago',
  },
  {
    type: 'community',
    icon: <MessageSquare className="w-5 h-5 text-accent-magenta" />,
    title: 'Helped solve a problem',
    description: 'Answered question about React Hooks',
    time: '2 days ago',
  },
];

const ActivityHistory = () => {
  return (
    <Card>
      <h3 className="text-lg font-semibold mb-6">Recent Activity</h3>
      <div className="space-y-6">
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start space-x-4"
          >
            <div className="p-2 bg-black/30 rounded-lg">{activity.icon}</div>
            <div className="flex-1 min-w-0">
              <p className="font-medium">{activity.title}</p>
              {activity.description && (
                <p className="text-sm text-gray-400">{activity.description}</p>
              )}
              <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
            </div>
            {activity.points && (
              <div className="flex items-center space-x-1 text-accent-blue">
                <Trophy className="w-4 h-4" />
                <span>{activity.points}</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </Card>
  );
};

export { ActivityHistory };