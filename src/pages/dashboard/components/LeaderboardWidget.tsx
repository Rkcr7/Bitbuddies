import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Award } from 'lucide-react';
import Card from '../../../components/ui/Card';

interface LeaderboardEntry {
  rank: number;
  username: string;
  points: number;
  avatar?: string;
  trend: 'up' | 'down' | 'same';
}

const leaderboard: LeaderboardEntry[] = [
  {
    rank: 1,
    username: 'codeMaster',
    points: 12500,
    trend: 'same',
  },
  {
    rank: 2,
    username: 'algorithmPro',
    points: 11200,
    trend: 'up',
  },
  {
    rank: 3,
    username: 'debugHero',
    points: 10800,
    trend: 'down',
  },
  {
    rank: 4,
    username: 'syntaxNinja',
    points: 9500,
    trend: 'up',
  },
  {
    rank: 5,
    username: 'bitWizard',
    points: 9200,
    trend: 'same',
  },
];

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1:
      return <Trophy className="w-5 h-5 text-yellow-400" />;
    case 2:
      return <Medal className="w-5 h-5 text-gray-400" />;
    case 3:
      return <Award className="w-5 h-5 text-amber-600" />;
    default:
      return null;
  }
};

const LeaderboardWidget = () => {
  return (
    <Card>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Leaderboard</h2>
        <Trophy className="w-6 h-6 text-yellow-400" />
      </div>
      <div className="space-y-4">
        {leaderboard.map((entry, index) => (
          <motion.div
            key={entry.username}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center space-x-4 p-3 bg-black/30 rounded-lg"
          >
            <div className="flex items-center space-x-3">
              <span className="w-6 text-center font-mono">
                {getRankIcon(entry.rank) || `#${entry.rank}`}
              </span>
              <div className="w-8 h-8 bg-accent-blue/20 rounded-full flex items-center justify-center">
                {entry.avatar ? (
                  <img
                    src={entry.avatar}
                    alt={entry.username}
                    className="w-full h-full rounded-full"
                  />
                ) : (
                  <span className="text-sm">{entry.username[0].toUpperCase()}</span>
                )}
              </div>
            </div>
            <div className="flex-1">
              <p className="font-medium">{entry.username}</p>
              <p className="text-sm text-gray-400">{entry.points.toLocaleString()} pts</p>
            </div>
            <div className={`text-sm ${
              entry.trend === 'up' ? 'text-green-400' :
              entry.trend === 'down' ? 'text-red-400' :
              'text-gray-400'
            }`}>
              {entry.trend === 'up' ? '↑' : entry.trend === 'down' ? '↓' : '−'}
            </div>
          </motion.div>
        ))}
      </div>
    </Card>
  );
};

export default LeaderboardWidget;