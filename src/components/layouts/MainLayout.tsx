import React from 'react';
import Navigation from '../Navigation';
import MatrixRain from '../ui/MatrixRain';
import HexGrid from '../ui/HexGrid';
import ParticleField from '../ui/ParticleField';
import FloatingIcons from '../ui/FloatingIcons';
import GlowEffect from '../ui/GlowEffect';

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
      
      {/* Glow effects */}
      <GlowEffect 
        color="accent-blue" 
        className="top-0 left-0 w-[500px] h-[500px] opacity-20" 
      />
      <GlowEffect 
        color="accent-magenta" 
        className="bottom-0 right-0 w-[500px] h-[500px] opacity-20" 
      />
      <GlowEffect 
        color="accent-green" 
        className="bottom-0 left-1/2 w-[500px] h-[500px] opacity-20" 
      />
      
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