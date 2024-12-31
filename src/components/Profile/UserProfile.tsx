import React from 'react';
import { User, Award, Calendar } from 'lucide-react';
import Card from '../ui/Card';
import { useAuth } from '../Auth/AuthProvider';

const UserProfile = () => {
  const { user } = useAuth();

  return (
    <Card className="p-6">
      <div className="flex items-center space-x-4 mb-6">
        {user?.avatar_url ? (
          <img
            src={user.avatar_url}
            alt={user.full_name}
            className="w-16 h-16 rounded-full object-cover"
          />
        ) : (
          <div className="w-16 h-16 bg-accent-blue/20 rounded-full flex items-center justify-center">
            <User className="w-8 h-8 text-accent-blue" />
          </div>
        )}
        <div>
          <h2 className="text-2xl font-bold">{user?.full_name || 'User Name'}</h2>
          <p className="text-gray-400">@{user?.username || 'Code Explorer'}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-black/20 p-4 rounded-lg">
          <Award className="w-6 h-6 text-accent-green mb-2" />
          <div className="text-2xl font-bold">1,234</div>
          <div className="text-sm text-gray-400">Points Earned</div>
        </div>
        <div className="bg-black/20 p-4 rounded-lg">
          <Calendar className="w-6 h-6 text-accent-magenta mb-2" />
          <div className="text-2xl font-bold">15</div>
          <div className="text-sm text-gray-400">Day Streak</div>
        </div>
      </div>
    </Card>
  );
};

export default UserProfile;