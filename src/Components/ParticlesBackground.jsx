import React from 'react';
import Particles from './Particles';

const ParticlesBackground = () => {
  const dpr = typeof window !== 'undefined' ? Math.min(window.devicePixelRatio || 1, 2) : 1;
  return (
    <div className="fixed inset-0 w-screen h-screen z-0 pointer-events-none">
      {/* subtle dark overlay above particles to blend with theme */}
      <div className="absolute inset-0 bg-black/20" />
      <Particles
        particleColors={["#178582", "#BFA181", "#ffffff"]}
        particleCount={340}
        particleSpread={12}
        speed={0.12}
        particleBaseSize={140}
        moveParticlesOnHover
        alphaParticles={false}
        particleHoverFactor={0.6}
        disableRotation={false}
        pixelRatio={dpr}
      />
    </div>
  );
};

export default ParticlesBackground;
