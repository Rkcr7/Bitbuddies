import React from 'react';
import { motion } from 'framer-motion';
import { Star, Clock } from 'lucide-react';
import Button from '../ui/Button';

interface ChallengeProps {
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  timeEstimate: string;
  points: number;
  description: string;
}

const ChallengeCard = ({ title, difficulty, timeEstimate, points, description }: ChallengeProps) => {
  const difficultyColor = {
    Easy: 'text-green-400',
    Medium: 'text-yellow-400',
    Hard: 'text-red-400'
  };

  return (
    <motion.div 
      className="bg-black/30 p-6 rounded-xl border border-white/10"
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <span className={difficultyColor[difficulty]}>{difficulty}</span>
      </div>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex items-center justify-between">
        <div className="flex space-x-4 text-sm text-gray-400">
          <span className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {timeEstimate}
          </span>
          <span className="flex items-center">
            <Star className="w-4 h-4 mr-1" />
            {points} points
          </span>
        </div>
        <Button variant="primary" size="sm">Start Challenge</Button>
      </div>
    </motion.div>
  );
};

export default ChallengeCard;