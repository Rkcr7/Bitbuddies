import React from 'react';
import { Home, Code2, LayoutDashboard, Users, LogIn, UserCircle, LogOut } from 'lucide-react';
import { useAuth } from './Auth/AuthProvider';
import Logo from './Logo';
import MobileNav from './MobileNav';
import Button from './ui/Button';
import Dropdown from './ui/Dropdown';
import { Link, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const navItems = [
    { label: 'Home', icon: <Home className="w-5 h-5" />, path: '/' },
    { label: 'Challenges', icon: <Code2 className="w-5 h-5" />, path: '/challenges' },
    { label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" />, path: '/dashboard' },
    { label: 'Community', icon: <Users className="w-5 h-5" />, path: '/community' },
  ];

  const ProfileTrigger = () => (
    <Button
      variant="secondary"
      size="sm"
      className="flex items-center space-x-2 px-3 py-2 relative"
    >
      <span className="absolute inset-0 rounded-lg" style={{
        background: 'linear-gradient(to right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2))',
        boxShadow: '0 0 4px rgba(255, 255, 255, 0.4), 0 0 8px rgba(255, 255, 255, 0.2), 0 0 12px rgba(255, 255, 255, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        padding: '1px'
      }}></span>
      
      {user?.avatar_url ? (
        <img
          src={user.avatar_url}
          alt={user.full_name}
          className="w-8 h-8 rounded-full relative z-10 -ml-1"
        />
      ) : (
        <UserCircle className="w-8 h-8 relative z-10 -ml-1" />
      )}
      <span className="text-base relative z-10">{user?.username}</span>
    </Button>
  );

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex-shrink-0">
            <Logo />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-2 md:space-x-4">
            {user ? (
              <div className="hidden sm:block">
                <Dropdown trigger={<ProfileTrigger />}>
                  <div className="py-2">
                    <Link
                      to="/profile"
                      className="flex items-center space-x-2 px-4 py-2 text-sm hover:bg-white/5 transition-colors"
                    >
                      <UserCircle className="w-4 h-4" />
                      <span>Profile</span>
                    </Link>
                    <button
                      onClick={signOut}
                      className="flex items-center space-x-2 w-full px-4 py-2 text-sm text-red-400 hover:bg-white/5 transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </Dropdown>
              </div>
            ) : (
              <Link to="/login" className="hidden sm:block">
                <Button
                  variant="primary"
                  size="sm"
                  className="flex items-center space-x-2"
                >
                  <LogIn className="w-5 h-5" />
                  <span>Sign In</span>
                </Button>
              </Link>
            )}
            <div className="flex md:hidden">
              <MobileNav 
                navItems={navItems} 
                user={user} 
                onSignOut={signOut}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;