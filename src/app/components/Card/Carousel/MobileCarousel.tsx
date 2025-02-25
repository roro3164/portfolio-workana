"use client";
import React, { useState } from "react";
import { Project } from "./types";
import { ProjectCard } from "./ProjectCard";
import { getCardClasses } from "../NormalCard/utils";
import styles from "./Carousel.module.scss";
import { BaseCard } from "../BaseCard/BaseCard";
import VioletHover from "../hover/VioletHover";

interface MobileProjectCarouselProps {
  projects: Project[];
}

export const MobileCarousel = ({ projects }: MobileProjectCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isChangingContent, setIsChangingContent] = useState(false);
  const [currentProject, setCurrentProject] = useState(projects[0]);
  const [isExiting, setIsExiting] = useState(false);

  const classes = getCardClasses({ imageAlign: "left" });

  const handleSwipe = (isLeftSwipe: boolean) => {
    setIsExiting(true);
    setIsChangingContent(true);

    setTimeout(() => {
      const newIndex = isLeftSwipe
        ? (activeIndex + 1) % projects.length
        : (activeIndex - 1 + projects.length) % projects.length;

      setActiveIndex(newIndex);
      setCurrentProject(projects[newIndex]);
      setIsExiting(false);
    }, 300);

    setTimeout(() => {
      setIsChangingContent(false);
    }, 600);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    if (Math.abs(distance) > 50) {
      handleSwipe(distance > 0);
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  const getCardStyle = (index: number) => {
    const diff = (index - activeIndex + projects.length) % projects.length;
    const isActive = diff === 0;
    let transform = isActive
      ? isExiting
        ? "translate(-180%, -10%) rotate(-12deg)"
        : "translate(-45%, -8%) rotate(-12deg) scale(0.95)"
      : `translate(calc(-50% + ${diff * 12}px), -${diff}px)`;

    return {
      position: "absolute" as const,
      left: "45%",
      top: "0%",
      transform,
      zIndex: projects.length - diff,
    };
  };

  return (
    <BaseCard
      title={
        <div className={isChangingContent ? styles.fadeOut : styles.fadeIn}>
          {currentProject.title}
        </div>
      }
      titleAlignment={classes.titleAlignment}
      cardAlignment={classes.cardAlignement}
    >
      <VioletHover>
        <div className="bg-[#100E12]">
          <div className={`${styles.internBox} w-full`}>
            <div
              className="relative h-80 w-full"
              onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
              onTouchMove={(e) => setTouchEnd(e.touches[0].clientX)}
              onTouchEnd={handleTouchEnd}
            >
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  style={getCardStyle(index)}
                  className={`
                w-56 h-80
                ${styles.cardWrapper}
                ${
                  index !== activeIndex
                    ? styles.inactiveCard
                    : styles.activeCard
                }
              `}
                >
                  <ProjectCard
                    imageProject={project.imageProject}
                    logoProject={project.logoProject}
                  />
                </div>
              ))}
            </div>

            <div
              className={`
          px-4 w-full
          ${isChangingContent ? styles.fadeOut : styles.fadeIn}
        `}
            >
              <p className="text-gray-300 text-center leading-relaxed">
                {currentProject.description}
              </p>
            </div>
          </div>
        </div>
      </VioletHover>
    </BaseCard>
  );
};
