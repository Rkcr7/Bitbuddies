import React, { useEffect, useState } from 'react';
import { useAuth } from '../components/Auth/AuthProvider';
import { ProfileHeader } from '../components/Profile/ProfileHeader';
import { ProfileSettings } from '../components/Profile/ProfileSettings';
import { ActivityHistory } from '../components/Profile/ActivityHistory';
import { getProfile, uploadAvatar } from '../lib/profile';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      loadProfile();
    } else {
      setLoading(false);
      setProfile(null);
      navigate('/login');
    }
  }, [user, navigate]);

  const loadProfile = async () => {
    setLoading(true);
    try {
      const data = await getProfile(user.id);
      if (data) {
        setProfile(data);
      } else {
        setProfile(null);
        console.warn('Profile not found for user:', user.id);
      }
    } catch (error) {
      console.error('Error loading profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAvatarUpload = async (file: File) => {
    try {
      const avatarUrl = await uploadAvatar(user.id, file);
      setProfile((prev) => ({ ...prev, avatar_url: avatarUrl }));
    } catch (error) {
      console.error('Error uploading avatar:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-black/30 rounded-lg overflow-hidden">
          {user && (
            <ProfileHeader
              avatarUrl={profile.avatar_url}
              username={profile.username}
              fullName={profile.full_name}
              bio={profile.bio}
              website={profile.website}
              email={user.email}
              onAvatarUpload={handleAvatarUpload}
            />
          )}
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6">
            <div className="lg:col-span-2">
              <ActivityHistory />
            </div>
            <div>
              <ProfileSettings />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;