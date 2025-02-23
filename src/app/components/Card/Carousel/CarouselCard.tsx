"use client";
import { Project } from '../types';
import { DesktopCarousel } from './DesktopCarousel';
import { MobileCarousel } from './MobileCarousel';

interface CarouselCardProps {
  projects: Project[];
}

export const CarouselCard = ({ projects }: CarouselCardProps) => {
  return (
    <>
      {/* Version Mobile - visible uniquement en dessous de lg */}
      <div className="block lg:hidden">
        <MobileCarousel projects={projects} />
      </div>

      {/* Version Desktop - visible uniquement au dessus de lg */}
      <div className="hidden lg:block">
        <DesktopCarousel projects={projects} />
      </div>
    </>
  );
};

export default CarouselCard;