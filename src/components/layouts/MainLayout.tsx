import React from 'react';
import Navigation from '../Navigation';
import MatrixRain from '../ui/MatrixRain';
import HexGrid from '../ui/HexGrid';
import ParticleField from '../ui/ParticleField';
import FloatingIcons from '../ui/FloatingIcons';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <ParticleField />
      <FloatingIcons />
      <MatrixRain />
      <HexGrid />
      
      
      <Navigation />
      <div className="fixed inset-0 pt-16 overflow-y-auto">
        <div className="min-h-full relative">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;