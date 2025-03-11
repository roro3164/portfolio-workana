import { Project } from "./types"; 

export const projects: Project[] = [
  {
    id: 1,
    imageProject: "/image/projects/MockUpSportclubpng.png",
    logoProject: "/image/projects/logoSportclub .svg",
    title: "Sport Club",
    description: "Comprehensive UX redesign for a leading Argentine fitness chain with over 500k active users. Focused on user interviews, tree testing, and mid-fidelity wireframes (MFVD) to validate and refine a new app architecture.",
    sections: [
      {
        title: "UX Research & Strategy",
        content: [
          "Conducted user interviews",
          "Performed tree testing with Maze",
          "Created MFVD wireframes for rapid iteration"
        ]
      },
      {
        title: "Key Enhancements",
        content: [
          "Streamlined onboarding (7 → 3 steps)",
          "Visual calendar system for classes",
          "Workout tracking & social sharing",
          "Loyalty program overhaul"
        ]
      },
      {
        title: "Visual Design System",
        content: [
          "Established motion UI guidelines",
          "Developed dark mode variant",
          "WCAG-compliant contrast ratios",
          "Updated iconography system"
        ]
      }
    ],
    technologies: [
      { name: "Figma", icon: "/image/technoIcons/figma.svg" },
    ],
    note: "This project was completed as my final UI/UX certification project, focused exclusively on design with no development work.",
    moreInfoUrl: "https://www.behance.net/gallery/166552523/Rediseno-SportClub"
  },
  {
    id: 2,
    imageProject: "/image/projects/mockUpLapin.png",
    logoProject: "/image/projects/LogoLapin.png",
    title: "Lapin Deco",
    description: "Self-initiated e-commerce project for a home decor and furniture store, designed and developed from concept to deployment to showcase both design and front-end development skills.",
    sections: [
      {
        title: "Design & Visual Identity",
        content: [
          "Modern interface with intuitive navigation",
          "Cohesive product showcase identity",
          "Micro-interactions for enhanced UX",
          "Custom product category visualization"
        ]
      },
      {
        title: "Development Highlights",
        content: [
          "HTML5/CSS3 & SASS architecture",
          "Cross-browser compatibility",
          "Responsive grid system",
          "Lighthouse score optimization (95+)",
          "Hand-coded with no frameworks"
        ]
      }
    ],
    technologies: [
      { name: "HTML5", icon: "/image/technoIcons/html.svg" },
      { name: "CSS3", icon: "/image/technoIcons/css.svg" },
      { name: "SASS", icon: "/image/technoIcons/sass.svg" },
      { name: "Figma", icon: "/image/technoIcons/figma.svg" }
    ],
    note: "Personal project showcasing end-to-end design and development skills.",
    moreInfoUrl: "https://roro3164.github.io/Lapin-Deco/index.html"
  },
  {
    id: 3,
    imageProject: "/image/projects/mockUpCrypto.png",
    logoProject: "/image/projects/logoCrypto.svg",
    title: "Crypto Cloud Expo",
    description: "Single-page React application designed for a temporary cryptocurrency conference in Dubai. Focused on creating a visually striking landing page with strong conversion elements.",
    sections: [
      {
        title: "Design & Development",
        content: [
          "Visually striking crypto-themed layout",
          "Interactive React components",
          "Mobile-first responsive design",
          "Speaker lineup & schedule integration",
          "Lead generation optimization"
        ]
      },
      {
        title: "Technical Features",
        content: [
          "React.js component architecture",
          "Tailwind CSS for styling",
          "Optimized for speed and SEO",
          "Animated UI transitions",
          "Form validation and submission"
        ]
      }
    ],
    technologies: [
      { name: "Figma", icon: "/image/technoIcons/figma.svg" },
      { name: "React", icon: "/image/technoIcons/react.svg" },
      { name: "Tailwind CSS", icon: "/image/technoIcons/tailwindcss.svg" },
      { name: "GitHub", icon: "/image/technoIcons/github.svg" }
    ],
    note: "Ephemeral site created for a one-time event, highlighting rapid prototyping skills."
  },
  {
    id: 4,
    imageProject: "/image/projects/mockUpEco.png",
    logoProject: "/image/projects/logoEco.svg",
    title: "EcoMove",
    description: "Full-stack platform promoting eco-friendly mobility solutions, developed as a certification project for .NET Application Developer certification.",
    sections: [
      {
        title: "Design Achievements",
        content: [
          "Figma prototypes & wireframes",
          "Eco-themed UI system",
          "Interactive dashboard design",
          "Accessibility-first approach",
          "User journey mapping"
        ]
      },
      {
        title: "Technical Implementation",
        content: [
          "Angular/Tailwind frontend",
          ".NET 8/C# REST API",
          "Dockerized MySQL database",
          "JWT authentication system",
          "Entity Framework Core",
          "Database modeling and optimization",
          "Secure API endpoints"
        ]
      }
    ],
    technologies: [
      { name: "Figma", icon: "/image/technoIcons/figma.svg" },
      { name: "Angular", icon: "/image/technoIcons/angular.svg" },
      { name: "Tailwind CSS", icon: "/image/technoIcons/tailwindcss.svg" },
      { name: "C#", icon: "/image/technoIcons/csharp.svg" },
      { name: ".NET", icon: "/image/technoIcons/NET core.svg" },
      { name: "Docker", icon: "/image/technoIcons/docker.svg" },
      { name: "MySQL", icon: "/image/technoIcons/mySql.svg" }
    ],
    note: "Final project for .NET Application Developer certification, showcasing both design and full-stack development skills."
  },
  {
    id: 5,
    imageProject: "/image/projects/mockUpAqui.png",
    logoProject: "/image/projects/logoAqui.svg",
    title: "Aqui Acampamos",
    description: "Comprehensive camping reservation platform for Argentina, featuring interactive maps, advanced search filters, and secure booking functionality.",
    sections: [
      {
        title: "Design Process",
        content: [
          "Mobile-first UX prototyping",
          "Interactive Figma mockups",
          "User flow optimization",
          "Brand identity development",
          "Logo design and visual language"
        ]
      },
      {
        title: "Technical Stack",
        content: [
          "Next.js/TypeScript frontend",
          "Dynamic search filters",
          "SSR performance optimization",
          "Map integration system",
          "Responsive layout for all devices",
          "Progressive Web App capabilities"
        ]
      }
    ],
    technologies: [
      { name: "Next.js", icon: "/image/technoIcons/Next.js.svg" },
      { name: "TypeScript", icon: "/image/technoIcons/typescript.svg" },
      { name: "Tailwind CSS", icon: "/image/technoIcons/tailwindcss.svg" },
      { name: "Figma", icon: "/image/technoIcons/figma.svg" }
    ],
    note: "Work in progress: Ongoing development with new features being implemented.",
    moreInfoUrl: "https://aquiacampamos-phi.vercel.app/"
  }
];