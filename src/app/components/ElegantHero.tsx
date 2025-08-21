"use client";

import React, { useEffect, useState, useRef } from 'react';
import { Modal, Group, Text, ActionIcon, Stack, Divider, Box, Title, Button, Container, Center } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin, IconMail, IconBrandX, IconEye, IconMessageCircle, IconArrowDown } from '@tabler/icons-react';

interface ElegantHeroProps {
  name: string;
  role: string;
  onExplore: () => void;
}

export const ElegantHero: React.FC<ElegantHeroProps> = ({
  name,
  role,
  onExplore,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [socialModalOpen, setSocialModalOpen] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  const fullText = "こんにちは、。。。";

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/NayHtetKyaw',
      icon: <IconBrandGithub size={24} />,
      color: '#ffffff'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/nay-htet-kyaw-8b8b8b8b/',
      icon: <IconBrandLinkedin size={24} />,
      color: '#ffffff'
    },
    {
      name: 'Email',
      url: 'mailto:nayhtetkyaw.dev@gmail.com',
      icon: <IconMail size={24} />,
      color: '#ffffff'
    },
    {
      name: 'X',
      url: 'https://twitter.com/nayhtetkyaw',
      icon: <IconBrandX size={24} />,
      color: '#ffffff'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Typing animation effect
  useEffect(() => {
    if (isLoaded && currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypingText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 150); // Speed of typing

      return () => clearTimeout(timeout);
    }
  }, [isLoaded, currentIndex, fullText]);



  const handleSocialClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <Box
        component="section"
        ref={heroRef}
        style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Main Content */}
        <Container
          style={{
            textAlign: 'center',
            zIndex: 10,
            maxWidth: '800px',
            padding: '0 clamp(0.5rem, 2vw, 1rem)',
          }}
        >
          {/* Greeting with typing animation */}
          <Box
            style={{
              marginBottom: '1rem',
              overflow: 'hidden',
              minHeight: '2rem',
            }}
          >
            <Text
              style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
                fontWeight: 400,
                color: '#d1d5db',
                marginBottom: 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
                opacity: isLoaded ? 1 : 0,
                transition: 'all 1.2s cubic-bezier(0.25, 0.1, 0.25, 1)',
                letterSpacing: '0.05em',
                fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
              }}
            >
              <Box component="span">{typingText}</Box>
              {currentIndex < fullText.length && (
                <Box
                  component="span"
                  style={{
                    width: '2px',
                    height: '1.5em',
                    background: '#d1d5db',
                    animation: 'blink 1s infinite',
                    display: 'inline-block',
                  }}
                />
              )}
            </Text>
          </Box>

          {/* Name */}
          <Box
            style={{
              marginBottom: '1rem',
              overflow: 'hidden',
            }}
          >
            <Title
              order={1}
              style={{
                fontSize: 'clamp(3rem, 8vw, 6rem)',
                fontWeight: 700,
                background: 'linear-gradient(135deg, #ffffff 0%, #d1d5db 50%, #9ca3af 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(100px)',
                opacity: isLoaded ? 1 : 0,
                transition: 'all 1.2s cubic-bezier(0.25, 0.1, 0.25, 1) 0.2s',
                letterSpacing: '-0.02em',
                fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
              }}
            >
              {name}
            </Title>
          </Box>

          {/* Role */}
          <Box
            style={{
              marginBottom: '2rem',
              overflow: 'hidden',
            }}
          >
            <Title
              order={2}
              style={{
                fontSize: 'clamp(1.2rem, 3vw, 2rem)',
                fontWeight: 500,
                color: '#9ca3af',
                marginBottom: 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(50px)',
                opacity: isLoaded ? 1 : 0,
                transition: 'all 1.2s cubic-bezier(0.25, 0.1, 0.25, 1) 0.4s',
                letterSpacing: '0.02em',
                fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
              }}
            >
              {role}
            </Title>
          </Box>

          {/* CTA Button */}
          <Box
            style={{
              transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
              opacity: isLoaded ? 1 : 0,
              transition: 'all 1.2s cubic-bezier(0.25, 0.1, 0.25, 1) 0.6s',
            }}
          >
            <Group justify="center" gap="md" wrap="wrap">
              <Button
                onClick={onExplore}
                leftSection={<IconEye size={20} />}
                variant="filled"
                size="lg"
                style={{
                  background: 'linear-gradient(135deg, #ffffff, #d1d5db)',
                  color: '#000000',
                  border: 'none',
                  padding: '1rem 2rem',
                  fontSize: '1rem',
                  fontWeight: 600,
                  borderRadius: '12px',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'visible',
                  transition: 'all 0.3s ease',
                  fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
                  boxShadow: '0 4px 20px rgba(255, 255, 255, 0.2)',
                  letterSpacing: '0.02em',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(255, 255, 255, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(255, 255, 255, 0.2)';
                }}
              >
                Take a Peek
              </Button>
              
              <Button
                variant="outline"
                onClick={() => setSocialModalOpen(true)}
                leftSection={<IconMessageCircle size={20} />}
                size="lg"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: '#ffffff',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  padding: '1rem 2rem',
                  fontSize: '1rem',
                  fontWeight: 600,
                  borderRadius: '12px',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'visible',
                  transition: 'all 0.3s ease',
                  fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
                  backdropFilter: 'blur(10px)',
                  letterSpacing: '0.02em',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                }}
              >
                Let&apos;s Connect
              </Button>
            </Group>
          </Box>

          {/* Scroll Indicator */}
          <Center
            style={{
              position: 'absolute',
              bottom: '2rem',
              left: '50%',
              transform: 'translateX(-50%)',
              flexDirection: 'column',
              gap: '0.5rem',
              opacity: isLoaded ? 0.6 : 0,
              transition: 'opacity 1s ease 1.5s',
              cursor: 'pointer',
            }}
            onClick={onExplore}
          >
            <Text
              size="xs"
              style={{
                color: '#9ca3af',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontWeight: 500,
                fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <IconArrowDown size={16} />
              Discover more below
            </Text>
            <Box
              style={{
                width: '2px',
                height: '30px',
                background: 'linear-gradient(to bottom, #9ca3af, transparent)',
                borderRadius: '1px',
                animation: 'gentlePulse 2s ease-in-out infinite',
              }}
            />
          </Center>
        </Container>

        <style jsx>{`
          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }

          @keyframes gentlePulse {
            0%, 100% {
              opacity: 0.4;
              transform: scaleY(1);
            }
            50% {
              opacity: 0.8;
              transform: scaleY(1.2);
            }
          }

          @media (max-width: 768px) {
            section {
              padding: 0 1rem;
            }
            
            div[style*="flex"] {
              flex-direction: column;
              gap: 0.75rem;
            }
            
            button {
              width: 100%;
              max-width: 280px;
            }
          }
        `}</style>
      </Box>

      {/* Social Links Modal */}
      <Modal
        opened={socialModalOpen}
        onClose={() => setSocialModalOpen(false)}
        title="Connect With Me"
        size="sm"
        centered
        styles={{
          title: { color: '#ffffff', fontSize: '1.5rem', fontWeight: 600 },
          header: { background: 'rgba(0, 0, 0, 0.95)', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' },
          body: { background: 'rgba(0, 0, 0, 0.95)', padding: '2rem' },
          content: { background: 'rgba(0, 0, 0, 0.95)', border: '1px solid rgba(255, 255, 255, 0.2)' }
        }}
      >
        <Stack gap="lg">
          <Text size="sm" style={{ color: '#d1d5db', textAlign: 'center' }}>
            Let&apos;s collaborate, share ideas, or just have a chat about technology!
          </Text>
          
          <Divider style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }} />
          
          <Group justify="center" gap="md">
            {socialLinks.map((link, index) => (
              <ActionIcon
                key={index}
                size="xl"
                variant="light"
                onClick={() => handleSocialClick(link.url)}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  color: link.color,
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                {link.icon}
              </ActionIcon>
            ))}
          </Group>
          
          <Text size="xs" style={{ color: '#9ca3af', textAlign: 'center' }}>
            Click any icon to open the link in a new tab
          </Text>
        </Stack>
      </Modal>
    </>
  );
};