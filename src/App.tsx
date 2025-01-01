import React, { Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MainLayout from './components/layouts/MainLayout';
import Hero from './components/Hero';
import Features from './components/Features';
import { LoginPage } from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import UnauthenticatedRoute from './components/UnauthenticatedRoute';
import LoadingSpinner from './components/ui/LoadingSpinner';
import './styles/globals.css';

// Lazy load pages for better performance
const ProfilePage = React.lazy(() => import('./pages/Profile'));
const ChallengesPage = React.lazy(() => import('./pages/challenges/ChallengesPage'));
const DashboardPage = React.lazy(() => import('./pages/dashboard/DashboardPage'));
const CommunityPage = React.lazy(() => import('./pages/community/CommunityPage'));

function App() {
  const location = useLocation();

  return (
    <MainLayout>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/login" element={
            <UnauthenticatedRoute>
              <LoginPage />
            </UnauthenticatedRoute>
          } />
          <Route path="/profile" element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          } />
          <Route path="/challenges" element={
            <ProtectedRoute>
              <ChallengesPage />
            </ProtectedRoute>
          } />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          } />
          <Route path="/community" element={
            <ProtectedRoute>
              <CommunityPage />
            </ProtectedRoute>
          } />
          <Route
            path="/"
            element={
              <main>
                <Hero />
                <Features />
              </main>
            }
          />
        </Routes>
      </Suspense>
    </MainLayout>
  );
}

export default App;