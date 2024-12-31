import React, { useState, useEffect } from 'react';
import { Bell, Eye, Shield } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { updateProfile, getProfile, ProfileUpdateData } from '../../lib/profile';
import { useAuth } from '../Auth/AuthProvider';

interface Setting {
  label: string;
  type: 'toggle' | 'select' | 'button';
  default?: boolean;
  options?: string[];
  text?: string;
  field?: string;
}

interface SettingsSection {
  title: string;
  icon: React.ReactNode;
  settings: Setting[];
}

const settingsSections: SettingsSection[] = [
  {
    title: 'Notifications',
    icon: <Bell className="w-5 h-5 text-accent-blue" />,
    settings: [
      {
        label: 'Email notifications',
        type: 'toggle',
        default: true,
        field: 'email_notifications',
      },
      {
        label: 'Achievement alerts',
        type: 'toggle',
        default: true,
        field: 'achievement_alerts',
      },
      {
        label: 'Community mentions',
        type: 'toggle',
        default: true,
        field: 'community_mentions',
      },
    ],
  },
  {
    title: 'Privacy',
    icon: <Eye className="w-5 h-5 text-accent-green" />,
    settings: [
      {
        label: 'Profile visibility',
        type: 'select',
        options: ['Public', 'Private'],
        field: 'privacy_level',
      },
      {
        label: 'Show activity status',
        type: 'toggle',
        default: true,
        field: 'show_activity_status',
      },
      {
        label: 'Show achievements',
        type: 'toggle',
        default: true,
        field: 'show_achievements',
      },
    ],
  },
  {
    title: 'Security',
    icon: <Shield className="w-5 h-5 text-accent-magenta" />,
    settings: [
      {
        label: 'Two-factor authentication',
        type: 'toggle',
        default: false,
        field: 'two_factor_enabled',
      },
      { label: 'Session management', type: 'button', text: 'Manage' },
      { label: 'Change password', type: 'button', text: 'Update' },
    ],
  },
];

const ProfileSettings = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [settingsData, setSettingsData] = useState<ProfileUpdateData | null>(
    null
  );
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const loadSettings = async () => {
      if (user) {
        try {
          const profile = await getProfile(user.id);
          if (profile) {
            setSettingsData(profile);
          }
        } catch (error) {
          console.error('Error loading profile:', error);
        }
      }
    };
    loadSettings();
  }, [user]);

  const handleInputChange = (field: string, value: any) => {
    const normalizedValue =
      field === 'privacy_level' ? String(value).toLowerCase() : value;
    setSettingsData((prev) => ({ ...prev, [field]: normalizedValue }));
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setSuccessMessage('');
  };

  const handleSaveChanges = async () => {
    setIsLoading(true);
    setSuccessMessage('');
    setErrorMessage('');
    try {
      await updateProfile(user.id, settingsData);
      setSuccessMessage('Profile updated successfully!');
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'An unexpected error occurred.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return settingsData ? (
    <div className="space-y-6">
      <div className="flex justify-end">
        {!isEditing ? (
          <Button variant="secondary" size="sm" onClick={handleEditClick}>
            Edit Profile
          </Button>
        ) : (
          <Button
            variant="primary"
            size="sm"
            onClick={handleSaveChanges}
            disabled={isLoading}
          >
            {isLoading ? 'Saving...' : 'Save Changes'}
          </Button>
        )}
      </div>

      {successMessage && (
        <div className="bg-green-500/10 border border-green-500 text-green-500 p-3 rounded-lg">
          {successMessage}
        </div>
      )}

      {errorMessage && (
        <div className="bg-red-500/10 border border-red-500 text-red-500 p-3 rounded-lg">
          {errorMessage}
        </div>
      )}

      {settingsSections.map((section) => (
        <Card key={section.title}>
          <div className="flex items-center space-x-3 mb-6">
            {section.icon}
            <h3 className="text-lg font-semibold">{section.title}</h3>
          </div>
          <div className="space-y-4">
            {section.settings.map((setting) => (
              <div
                key={setting.label}
                className="flex items-center justify-between py-2"
              >
                <span className="text-gray-300">{setting.label}</span>
                {isEditing ? (
                  <>
                    {setting.type === 'toggle' && (
                      <button
                        className={`w-12 h-6 rounded-full p-1 transition-colors ${
                          settingsData[setting.field]
                            ? 'bg-accent-blue'
                            : 'bg-gray-600'
                        }`}
                        onClick={() =>
                          handleInputChange(
                            setting.field!,
                            !settingsData[setting.field]
                          )
                        }
                      >
                        <div
                          className={`w-4 h-4 rounded-full bg-white transition-transform ${
                            settingsData[setting.field]
                              ? 'translate-x-6'
                              : 'translate-x-0'
                          }`}
                        />
                      </button>
                    )}
                    {setting.type === 'select' && (
                      <select
                        className="bg-black/30 rounded-lg px-3 py-1 text-sm"
                        value={settingsData[setting.field] || ''}
                        onChange={(e) =>
                          handleInputChange(setting.field!, e.target.value)
                        }
                      >
                        {setting.options?.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    )}
                  </>
                ) : (
                  <span>
                    {setting.type === 'toggle'
                      ? settingsData[setting.field]
                        ? 'Yes'
                        : 'No'
                      : settingsData[setting.field]}
                  </span>
                )}
              </div>
            ))}
          </div>
        </Card>
      ))}
    </div>
  ) : (
    <div>Loading settings...</div>
  );
};

export { ProfileSettings };