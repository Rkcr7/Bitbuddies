import React from 'react';
import { Code, Brain, Zap } from 'lucide-react';
import AchievementCard from './AchievementCard';

const achievements = [
  {
    title: 'Code Warrior',
    description: 'Complete 100 coding challenges',
    progress: 65,
    icon: <Code className="w-6 h-6 text-accent-blue" />
  },
  {
    title: 'Algorithm Master',
    description: 'Master advanced algorithms',
    progress: 40,
    icon: <Brain className="w-6 h-6 text-accent-green" />
  },
  {
    title: 'Quick Solver',
    description: 'Solve challenges under time pressure',
    progress: 80,
    icon: <Zap className="w-6 h-6 text-accent-magenta" />
  }
];

const AchievementsSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Your Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement) => (
            <AchievementCard key={achievement.title} {...achievement} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;