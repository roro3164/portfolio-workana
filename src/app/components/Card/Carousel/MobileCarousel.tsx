"use client";
import React, { useState } from "react";
import { Project } from "./types";
import { ProjectCard } from "./ProjectCard";
import { getCardClasses } from "../NormalCard/utils";
import styles from "./Carousel.module.scss";
import { BaseCard } from "../BaseCard/BaseCard";
import VioletHover from "../hover/VioletHover";
import { CircleListItem } from "../ServiceCard/CircleListItem";

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
    if (touchStart === null || touchEnd === null) return;

    const distance = touchStart - touchEnd;
    if (Math.abs(distance) > 50) {
      handleSwipe(distance > 0);
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  const handleCardClick = (index: number) => {
    if (index === activeIndex && projects[index].moreInfoUrl) {
      window.open(projects[index].moreInfoUrl, "_blank", "noopener,noreferrer");
    }
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
      transition: "all 0.3s ease-in-out",
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
            {/* Partie Carrousel */}
            <div
              className="relative h-80 w-full overflow-visible"
              onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
              onTouchMove={(e) => setTouchEnd(e.touches[0].clientX)}
              onTouchEnd={handleTouchEnd}
            >
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  style={getCardStyle(index)}
                  onClick={() => handleCardClick(index)}
                  className={`
                    w-56 h-80
                    ${styles.cardWrapper}
                    ${
                      index !== activeIndex
                        ? "opacity-50 blur-[1px]"
                        : "cursor-pointer"
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

            {/* Points indicateurs */}
            <div className="flex justify-center gap-2 mt-4 pb-4">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === activeIndex ? "bg-[#8b5cf680]" : "bg-gray-600"
                  }`}
                  aria-label={`Aller au projet ${index + 1}`}
                />
              ))}
            </div>

            {/* Partie Description */}
            <div
              className={`px-4 w-full ${
                isChangingContent ? styles.fadeOut : styles.fadeIn
              }`}
            >
              <div className="flex flex-col gap-4">
                {/* Introduction */}
                <p className="text-gray-300 text-base leading-relaxed">
                  {currentProject.description?.split("\n\n")[0]}
                </p>

                {/* Sections avec titre et listes */}
                {currentProject.sections?.map((section, index) => (
                  <div key={index} className="flex flex-col gap-3">
                    <h3
                      className={`
            text-left
            text-white text-sm font-jakarta font-semibold
            py-0.5 px-3 w-fit rounded-full
            ${styles.titleBox}
          `}
                    >
                      {section.title}
                    </h3>
                    <div className="space-y-2">
                      {section.content.map((item, itemIndex) => (
                        <CircleListItem
                          className="min-w-4 h-4 text-xs"
                          key={itemIndex}
                          text={item.replace("✓ ", "")}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Partie Technologies */}
              {currentProject.technologies && (
                <div className="mt-4">
                  <p className="text-sm text-gray-400 mb-2">
                    Technologies used:
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {currentProject.technologies.map((tech, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="h-5 w-5 object-contain"
                        />
                        <span className="text-xs text-gray-400">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Note/Additional Text */}
              {currentProject.note && (
                <div className="mt-4">
                  <p className="text-xs text-gray-300 italic">
                    {currentProject.note}
                  </p>
                </div>
              )}

              {/* Indication de clic */}
              {currentProject.moreInfoUrl && (
                <div className="mt-3 text-center">
                  <span className="text-xs text-gray-400">
                    Click the card to explore
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </VioletHover>
    </BaseCard>
  );
};
