"use client";
import React, { createContext, useState, useContext, useEffect } from 'react';

// Étapes d'animation
export type AnimationStage = 
  | 'overlay' 
  | 'background' 
  | 'components' 
  | 'interactive' 
  | 'complete';

interface AnimationContextType {
  stage: AnimationStage;
  setStage: (stage: AnimationStage) => void;
  progress: number; // 0-100
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export const AnimationProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [stage, setStage] = useState<AnimationStage>('overlay');
  const [progress, setProgress] = useState(0);
  
  // Automatisation de la progression des animations
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (stage === 'overlay') {
      // L'overlay se termine automatiquement via son propre timer
    } else if (stage === 'background') {
      timeout = setTimeout(() => setStage('components'), 800);
    } else if (stage === 'components') {
      timeout = setTimeout(() => setStage('interactive'), 1000);
    } else if (stage === 'interactive') {
      timeout = setTimeout(() => setStage('complete'), 800);
    }
    
    // Mise à jour du pourcentage de progression
    setProgress(
      stage === 'overlay' ? 0 :
      stage === 'background' ? 25 :
      stage === 'components' ? 50 :
      stage === 'interactive' ? 75 : 100
    );
    
    return () => clearTimeout(timeout);
  }, [stage]);
  
  return (
    <AnimationContext.Provider value={{ stage, setStage, progress }}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimation = () => {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error('useAnimation must be used within an AnimationProvider');
  }
  return context;
};