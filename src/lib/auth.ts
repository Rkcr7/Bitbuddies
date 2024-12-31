import { supabase } from './supabase';
import { useNavigate } from 'react-router-dom';
import { User } from '@supabase/supabase-js';
import { getProfile } from './profile';

interface SignInProps {
  email?: string;
  password?: string;
  remember?: boolean;
  username?: string;
}

export const signIn = async (
  { email, password, remember, username }: SignInProps,
  navigate: useNavigate
) => {
  if (!password || (!email && !username)) {
    throw new Error('Please provide an email or username and password.');
  }

  let user: User | null = null;
  let error: Error | null = null;

  if (email) {
    const {
      data: { user: loggedInUser },
      error: signInError,
    } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    user = loggedInUser;
    error = signInError;
  } else if (username) {
    // Fetch user's email by username from the profiles table
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('email')
      .eq('username', username)
      .single();

    if (profileError || !profile) {
      throw new Error('Invalid login credentials');
    }

    const {
      data: { user: loggedInUser },
      error: signInError,
    } = await supabase.auth.signInWithPassword({
      email: profile.email,
      password,
    });
    user = loggedInUser;
    error = signInError;
  }

  if (error) {
    throw new Error('Invalid login credentials');
  }

  if (remember && user) {
    // Set a cookie or local storage to remember the user
    // Example using localStorage:
    localStorage.setItem('rememberedUser', JSON.stringify(user));
  } else {
    localStorage.removeItem('rememberedUser');
  }

  navigate('/');

  // Preload profile data after successful sign-in
  if (user) {
    try {
      const profile = await getProfile(user.id);
      if (profile) {
        localStorage.setItem('userProfile', JSON.stringify(profile));
      }
    } catch (error) {
      console.error('Error preloading profile:', error);
    }
  }
};

export const signUp = async (
  { email, password, username, fullName }: any,
  navigate: useNavigate
) => {
  if (!email || !password || !username || !fullName) {
    throw new Error('Please provide all required fields.');
  }

  // Check if the username is already taken
  const { data: existingProfiles, error: existingProfileError } = await supabase
    .from('profiles')
    .select('username')
    .eq('username', username);

  if (existingProfileError) {
    throw new Error('Error checking for existing username.');
  }

  // Check if any profiles were returned (meaning username exists)
  if (existingProfiles && existingProfiles.length > 0) {
    throw new Error('Username already taken.');
  }

  const { error: signUpError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username,
        full_name: fullName,
      },
    },
  });

  if (signUpError) {
    throw signUpError;
  }

  // Fetch the newly created user's ID
  const { data: { user }, error: fetchUserError } = await supabase.auth.getUser();

  if (fetchUserError) {
    throw fetchUserError;
  }

  // Insert the user's email into the profiles table
  if (user) {
    const { error: insertError } = await supabase
      .from('profiles')
      .update({ email })
      .eq('id', user.id);

    if (insertError) {
      throw insertError;
    }
  }

  navigate('/');
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    throw error;
  }
};

export const resetPassword = async (email: string) => {
  const { error } = await supabase.auth.resetPasswordForEmail(email);
  if (error) throw error;
};

export const updatePassword = async (newPassword: string) => {
  const { error } = await supabase.auth.updateUser({
    password: newPassword,
  });
  if (error) throw error;
};