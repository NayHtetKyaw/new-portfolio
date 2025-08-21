"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ActionIcon } from '@mantine/core';
import {
  IconArrowBadgeUpFilled,
  IconMusic,
  IconMusicOff,
  IconDownload,
  IconShare,
} from '@tabler/icons-react';
import { uiColors, createTransition } from '../utils/ui-utils';

interface FloatingElementsProps {
  onScrollToTop: () => void;
}

export const FloatingElements: React.FC<FloatingElementsProps> = ({
  onScrollToTop,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.3);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Initialize audio
  useEffect(() => {
    // Create audio element with ambient background music
    audioRef.current = new Audio();
    audioRef.current.src = '/audio/aimer-refrain.m4a';     
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;
    audioRef.current.preload = 'auto';

    // Handle audio events
    const handleCanPlay = () => {
      // Audio is ready to play
    };

    const handleError = () => {
      // Audio loading error - silently handle
    };

    if (audioRef.current) {
      audioRef.current.addEventListener('canplay', handleCanPlay);
      audioRef.current.addEventListener('error', handleError);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('canplay', handleCanPlay);
        audioRef.current.removeEventListener('error', handleError);
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Handle music toggle
  const toggleMusic = async () => {
    if (!audioRef.current) {
      // Fallback: create simple ambient tones using Web Audio API
      createAmbientTones();
      return;
    }

    try {
      if (isMusicPlaying) {
        audioRef.current.pause();
        setIsMusicPlaying(false);
      } else {
        await audioRef.current.play();
        setIsMusicPlaying(true);
      }
    } catch {
      // Audio playback failed - fallback to Web Audio API
      createAmbientTones();
    }
  };

  // Fallback: Create simple ambient tones using Web Audio API
  const createAmbientTones = () => {
    if (!isMusicPlaying) {
      try {
        const audioContext = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
        
        // Create a simple ambient tone
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(220, audioContext.currentTime); // A3 note
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 2);
        gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 4);
        
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 4);
        
        setIsMusicPlaying(true);
        setTimeout(() => setIsMusicPlaying(false), 4000);
      } catch {
        // Web Audio API not supported - silently fail
      }
    }
  };

  // Handle download resume/portfolio
  const handleDownload = () => {
    // Create a simple resume download or portfolio PDF
    const link = document.createElement('a');
    link.href = '/nayhtetkyaw(resume).pdf'; // Updated to match actual file name
    link.download = 'Nay_Htet_Kyaw_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Handle share portfolio
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Nay Htet Kyaw - Full Stack Developer',
          text: 'Check out my portfolio showcasing creative web development projects',
          url: window.location.href,
        });
      } catch {
        // Sharing failed - fallback to clipboard
        fallbackShare();
      }
    } else {
      fallbackShare();
    }
  };

  const fallbackShare = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      // Portfolio URL copied to clipboard
    });
  };

  const buttonStyle = {
    backgroundColor: uiColors.background,
    border: `1px solid ${uiColors.gray[200]}`,
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
    transition: createTransition('all', '300ms'),
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Scroll Progress Ring */}
      <div
        style={{
          position: 'fixed',
          bottom: '16px',
          right: '24px',
          zIndex: 100,
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.1)',
          padding: '2px',
          transition: createTransition('all', '300ms'),
          animation: isVisible ? 'fadeInScale 0.5s ease-out' : undefined,
        }}
      >
        <ActionIcon
          onClick={onScrollToTop}
          size="lg"
          style={{
            width: '52px',
            height: '52px',
            ...buttonStyle,
            borderRadius: '50%',
          }}
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
          aria-label="Scroll to top"
        >
          <IconArrowBadgeUpFilled 
            size={20} 
            color={uiColors.foreground}
            style={{
              transition: createTransition('transform', '300ms'),
              transform: isExpanded ? 'translateY(-2px)' : 'translateY(0)',
            }}
          />
        </ActionIcon>
      </div>

      {/* Floating Action Menu */}
      <div
        style={{
          position: 'fixed',
          bottom: '80px',
          right: '24px',
          zIndex: 99,
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          animation: isVisible ? 'slideInRight 0.6s ease-out 0.2s both' : undefined,
        }}
      >
        {/* Download Resume */}
        <ActionIcon
          onClick={handleDownload}
          size="md"
          style={buttonStyle}
          className="floating-action-btn"
          aria-label="Download Resume"
          title="Download Resume"
        >
          <IconDownload size={18} color={uiColors.foreground} />
        </ActionIcon>

        {/* Share Portfolio */}
        <ActionIcon
          onClick={handleShare}
          size="md"
          style={buttonStyle}
          className="floating-action-btn"
          aria-label="Share Portfolio"
          title="Share Portfolio"
        >
          <IconShare size={18} color={uiColors.foreground} />
        </ActionIcon>

        {/* Music Toggle */}
        <ActionIcon
          onClick={toggleMusic}
          size="md"
          style={{
            ...buttonStyle,
            backgroundColor: isMusicPlaying ? `${uiColors.blue}20` : uiColors.background,
            borderColor: isMusicPlaying ? uiColors.blue : uiColors.gray[200],
          }}
          className="floating-action-btn"
          aria-label="Toggle background music"
          title={isMusicPlaying ? "Pause Music" : "Play Music"}
        >
          {isMusicPlaying ? (
            <IconMusic size={18} color={uiColors.blue} />
          ) : (
            <IconMusicOff size={18} color={uiColors.foreground} />
          )}
        </ActionIcon>
      </div>

      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        .floating-action-btn:hover {
          transform: scale(1.1) translateY(-2px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
        }

        @media (max-width: 768px) {
          .floating-action-btn {
            display: none;
          }
        }
      `}</style>
    </>
  );
};