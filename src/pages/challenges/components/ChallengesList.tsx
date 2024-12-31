import React from 'react';
import { motion } from 'framer-motion';
import ChallengeCard from '../../../components/Challenges/ChallengeCard';

const challenges = [
  {
    title: 'Array Manipulation',
    difficulty: 'Easy',
    timeEstimate: '30 mins',
    points: 100,
    description: 'Practice array methods and transformations',
  },
  {
    title: 'Binary Search Tree',
    difficulty: 'Medium',
    timeEstimate: '45 mins',
    points: 200,
    description: 'Implement a balanced binary search tree',
  },
  {
    title: 'Graph Algorithms',
    difficulty: 'Hard',
    timeEstimate: '60 mins',
    points: 300,
    description: 'Solve complex graph traversal problems',
  },
];

const ChallengesList = () => {
  return (
    <div className="space-y-6">
      {challenges.map((challenge, index) => (
        <motion.div
          key={challenge.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <ChallengeCard {...challenge} />
        </motion.div>
      ))}
    </div>
  );
};

export default ChallengesList;