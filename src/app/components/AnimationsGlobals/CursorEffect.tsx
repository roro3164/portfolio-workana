"use client";
import { useState, useEffect } from 'react';

export const CursorEffect = () => {
 const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

 useEffect(() => {
   const updateMousePosition = (e: MouseEvent) => {
     setMousePosition({ x: e.clientX, y: e.clientY });
   };

   window.addEventListener('mousemove', updateMousePosition);
   return () => window.removeEventListener('mousemove', updateMousePosition);
 }, []);

 return (
    <div 
    style={{
      position: 'fixed',
      left: mousePosition.x - 400,
      top: mousePosition.y - 400,
      pointerEvents: 'none',
      zIndex: 9999,
      transition: 'all 0.1s ease-out'
    }}
  >
    <img 
      src="/image/pictures/Ellipse 112.png" 
      alt=""
      width="1000"
      height="1000"
      style={{
        
        opacity: 0.1
      }}
    />
    
  </div>
 );
};