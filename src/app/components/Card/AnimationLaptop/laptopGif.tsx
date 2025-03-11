"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./LaptopAnimation.module.scss";

const LaptopGif = () => {
  const [animationState, setAnimationState] = useState<
    "closed" | "opening" | "open" | "closing"
  >("closed");

  // On déclare le type union | null et on passe null comme valeur initiale
  const laptopRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const animationTimer = useRef<NodeJS.Timeout | null>(null);

  // Préchargement côté client uniquement
  useEffect(() => {
    const preloadImages = [
      "/image/laptopAnimationGif/openingLaptop.gif",
      "/image/laptopAnimationGif/closingLaptop.gif",
      "/image/laptopAnimationGif/openLaptop.png",
      "/image/laptopAnimationGif/closeLaptop.png",
    ];
    preloadImages.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          handleVisibilityChange(true);
        } else {
          handleVisibilityChange(false);
        }
      },
      {
        threshold: 0.4,
        rootMargin: "100px 0px 100px 0px",
      }
    );

    if (laptopRef.current) {
      observerRef.current.observe(laptopRef.current);
    }

    return () => {
      observerRef.current?.disconnect();
      if (animationTimer.current) clearTimeout(animationTimer.current);
    };
  }, []);

  const handleVisibilityChange = (isVisible: boolean) => {
    // On vérifie si animationTimer.current n’est pas null avant de l’utiliser
    if (animationTimer.current) {
      clearTimeout(animationTimer.current);
    }

    setAnimationState((prev) => {
      if (isVisible && prev !== "open") return "opening";
      if (!isVisible && prev !== "closed") return "closing";
      return prev;
    });

    const animationDuration = isVisible ? 1600 : 1200;

    animationTimer.current = setTimeout(() => {
      setAnimationState(isVisible ? "open" : "closed");
    }, animationDuration);
  };

  const getImageSource = () => {
    switch (animationState) {
      case "opening":
        return {
          src: "/image/laptopAnimationGif/openingLaptop.gif",
          alt: "Laptop opening",
        };
      case "closing":
        return {
          src: "/image/laptopAnimationGif/closingLaptop.gif",
          alt: "Laptop closing",
        };
      case "open":
        return {
          src: "/image/laptopAnimationGif/openLaptop.png",
          alt: "Open laptop",
        };
      default:
        return {
          src: "/image/laptopAnimationGif/closeLaptop.png",
          alt: "Closed laptop",
        };
    }
  };

  const { src, alt } = getImageSource();
  const isGif = src.endsWith(".gif");

  return (
    <div className={styles.laptopWrapper} ref={laptopRef}>
      <Image
        key={animationState}
        src={src}
        alt={alt}
        width={1000}
        height={700}
        priority
        className={styles.laptopImage}
        unoptimized={isGif}
        onLoad={() => {
          window.dispatchEvent(new Event("resize"));
        }}
      />
    </div>
  );
};

export default LaptopGif;
