"use client";
import React, { useState, useEffect, useCallback } from "react";
import { Project } from "./types";
import styles from "./Carousel.module.scss";
import { getCardClasses } from "../NormalCard/utils";
import { ProjectCard } from "./ProjectCard";
import BaseCard from "../BaseCard/BaseCard";
import VioletHover from "../hover/VioletHover";
import { CircleListItem } from "../ServiceCard/CircleListItem";
import Image from "next/image";
import { useTranslation } from "react-i18next";

interface ProjectCarouselProps {
  projects: Project[];
}

export const DesktopCarousel: React.FC<ProjectCarouselProps> = ({
  projects,
}) => {
  const classes = getCardClasses({ imageAlign: "left" });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [isGoingBack, setIsGoingBack] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedCard] = useState<number | null>(null);
  const [isChangingDescription, setIsChangingDescription] = useState(false);

  // Au lieu de stocker "currentProject" dans un state, on le calcule directement
  const currentProject = projects[activeIndex];

  const nextSlide = useCallback(() => {
    if (isAnimating || selectedCard !== null) return;
    setIsGoingBack(false);
    setIsAnimating(true);
    setIsExiting(true);
    setIsChangingDescription(true);

    setTimeout(() => {
      setIsExiting(false);
      setActiveIndex((current) => (current + 1) % projects.length);
    }, 600);

    setTimeout(() => {
      setIsChangingDescription(false);
    }, 300);

    setTimeout(() => setIsAnimating(false), 800);
  }, [isAnimating, selectedCard, projects.length]);

  const previousSlide = useCallback(() => {
    if (isAnimating || selectedCard !== null) return;
    setIsGoingBack(true);
    setIsAnimating(true);
    setIsExiting(true);
    setIsChangingDescription(true);

    setTimeout(() => {
      setIsExiting(false);
      setActiveIndex(
        (current) => (current - 1 + projects.length) % projects.length
      );
    }, 600);

    setTimeout(() => {
      setIsChangingDescription(false);
    }, 300);

    setTimeout(() => setIsAnimating(false), 800);
  }, [isAnimating, selectedCard, projects.length]);

  // Carrousel automatique
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

  // (Optionnel) Pour réinitialiser le slide à 0 si la liste change (changement de langue)
  // useEffect(() => {
  //   setActiveIndex(0);
  // }, [projects]);

  const getCardStyle = (index: number) => {
    const diff = (index - activeIndex + projects.length) % projects.length;
    const isActive = diff === 0;
    const isSelected = selectedCard === index;

    let transform = "";
    const zIndex = projects.length - diff;

    if (isActive) {
      if (isExiting) {
        transform = isGoingBack
          ? "translate(100%, -10%) rotate(12deg)"
          : "translate(-180%, -10%) rotate(-12deg)";
      } else if (isSelected) {
        transform = "translate(-120%, -10%) rotate(-12deg) scale(1.1)";
      } else {
        transform = "translate(-45%, -8%) rotate(-12deg) scale(0.95)";
      }
    } else {
      const offset = diff * 12;
      transform = `translate(calc(-50% + ${offset}px), -${offset}px)`;
    }

    return {
      position: "absolute" as const,
      left: "50%",
      top: "-30%",
      transform,
      zIndex,
      filter: !isActive ? "blur(0.8px)" : "none",
      transition: "all 0.7s ease-in-out",
      cursor: "pointer",
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
    if (index === activeIndex && projects[index].moreInfoUrl) {
      window.open(projects[index].moreInfoUrl, "_blank", "noopener,noreferrer");
    }
  };

  const handleDotClick = (index: number) => {
    if (isAnimating || selectedCard !== null || index === activeIndex) return;
    setIsGoingBack(index < activeIndex);
    setIsAnimating(true);
    setIsExiting(true);

    setTimeout(() => {
      setActiveIndex(index);
      setIsExiting(false);
    }, 600);

    setTimeout(() => {
      setIsAnimating(false);
    }, 800);
  };

  const { t } = useTranslation();

  return (
    <BaseCard
      title={
        <div
          key={currentProject?.id}
          className={isChangingDescription ? "fade-out" : "fade-in"}
        >
          {currentProject?.title}
        </div>
      }
      titleAlignment={classes.titleAlignment}
      cardAlignment={classes.cardAlignement}
    >
      <div className="relative flex w-full">
        {/* Colonne Carrousel */}
        <div
          className="absolute mt-[20%] w-1/2 h-80"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="absolute bottom-[-170px] left-1/2 -translate-x-1/2 flex items-center gap-6 z-50">
            {/* Flèche gauche */}
            <div
              className="nav-arrow"
              onClick={(e) => {
                e.stopPropagation();
                previousSlide();
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </div>

            {/* Points */}
            <div className="flex gap-4">
              {projects.map((_, index) => (
                <div
                  key={index}
                  className={`dot ${index === activeIndex ? "active" : ""}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDotClick(index);
                  }}
                />
              ))}
            </div>

            {/* Flèche droite */}
            <div
              className="nav-arrow"
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          </div>

          {/* Cartes */}
          {projects.map((project, index) => (
            <div
              key={project.id}
              style={getCardStyle(index)}
              onClick={() => handleCardClick(index)}
              className={index === activeIndex ? "active-card" : ""}
            >
              <ProjectCard
                imageProject={project.imageProject}
                logoProject={project.logoProject}
              />
            </div>
          ))}
        </div>

        {/* 2ème colonne : la description */}
        <div className="w-full">
          <VioletHover>
            <div className="bg-[#100E12]">
              <div
                className={`${styles.internBox} flex min-h-[780px] 2xl:min-h-[870px]`}
              >
                {/* Moitié gauche vide */}
                <div className="w-1/2" />

                {/* Moitié droite : contenu */}
                <div
                  key={currentProject?.id}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className={`w-1/2 ${
                    isChangingDescription ? "fade-out" : "fade-in"
                  }`}
                >
                  {/* Partie Description */}
                  <div className="flex flex-col gap-6">
                    {/* Introduction */}
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {currentProject?.description?.split("\n\n")[0]}
                    </p>

                    {/* Sections avec titre et listes */}
                    {currentProject?.sections?.map((section, index) => (
                      <div key={index} className="flex flex-col gap-4">
                        <h3
                          className={`
                            text-left
                            text-white text-base font-jakarta font-semibold
                            py-0.5 px-4 w-fit rounded-full
                            ${styles.titleBox}
                          `}
                        >
                          {section.title}
                        </h3>
                        <div className="space-y-2">
                          {section.content.map((item, itemIndex) => (
                            <CircleListItem
                              className="min-w-5 h-5 text-sm"
                              key={itemIndex}
                              text={item.replace("✓ ", "")}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Partie Technologies */}
                  {currentProject?.technologies && (
                    <div className="mt-6">
                      {/* Remplace "Technologies used:" par t("projects.technologiesUsed") */}
                      <p className="text-sm text-gray-400 mb-3">
                        {t("projects.technologiesUsed")}
                      </p>
                      <div className="flex flex-wrap gap-4">
                        {currentProject.technologies.map((tech, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <Image
                              src={tech.icon}
                              alt={tech.name}
                              width={32}
                              height={32}
                              className="object-contain"
                            />
                            <span className="text-sm text-gray-400">
                              {tech.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Note/Additional Text */}
                  {currentProject?.note && (
                    <div className="mt-6">
                      <p className="text-sm text-gray-300 italic">
                        {currentProject.note}
                      </p>
                    </div>
                  )}

                  {/* Indication de clic */}
                  {currentProject?.moreInfoUrl && (
                    <div className="mt-4">
                      {/* Remplace "Click the card to explore" par t("projects.clickToExplore") */}
                      <span className="text-sm text-gray-400">
                        {t("projects.clickToExplore")}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </VioletHover>
        </div>
      </div>

      {/* Animations globales */}
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

        @keyframes fadeOut {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(20px);
          }
        }

        .fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }

        .fade-out {
          animation: fadeOut 0.3s ease-in forwards;
        }

        @keyframes bounce3D {
          0%,
          100% {
            transform: translate(-45%, -8%) rotate(-12deg) scale(0.95)
              translateZ(0);
          }
          50% {
            transform: translate(-45%, -8%) rotate(-12deg) scale(1.15)
              translateZ(50px);
          }
        }

        .active-card:hover {
          animation: bounce3D 4s infinite ease-in-out;
        }

        .active-card > div {
          position: relative;
          overflow: hidden;
        }

        .active-card > div::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transform: skewX(-15deg);
          animation: shine 2.5s infinite;
          z-index: 2;
          border-radius: inherit;
        }

        @keyframes shine {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }

        .nav-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .nav-arrow:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.1);
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #333;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .dot.active {
          background: #8b5cf680;
          transform: scale(1.3);
        }
      `}</style>
    </BaseCard>
  );
};
