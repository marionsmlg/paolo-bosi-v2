import React from 'react';

const Grain: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[90] overflow-hidden opacity-[0.15] mix-blend-multiply dark:mix-blend-overlay">
      <div className="w-[300%] h-[300%] absolute top-[-100%] left-[-100%] animate-[grain_8s_steps(10)_infinite]"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`,
             backgroundSize: '150px 150px'
           }}
      />
    </div>
  );
};

export default Grain;