import React from 'react';
import { Filter, Star, Clock } from 'lucide-react';
import Card from '../../../components/ui/Card';

const ChallengeFilters = () => {
  return (
    <Card>
      <div className="space-y-6">
        <div className="flex items-center space-x-2">
          <Filter className="w-5 h-5 text-accent-blue" />
          <h3 className="font-semibold">Filters</h3>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Difficulty</label>
            <select className="w-full bg-black/30 rounded-lg px-3 py-2">
              <option value="">All</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Points Range</label>
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-accent-green" />
              <input
                type="range"
                className="w-full"
                min="0"
                max="500"
                step="50"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Time</label>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-accent-magenta" />
              <select className="w-full bg-black/30 rounded-lg px-3 py-2">
                <option value="">Any</option>
                <option value="15">15 mins</option>
                <option value="30">30 mins</option>
                <option value="60">1 hour</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ChallengeFilters;