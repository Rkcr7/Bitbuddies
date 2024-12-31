-- Add new columns to the profiles table
ALTER TABLE profiles
ADD COLUMN email_notifications BOOLEAN DEFAULT TRUE,
ADD COLUMN achievement_alerts BOOLEAN DEFAULT TRUE,
ADD COLUMN community_mentions BOOLEAN DEFAULT TRUE,
ADD COLUMN show_activity_status BOOLEAN DEFAULT TRUE,
ADD COLUMN show_achievements BOOLEAN DEFAULT TRUE,
ADD COLUMN two_factor_enabled BOOLEAN DEFAULT FALSE; 