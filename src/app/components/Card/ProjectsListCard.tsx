"use client";
import BaseCard from "./BaseCard";
import { ProjectCard } from "./ProjectCard";
import { ProjectsListCardProps } from "./types";
import { ProjectCardProps } from "./types";
import { useState } from 'react';
import { motion } from 'framer-motion';
import Card from "./Card";

export 
const ProjectsListCard = ({ projects }: ProjectsListCardProps) => {
  const [selectedProject, setSelectedProject] = useState<ProjectCardProps | null>(null);

  // Vue par défaut : Card avec éventail
  if (!selectedProject) {
    return (
      <BaseCard title="Projects">
        <div className="relative h-[400px]">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="absolute"
              style={{
                rotate: `${-15 + (index * 10)}deg`,
                zIndex: index,
                transformOrigin: 'bottom center'
              }}
              whileHover={{ 
                y: -20,
                rotate: 0,
                zIndex: 50
              }}
              onClick={() => setSelectedProject(project)}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </BaseCard>
    );
  }

  // Vue détaillée : Card avec pile de projets
  return (
    <Card
      title={selectedProject.title}
      internContent={selectedProject.description}
      imageAlign="left"
    >
      <div className="relative h-[400px]">
        {projects.map((project, index) => (
          <div
            key={index}
            className="absolute"
            style={{
              top: `${index * 10}px`,
              zIndex: index
            }}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </Card>
  );
};