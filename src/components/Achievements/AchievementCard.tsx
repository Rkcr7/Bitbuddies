import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

interface AchievementProps {
  title: string;
  description: string;
  progress: number;
  icon?: React.ReactNode;
}

const AchievementCard = ({ title, description, progress, icon = <Trophy /> }: AchievementProps) => {
  return (
    <motion.div 
      className="bg-black/30 p-6 rounded-xl border border-white/10"
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex items-start space-x-4">
        <div className="p-3 bg-accent-blue/20 rounded-lg">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <p className="text-sm text-gray-400 mb-3">{description}</p>
          <div className="w-full h-2 bg-black/50 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-accent-blue"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AchievementCard;