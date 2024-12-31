import React from 'react';
import { Home, Code2, LayoutDashboard, Users, BookOpen, LogIn, UserCircle } from 'lucide-react';
import { useAuth } from './Auth/AuthProvider';
import Logo from './Logo';
import MobileNav from './MobileNav';
import Button from './ui/Button';
import { Link, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const navItems = [
    { label: 'Home', icon: <Home className="w-5 h-5" />, path: '/' },
    { label: 'Challenges', icon: <Code2 className="w-5 h-5" />, path: '/challenges' },
    { label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" />, path: '/dashboard' },
    { label: 'Community', icon: <Users className="w-5 h-5" />, path: '/community' },
    { label: 'Learn', icon: <BookOpen className="w-5 h-5" />, path: '/learn' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/">
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

          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Link to="/profile">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="flex items-center space-x-2"
                  >
                    {user.avatar_url ? (
                      <img
                        src={user.avatar_url}
                        alt={user.full_name}
                        className="w-5 h-5 rounded-full"
                      />
                    ) : (
                      <UserCircle className="w-5 h-5" />
                    )}
                    <span>{user.username}</span>
                  </Button>
                </Link>
                <Button variant="secondary" size="sm" onClick={signOut}>
                  Sign Out
                </Button>
              </>
            ) : (
              <Link to="/login">
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
          </div>

          <MobileNav navItems={navItems} />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;