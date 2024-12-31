import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from 'react';
import { supabase } from '../../lib/supabase';
import { signOut } from '../../lib/auth';
import { getProfile } from '../../lib/profile';
import { useNavigate } from 'react-router-dom';

interface AuthContextType {
  user: any;
  loading: boolean;
  signIn: () => void;
  signUp: () => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const initializeUser = async () => {
      setLoading(true);
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();
        if (session) {
          const profile = await getProfile(session.user.id);
          setUser({ ...session.user, ...profile });
        } else {
          // Check if there's a remembered user in local storage
          const rememberedUser = localStorage.getItem('rememberedUser');
          if (rememberedUser) {
            const user = JSON.parse(rememberedUser);
            // Sign in the user with the remembered credentials
            const { error } = await supabase.auth.signInWithPassword({
              email: user.email,
              password: user.password, // Note: Storing plain passwords is not recommended for production
            });
            if (!error) {
              const profile = await getProfile(user.id);
              setUser({ ...user, ...profile });
            } else {
              console.error('Error signing in remembered user:', error);
              localStorage.removeItem('rememberedUser');
            }
          }
        }
      } catch (error) {
        console.error('Error initializing user:', error);
      } finally {
        setLoading(false);
      }
    };

    initializeUser();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        try {
          if (event === 'SIGNED_IN' || event === 'INITIAL_SESSION') {
            if (session) {
              fetchUser();
            }
          } else if (event === 'SIGNED_OUT') {
            setUser(null);
            navigate('/login');
          }
        } catch (error) {
          console.error('Authentication state change error:', error);
        }
      }
    );

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, [navigate]);

  const fetchUser = async () => {
    setLoading(true);
    try {
      const session = await supabase.auth.getSession();
      if (session?.data?.session?.user) {
        let profile = null;
        const cachedProfile = localStorage.getItem('userProfile');

        if (cachedProfile) {
          profile = JSON.parse(cachedProfile);
          setUser({ ...session.data.session.user, ...profile });
        }

        // Fetch profile in the background, even if it's cached
        const fetchedProfile = await getProfile(session.data.session.user.id);
        if (fetchedProfile) {
          localStorage.setItem('userProfile', JSON.stringify(fetchedProfile));
          // Only update the user state if it's different from the cached profile
          if (JSON.stringify(fetchedProfile) !== JSON.stringify(profile)) {
            setUser({ ...session.data.session.user, ...fetchedProfile });
          }
        }
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      setUser(null);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const value: AuthContextType = {
    user,
    loading,
    signIn: () => {},
    signUp: () => {},
    signOut: handleSignOut,
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};