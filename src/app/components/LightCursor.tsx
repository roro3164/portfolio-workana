"use client";
import { useState, useEffect } from 'react';

export const LightCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9999
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: mousePosition.y,
          left: mousePosition.x,
          width: '600px',
          height: '600px',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.17) 0%, transparent 70%)',
          borderRadius: '50%',
          transition: 'transform 0.1s ease-out'
        }}
      />
    </div>
  );
};

export default LightCursor;