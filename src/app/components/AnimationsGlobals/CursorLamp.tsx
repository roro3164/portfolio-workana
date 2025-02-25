"use client";
import { useState, useEffect } from 'react';

const CursorLight = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);
      clearTimeout(timer);
      timer = setTimeout(() => setIsMoving(false), 100);
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      pointerEvents: 'none',
      zIndex: 9999,
      background: `radial-gradient(
        400px circle at ${position.x}px ${position.y}px,
        rgba(255, 255, 255, 0.25) 0%,
        rgba(255, 255, 255, 0) 70%
      )`,
      mixBlendMode: 'soft-light',
      opacity: isMoving ? 1 : 0,
      transition: 'opacity 0.4s ease-out',
     
    }} />
  );
};

export default CursorLight;