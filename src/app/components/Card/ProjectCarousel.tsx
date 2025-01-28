"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { Project } from './types';
import BaseCard from './BaseCard';
import { ProjectCard } from './ProjectCard';
import styles from './styles/card.module.scss';
import { getCardClasses } from './styles/utils';

interface ProjectCarouselProps {
  projects: Project[];
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects }) => {
  const classes = getCardClasses({ imageAlign: 'left' });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const nextSlide = useCallback(() => {
    if (isAnimating || selectedCard !== null) return;
    setIsAnimating(true);
    setIsExiting(true);
    
    setTimeout(() => {
      setIsExiting(false);
      setActiveIndex((current) => (current + 1) % projects.length);
    }, 400);

    setTimeout(() => setIsAnimating(false), 800);
  }, [isAnimating, projects.length, selectedCard]);

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | undefined;
    
    if (!isPaused && selectedCard === null) {
      intervalId = setInterval(() => {
        nextSlide();
      }, 3000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isPaused, nextSlide, selectedCard]);

  const getCardStyle = (index: number) => {
    const diff = (index - activeIndex + projects.length) % projects.length;
    const isActive = diff === 0;
    const isSelected = selectedCard === index;
    
    let transform = '';
    const zIndex = projects.length - diff;
    
    if (isActive) {
      if (isExiting && !isSelected) {
        transform = 'translate(-250%, -10%) rotate(-12deg)';
      } else if (isSelected) {
        transform = 'translate(-120%, -10%) rotate(-12deg) scale(1.1)';
      } else {
        transform = 'translate(-60%, -10%) rotate(-12deg)';
      }
    } else {
      const offset = diff * 6;
      transform = `translate(calc(-50% + ${offset}px), -${offset}px)`;
    }

    const opacity = Math.max(1 - diff * 0.2, 0.4);
    const scale = (isActive && isPaused) || isSelected ? 'scale(1.1)' : 'scale(1)';
    transform = `${transform} ${scale}`;

    return {
      transform,
      zIndex,
      opacity,
      transition: 'all 0.7s ease-in-out',
    };
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    if (selectedCard === null) {
      setIsPaused(false);
    }
  };

  const handleCardClick = (index: number) => {
    if (index === activeIndex) {
      setSelectedCard(selectedCard === null ? index : null);
      setIsPaused(selectedCard === null);
    }
  };

  return (
    <BaseCard 
    title={selectedCard !== null ? projects[selectedCard].title || 'Project' : 'Projects'} 
    titleAlignment={classes.titleAlignment}
  >
        <div className={`relative w-full  flex items-center justify-center ${styles.internBox}`}>
        <div className="relative w-48 h-80">
          {projects.map((project, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={project.id}
                style={{
                  ...getCardStyle(index),
                  position: 'absolute',
                  left: '-50%',
                  top: '-20%',
                }}
                onMouseEnter={isActive ? handleMouseEnter : undefined}
                onMouseLeave={isActive ? handleMouseLeave : undefined}
                onClick={() => handleCardClick(index)}
                className="cursor-pointer"
              >
                <ProjectCard
                  imageProject={project.imageProject}
                  logoProject={project.logoProject}
                />
              </div>
            );
          })}
        </div>

        {selectedCard !== null && (
          <div 
            className="absolute left-1/2 ml-32 w-96 text-white opacity-0"
            style={{ 
              animation: 'fadeIn 0.5s ease-out forwards',
              zIndex: projects.length + 1
            }}
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              {projects[selectedCard].description}
            </p>
          </div>
        )}
      
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </BaseCard>
  );
};

export default ProjectCarousel;