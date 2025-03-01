"use client"
import React, { useEffect, useState, useRef } from 'react';

const LaptopAnimation = () => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const totalFrames = 18;
  const frameDelay = 40; // ms entre chaque frame
  
  // Chemins des images pour l'animation
  const imagePaths = [
    "/image/laptopAnimation/laptop1.png",
    "/image/laptopAnimation/laptop2.png",
    "/image/laptopAnimation/laptop3.png",
    "/image/laptopAnimation/laptop4.png",
    "/image/laptopAnimation/laptop5.png",
    "/image/laptopAnimation/laptop6.png",
    "/image/laptopAnimation/laptop7.png",
    "/image/laptopAnimation/laptop8.png",
    "/image/laptopAnimation/laptop9.png",
    "/image/laptopAnimation/laptop10.png",
    "/image/laptopAnimation/laptop11.png",
    "/image/laptopAnimation/laptop12.png",
    "/image/laptopAnimation/laptop13.png",
    "/image/laptopAnimation/laptop14.png",
    "/image/laptopAnimation/laptop15.png",
    "/image/laptopAnimation/laptop16.png",
    "/image/laptopAnimation/laptop17.png",
    "/image/laptopAnimation/laptop18.png"
  ];

  // Préchargement des images
  useEffect(() => {
    const preloadImages = async () => {
      for (const path of imagePaths) {
        const img = new Image();
        img.src = path;
      }
    };
    
    preloadImages();
  }, []);

  // Gérer l'animation
  useEffect(() => {
    if (isVisible && currentFrame < totalFrames - 1) {
      // Animation d'ouverture
      animationRef.current = setTimeout(() => {
        setCurrentFrame(prevFrame => prevFrame + 1);
      }, frameDelay);
    } else if (!isVisible && currentFrame > 0) {
      // Animation de fermeture
      animationRef.current = setTimeout(() => {
        setCurrentFrame(prevFrame => prevFrame - 1);
      }, frameDelay);
    }

    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, [currentFrame, isVisible]);

  // Observer l'élément pour voir quand il entre dans la vue
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5, // Déclencher quand 30% de l'élément est visible
        rootMargin: "-100px", // Déclencher un peu avant que l'élément soit complètement visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Vérifier si le laptop est complètement ouvert (dernière frame)
  const isFullyOpen = currentFrame === totalFrames - 1;

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div 
        ref={containerRef} 
        className="w-full h-screen flex items-center justify-center"
      >
        <div 
          className={`relative max-w-[90%] transition-transform duration-300 ease-in-out ${
            isFullyOpen ? 'hover:scale-110 cursor-pointer' : ''
          }`}
        >
          <img 
            src={imagePaths[currentFrame]} 
            alt={`Animation de laptop, frame ${currentFrame + 1}`}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default LaptopAnimation;