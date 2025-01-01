import React, { useState } from 'react';
import { Menu, X, LogIn, LogOut, UserCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import Button from './ui/Button';

interface MobileNavProps {
  navItems: Array<{
    label: string;
    icon: React.ReactNode;
    path: string;
  }>;
  user: any;
  onSignOut: () => void;
}

const MobileNav = ({ navItems, user, onSignOut }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  const handleSignOut = () => {
    onSignOut();
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button
        variant="secondary"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        className="!p-2"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-14 right-0 w-56 bg-background/95 backdrop-blur border border-white/10 rounded-lg shadow-lg overflow-hidden"
          >
            <nav className="py-2">
              {user && (
                <Link
                  to="/profile"
                  className="flex items-center space-x-2 px-4 py-3 hover:bg-white/5"
                  onClick={() => setIsOpen(false)}
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
                </Link>
              )}
              
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item.path)}
                  className="flex items-center space-x-2 w-full px-4 py-3 text-left hover:bg-white/5 transition-colors"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
              
              {user ? (
                <button
                  onClick={handleSignOut}
                  className="flex items-center space-x-2 w-full px-4 py-3 text-left hover:bg-white/5 text-red-400"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Sign Out</span>
                </button>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center space-x-2 px-4 py-3 hover:bg-white/5 text-accent-blue"
                  onClick={() => setIsOpen(false)}
                >
                  <LogIn className="w-5 h-5" />
                  <span>Sign In</span>
                </Link>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;