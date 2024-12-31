import React from 'react';
import { Code2, Trophy, Users, Zap } from 'lucide-react';
import Card from './ui/Card';

const features = [
  {
    icon: <Code2 className="w-8 h-8 text-accent-blue" />,
    title: 'Interactive Challenges',
    description: 'Learn by doing with our hands-on coding challenges across multiple languages and difficulty levels.'
  },
  {
    icon: <Trophy className="w-8 h-8 text-accent-green" />,
    title: 'Achievement System',
    description: 'Earn badges, unlock achievements, and track your progress as you master new skills.'
  },
  {
    icon: <Users className="w-8 h-8 text-accent-magenta" />,
    title: 'Community Learning',
    description: 'Join a vibrant community of learners, share solutions, and learn from peers.'
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    title: 'Instant Feedback',
    description: 'Get real-time feedback on your code with detailed explanations and suggestions.'
  }
];

const Features = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Level Up Your Skills
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Master coding through our innovative learning platform designed to make programming fun and engaging.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:scale-105 transition-transform duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;