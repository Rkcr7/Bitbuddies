import { supabase } from './supabase';

export interface ProfileUpdateData {
  username?: string;
  full_name?: string;
  bio?: string;
  website?: string;
  privacy_level?: 'public' | 'private';
  email_notifications?: boolean;
  achievement_alerts?: boolean;
  community_mentions?: boolean;
  show_activity_status?: boolean;
  show_achievements?: boolean;
  two_factor_enabled?: boolean;
}

export const getProfile = async (userId: string) => {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) throw error;
  return data;
};

export const updateProfile = async (
  userId: string,
  profileData: ProfileUpdateData
) => {
  const { error } = await supabase
    .from('profiles')
    .update(profileData)
    .eq('id', userId);

  if (error) {
    throw error;
  }
};

export const uploadAvatar = async (userId: string, file: File) => {
  const fileExt = file.name.split('.').pop();
  const fileName = `${userId}-${Math.random()}.${fileExt}`;
  const filePath = `avatars/${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from('avatars')
    .upload(filePath, file);

  if (uploadError) throw uploadError;

  const { data: { publicUrl } } = supabase.storage
    .from('avatars')
    .getPublicUrl(filePath);

  const { error: updateError } = await supabase
    .from('profiles')
    .update({ avatar_url: publicUrl })
    .eq('id', userId);

  if (updateError) throw updateError;

  return publicUrl;
};