import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Mail, Link as LinkIcon } from 'lucide-react';
import Button from '../ui/Button';

interface ProfileHeaderProps {
  avatarUrl?: string;
  username: string;
  fullName: string;
  bio?: string;
  website?: string;
  email: string;
  onAvatarUpload: (file: File) => void;
}

const ProfileHeader = ({
  avatarUrl,
  username,
  fullName,
  bio,
  website,
  email,
  onAvatarUpload,
}: ProfileHeaderProps) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onAvatarUpload(file);
    }
  };

  return (
    <div className="relative">
      <div className="h-32 bg-gradient-to-r from-accent-blue via-accent-green to-accent-magenta rounded-t-lg" />
      <div className="px-6 pb-6">
        <div className="relative -mt-16 flex items-end space-x-6">
          <div className="relative">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-32 h-32 rounded-full overflow-hidden border-4 border-background bg-black/30"
            >
              {avatarUrl ? (
                <img
                  src={avatarUrl}
                  alt={fullName}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-accent-blue">
                  {fullName[0]}
                </div>
              )}
            </motion.div>
            <label className="absolute bottom-0 right-0 p-2 bg-background rounded-full cursor-pointer hover:bg-white/5 transition-colors">
              <Camera className="w-5 h-5" />
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleFileChange}
              />
            </label>
          </div>

          <div className="flex-1 min-w-0">
            <h1 className="text-2xl font-bold truncate">{fullName}</h1>
            <p className="text-gray-400">@{username}</p>
          </div>

          {/* Remove the non-functional button */}
          {/* <Button variant="secondary" size="sm">
            Edit Profile
          </Button> */}
        </div>

        <div className="mt-6 space-y-4">
          {bio && <p className="text-gray-300">{bio}</p>}
          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>{email}</span>
            </div>
            {website && (
              <div className="flex items-center space-x-2">
                <LinkIcon className="w-4 h-4" />
                <a
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-blue hover:underline"
                >
                  {website}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProfileHeader };