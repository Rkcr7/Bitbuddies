import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';

const paths = [
  { id: 1, title: 'HTML & CSS Basics', level: 'Beginner', progress: 100 },
  { id: 2, title: 'JavaScript Fundamentals', level: 'Beginner', progress: 75 },
  { id: 3, title: 'React Essentials', level: 'Intermediate', progress: 30 },
  { id: 4, title: 'Advanced Algorithms', level: 'Advanced', progress: 10 },
];

const LearningPath = () => {
  return (
    <div className="py-16">
      <h2 className="text-3xl font-bold mb-8">Your Learning Path</h2>
      <div className="space-y-4">
        {paths.map((path) => (
          <Card key={path.id} className="relative overflow-hidden">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold">{path.title}</h3>
                <span className="text-sm text-gray-400">{path.level}</span>
              </div>
              <span className="text-2xl font-bold">{path.progress}%</span>
            </div>
            <motion.div 
              className="absolute bottom-0 left-0 h-1 bg-accent-blue"
              initial={{ width: 0 }}
              animate={{ width: `${path.progress}%` }}
              transition={{ duration: 1 }}
            />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LearningPath;