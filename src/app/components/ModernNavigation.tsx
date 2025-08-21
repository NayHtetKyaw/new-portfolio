"use client";

import React, { useState, useEffect } from 'react';
import { useScrollProgress } from '../hooks/useScrollAnimation';

interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

interface ModernNavigationProps {
  items: NavigationItem[];
}

export const ModernNavigation: React.FC<ModernNavigationProps> = ({ items }) => {
  const [activeSection, setActiveSection] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);

      // Find active section
      const sections = items.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(items[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Elegant Progress Bar */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '3px',
          background: 'rgba(255, 255, 255, 0.1)',
          zIndex: 1000,
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${scrollProgress * 100}%`,
            background: 'linear-gradient(90deg, #ffffff, #d1d5db)',
            transition: 'width 0.1s ease',
          }}
        />
      </div>

      {/* Elegant Side Navigation */}
      <nav
        style={{
          position: 'fixed',
          top: '50%',
          right: '2rem',
          transform: `translateY(-50%) translateX(${isVisible ? '0' : '100px'})`,
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
          opacity: isVisible ? 1 : 0,
          transition: 'all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)',
        }}
      >
        {items.map((item, index) => (
          <div
            key={item.id}
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              transitionDelay: `${index * 0.1}s`,
            }}
            onClick={() => scrollToSection(item.href)}
          >
            {/* Elegant Label */}
            <span
              style={{
                fontSize: '0.85rem',
                fontWeight: 500,
                color: activeSection === item.id ? '#ffffff' : '#9ca3af',
                marginRight: '1rem',
                opacity: 0,
                transform: 'translateX(20px)',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap',
                background: 'rgba(255, 255, 255, 0.95)',
                padding: '0.5rem 1rem',
                borderRadius: '25px',
                border: `1px solid ${activeSection === item.id ? 'rgba(255, 255, 255, 0.3)' : 'rgba(156, 163, 175, 0.2)'}`,
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                boxShadow: activeSection === item.id ? '0 4px 20px rgba(255, 255, 255, 0.2)' : '0 2px 10px rgba(0, 0, 0, 0.1)',
                fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
              }}
              className="nav-label"
            >
              {item.label}
            </span>

            {/* Elegant Indicator */}
            <div
              style={{
                width: activeSection === item.id ? '40px' : '20px',
                height: '3px',
                background: activeSection === item.id 
                  ? 'linear-gradient(90deg, #ffffff, #d1d5db)'
                  : 'rgba(107, 114, 128, 0.4)',
                borderRadius: '2px',
                transition: 'all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)',
                position: 'relative',
              }}
            >
              {/* Subtle glow for active item */}
              {activeSection === item.id && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-1px',
                    left: '-1px',
                    right: '-1px',
                    bottom: '-1px',
                    background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.4), rgba(209, 213, 219, 0.4))',
                    borderRadius: '3px',
                    filter: 'blur(2px)',
                    zIndex: -1,
                  }}
                />
              )}
            </div>
          </div>
        ))}
      </nav>

      <style jsx>{`
        nav > div:hover .nav-label {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }

        nav > div:hover > div:last-child {
          width: 40px !important;
          background: linear-gradient(90deg, #ffffff, #d1d5db) !important;
        }

        @media (max-width: 768px) {
          nav {
            display: none;
          }
        }
      `}</style>
    </>
  );
};