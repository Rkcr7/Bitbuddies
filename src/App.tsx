import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import { LoginPage } from './pages/Login';
import ProfilePage from './pages/Profile';
import ChallengesPage from './pages/challenges/ChallengesPage';
import DashboardPage from './pages/dashboard/DashboardPage';
import CommunityPage from './pages/community/CommunityPage';
// import LearnPage from './pages/learn/LearnPage';
import MatrixRain from './components/ui/MatrixRain';
import HexGrid from './components/ui/HexGrid';
import './styles/globals.css';
import ProtectedRoute from './components/ProtectedRoute';
import UnauthenticatedRoute from './components/UnauthenticatedRoute';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <MatrixRain />
      <HexGrid />
      <Navigation />
      <Routes>
        <Route path="/login" element={<UnauthenticatedRoute><LoginPage /></UnauthenticatedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
        <Route path="/challenges" element={<ProtectedRoute><ChallengesPage /></ProtectedRoute>} />
        <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
        <Route path="/community" element={<ProtectedRoute><CommunityPage /></ProtectedRoute>} />
        {/* <Route path="/learn" element={<ProtectedRoute><LearnPage /></ProtectedRoute>} /> */}
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
    </div>
  );
}

export default App;