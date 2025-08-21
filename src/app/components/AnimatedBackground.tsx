"use client";

import React, { useEffect, useRef, useCallback } from 'react';

interface AnimatedBackgroundProps {
  variant?: 'particles' | 'gradient' | 'mesh';
  intensity?: 'low' | 'medium' | 'high';
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  variant = 'particles',
  intensity = 'medium',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  // Particle system
  const createParticles = useCallback((canvas: HTMLCanvasElement) => {
    const particleCount = intensity === 'low' ? 25 : intensity === 'medium' ? 40 : 60;
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;
      glow: number;
      pulse: number;
    }> = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.3 + 0.1,
        color: Math.random() > 0.6 ? '#ffffff' : Math.random() > 0.3 ? '#d1d5db' : '#9ca3af',
        glow: Math.random() * 8 + 4,
        pulse: Math.random() * Math.PI * 2,
      });
    }
    return particles;
  }, [intensity]);

  const animateParticles = useCallback((ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, particles: Array<{
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
    color: string;
    glow: number;
    pulse: number;
  }>) => {
    // Simple solid background
    ctx.fillStyle = 'rgba(0, 0, 0, 0.98)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Update and draw particles
    particles.forEach((particle) => {
      // Update position
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      particle.pulse += 0.015;

      // Wrap around edges
      if (particle.x > canvas.width) particle.x = 0;
      if (particle.x < 0) particle.x = canvas.width;
      if (particle.y > canvas.height) particle.y = 0;
      if (particle.y < 0) particle.y = canvas.height;

      // Calculate pulsing glow
      const glowIntensity = particle.glow + Math.sin(particle.pulse) * 2;
      const currentOpacity = particle.opacity + Math.sin(particle.pulse) * 0.1;

      // Draw glowing particle
      ctx.save();
      ctx.globalCompositeOperation = 'screen';
      
      // Outer glow
      const glowGradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, glowIntensity
      );
      glowGradient.addColorStop(0, particle.color + '60');
      glowGradient.addColorStop(0.5, particle.color + '20');
      glowGradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = glowGradient;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, glowIntensity, 0, Math.PI * 2);
      ctx.fill();

      // Core particle with shine
      ctx.globalAlpha = currentOpacity;
      
      // Main particle
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
      
      // Shiny highlight
      const shineGradient = ctx.createRadialGradient(
        particle.x - particle.size * 0.3, particle.y - particle.size * 0.3, 0,
        particle.x, particle.y, particle.size
      );
      shineGradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
      shineGradient.addColorStop(0.4, 'rgba(255, 255, 255, 0.2)');
      shineGradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = shineGradient;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    });

    // Particle connections
    particles.forEach((particle, i) => {
      for (let j = i + 1; j < particles.length; j++) {
        const otherParticle = particles[j];
        const dx = particle.x - otherParticle.x;
        const dy = particle.y - otherParticle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          ctx.save();
          ctx.globalCompositeOperation = 'screen';
          
          // More visible connections
          const connectionOpacity = (150 - distance) / 150 * 0.4;
          const gradient = ctx.createLinearGradient(
            particle.x, particle.y,
            otherParticle.x, otherParticle.y
          );
          gradient.addColorStop(0, particle.color + Math.floor(connectionOpacity * 255).toString(16).padStart(2, '0'));
          gradient.addColorStop(0.5, `rgba(255, 255, 255, ${connectionOpacity * 0.8})`);
          gradient.addColorStop(1, otherParticle.color + Math.floor(connectionOpacity * 255).toString(16).padStart(2, '0'));
          
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(otherParticle.x, otherParticle.y);
          ctx.stroke();
          
          ctx.restore();
        }
      }
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    if (variant === 'particles') {
      const particles = createParticles(canvas);

      const animate = () => {
        animateParticles(ctx, canvas, particles);
        animationRef.current = requestAnimationFrame(animate);
      };

      animate();
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [variant, intensity, createParticles, animateParticles]);

  if (variant === 'gradient') {
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `
            linear-gradient(135deg, #000000 0%, #0a0a0a 100%)
          `,
          zIndex: -1,
        }}
      />
    );
  }

  if (variant === 'mesh') {
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `
            linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.01) 50%, transparent 100%),
            linear-gradient(0deg, transparent 0%, rgba(255, 255, 255, 0.01) 50%, transparent 100%)
          `,
          backgroundSize: '120px 120px',
          animation: 'meshMove 40s linear infinite',
          zIndex: -1,
        }}
      >
        <style jsx>{`
          @keyframes meshMove {
            0% {
              background-position: 0% 0%;
            }
            100% {
              background-position: 120px 120px;
            }
          }
        `}</style>
      </div>
    );
  }

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
};