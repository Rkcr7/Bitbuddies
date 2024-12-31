import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award } from 'lucide-react';
import Card from '../../../components/ui/Card';

interface Contributor {
  username: string;
  avatar?: string;
  contributions: number;
  expertise: string[];
}

const contributors: Contributor[] = [
  {
    username: 'techGuru',
    contributions: 342,
    expertise: ['React', 'Node.js'],
  },
  {
    username: 'codeArtist',
    contributions: 289,
    expertise: ['TypeScript', 'Python'],
  },
  {
    username: 'debugMaster',
    contributions: 256,
    expertise: ['Java', 'Algorithms'],
  },
];

const TopContributors = () => {
  return (
    <Card>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Top Contributors</h2>
        <Award className="w-6 h-6 text-yellow-400" />
      </div>
      <div className="space-y-4">
        {contributors.map((contributor, index) => (
          <motion.div
            key={contributor.username}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center space-x-4 p-4 bg-black/30 rounded-lg"
          >
            <div className="w-10 h-10 bg-accent-blue/20 rounded-full flex items-center justify-center">
              {contributor.avatar ? (
                <img
                  src={contributor.avatar}
                  alt={contributor.username}
                  className="w-full h-full rounded-full"
                />
              ) : (
                <span className="text-lg">{contributor.username[0].toUpperCase()}</span>
              )}
            </div>
            <div className="flex-1">
              <p className="font-medium">{contributor.username}</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {contributor.expertise.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-xs bg-accent-blue/20 text-accent-blue rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center text-yellow-400">
              <Star className="w-4 h-4 mr-1" />
              <span>{contributor.contributions}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </Card>
  );
};

export default TopContributors;