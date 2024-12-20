// ImageDev.tsx
import React from 'react';
import NeonBackground from './NeonBackground'; // Import du fond

const ImageDev: React.FC = () => {
  return (
    <div className="relative h-[30vh] sm:h-[50vh] lg:h-[65vh] xl:h-[75vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <NeonBackground /> 
      </div>

      <div className="absolute top-0 left-0 w-full h-8 pointer-events-none z-20" 
           style={{ background: "linear-gradient(to bottom, #0F0E12, transparent)" }} />
      <div className="absolute bottom-0 left-0 w-full h-8 pointer-events-none z-20" 
           style={{ background: "linear-gradient(to top, #0F0E12, transparent)" }} />

      <div className="relative z-30 flex justify-center items-center h-full">
        <img 
          className="max-h-full max-w-full object-contain block" 
          src="/image/pictures/portraitDev.png" 
          alt="portrait dev" />
      </div>
    </div>
  );
};

export default ImageDev;