"use client";

import { Suspense } from "react";

import Projects from "./projects/page";
import Skills from "./skills/page";
import Blog from "./blog/page";

// Elegant components
import { ElegantHero } from "./components/ElegantHero";
import { PersonalStory } from "./components/PersonalStory";
import { JobExperience } from "./components/JobExperience";
import { ModernNavigation } from "./components/ModernNavigation";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { FloatingElements } from "./components/FloatingElements";


const userData = {
  name: "Nay Htet Kyaw",
  role: "Full Stack Engineer (Focus on Frontend)",
  location: "Bangkok, Thailand",
  overview: "Crafting digital experiences that blur the line between art and technology. I transform complex challenges into intuitive, pixel-perfect solutions that users love.",
  skills: ["React", "TypeScript", "Next.js", "Node.js", "Python", "UI/UX Design", "Mobile Development"],
  interests: ["Playing Musical Instruments", "Japanese Language and Culture", "Gaming", "Sleeping", "Foods", "Astrology (Space Science)", "The Universe"]
};

const LoadingBars = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'transparent',
        gap: '24px',
      }}
    >
      {/* Elegant loading animation */}
      <div
        style={{
          display: 'flex',
          gap: '8px',
        }}
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              width: '12px',
              height: '40px',
              background: 'linear-gradient(135deg, #ffffff, #d1d5db)',
              borderRadius: '6px',
              animation: `loadingBars 1.2s ease-in-out infinite ${i * 0.2}s`,
            }}
          />
        ))}
      </div>
      
      {/* Loading text */}
      <div
        style={{
          color: '#ffffff',
          fontSize: '14px',
          fontWeight: 500,
          letterSpacing: '0.5px',
          animation: 'pulse 2s ease-in-out infinite',
          fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
        }}
      >
        Loading...
      </div>

      <style jsx>{`
        @keyframes loadingBars {
          0%, 40%, 100% {
            transform: scaleY(0.4);
            opacity: 0.5;
          }
          20% {
            transform: scaleY(1);
            opacity: 1;
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default function Home() {
  const scrollToElement = (selector: string, offset: number = 0) => {
    const element = document.querySelector(selector);
    if (element) {
      const targetPosition = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToAbout = () => {
    scrollToElement('#about', 0);
  };

  const navigationItems = [
    { id: 'hero', label: 'Home', href: '#hero' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'blog', label: 'Blog', href: '#blog' },
  ];

  return (
    <Suspense fallback={<LoadingBars />}>
      {/* Animated Background */}
      <AnimatedBackground variant="particles" intensity="medium" />
      
      <div
        style={{
          minHeight: '100vh',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Modern Navigation */}
        <ModernNavigation items={navigationItems} />

        {/* Hero Section */}
        <div id="hero">
          <ElegantHero
            name={userData.name}
            role={userData.role}
            onExplore={handleScrollToAbout}
          />
        </div>

        {/* About Section */}
        <div id="about">
          <PersonalStory data={userData} />
        </div>

        {/* Job Experience Section */}
        <div id="experience">
          <JobExperience />
        </div>

        {/* Skills Section */}
        <div id="skills">
          <Skills />
        </div>

        {/* Projects Section */}
        <div id="projects">
          <Projects />
        </div>

        {/* Blog Section */}
        <div id="blog">
          <Blog />
        </div>

        {/* Enhanced Floating Elements */}
        <FloatingElements onScrollToTop={scrollToTop} />
      </div>
    </Suspense>
  );
}
