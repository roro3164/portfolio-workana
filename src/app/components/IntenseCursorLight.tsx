"use client";
import { useState, useEffect } from 'react';

const IntenseCursorLight = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(true);

  useEffect(() => {
    let animationFrame: number;
    let timeout: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });

      if (!isMoving) setIsMoving(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsMoving(false), 300);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrame);
      clearTimeout(timeout);
    };
  }, [isMoving]);

  return (
    <div style={{
      position: 'fixed',
      pointerEvents: 'none',
      zIndex: 9999,
      inset: 0,
      background: `
        radial-gradient(
          500px circle at ${position.x}px ${position.y}px,
          rgba(255, 255, 255, 0.45) 0%,
          rgba(255, 255, 255, 0.25) 50%,
          rgba(255, 255, 255, 0) 80%
        )`,
      mixBlendMode: 'soft-light',
      opacity: 1,
      transition: 'opacity 0.5s ease-out',
      filter: 'blur(15px) brightness(1.2)',
      transform: 'translateZ(0)'
    }} />
  );
};

export default IntenseCursorLight;