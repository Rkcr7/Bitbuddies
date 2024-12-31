import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './Auth/AuthProvider';

interface UnauthenticatedRouteProps {
  children: React.ReactNode;
}

const UnauthenticatedRoute = ({ children }: UnauthenticatedRouteProps) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div>Loading...</div>; // Or a loading spinner
  }

  if (user) {
    // If the user is logged in, redirect them to the home page
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default UnauthenticatedRoute; 