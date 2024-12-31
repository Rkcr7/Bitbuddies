import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Trophy, MessageSquare, GitBranch } from 'lucide-react';
import Card from '../../../components/ui/Card';

interface Activity {
  id: number;
  type: 'challenge' | 'achievement' | 'community' | 'contribution';
  icon: React.ReactNode;
  title: string;
  description?: string;
  time: string;
  points?: number;
}

const activities: Activity[] = [
  {
    id: 1,
    type: 'challenge',
    icon: <Code2 className="w-5 h-5 text-accent-blue" />,
    title: 'Completed Binary Search Challenge',
    description: 'Solved in 25 minutes',
    time: '2 hours ago',
    points: 100,
  },
  {
    id: 2,
    type: 'achievement',
    icon: <Trophy className="w-5 h-5 text-accent-green" />,
    title: 'Earned Speed Demon Badge',
    description: 'Complete 5 challenges under time limit',
    time: '4 hours ago',
  },
  {
    id: 3,
    type: 'community',
    icon: <MessageSquare className="w-5 h-5 text-accent-magenta" />,
    title: 'Helped a fellow developer',
    description: 'Answered question about React hooks',
    time: '1 day ago',
  },
  {
    id: 4,
    type: 'contribution',
    icon: <GitBranch className="w-5 h-5 text-yellow-400" />,
    title: 'Contributed to Algorithm Library',
    description: 'Added new sorting algorithm',
    time: '2 days ago',
    points: 250,
  },
];

const ActivityFeed = () => {
  return (
    <Card>
      <h2 className="text-xl font-semibold mb-6">Recent Activity</h2>
      <div className="space-y-6">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
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

export default ActivityFeed;