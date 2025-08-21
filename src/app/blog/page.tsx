"use client";

import { Container, Text, Title, Card, Stack, Group } from "@mantine/core";
import { IconRocket, IconCalendar, IconBulb } from "@tabler/icons-react";
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function ComingSoon() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      ref={sectionRef}
      style={{
        minHeight: '100vh',
        padding: 'clamp(1.5rem, 4vw, 3rem) clamp(0.5rem, 2vw, 1rem)',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container size="md">
        {/* Section Header */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '2rem',
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            opacity: isVisible ? 1 : 0,
            transition: 'all 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)',
          }}
        >
          <Title
            order={2}
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 300,
              color: '#f8fafc',
              marginBottom: '1rem',
              letterSpacing: '-0.02em',
              fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
            }}
          >
            Updates & Posts
          </Title>
          <Text
            style={{
              fontSize: '1.2rem',
              color: '#ffffff',
              maxWidth: '600px',
              margin: '0 auto 2rem',
              lineHeight: 1.6,
            }}
          >
            Stay tuned for updates, insights, and thoughts on development, technology, and my journey
          </Text>
          <div
            style={{
              width: '60px',
              height: '3px',
              background: 'linear-gradient(90deg, #ffffff, #d1d5db)',
              margin: '0 auto',
              borderRadius: '2px',
            }}
          />
        </div>

        {/* Coming Soon Card */}
        <div
          style={{
            transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
            opacity: isVisible ? 1 : 0,
            transition: 'all 0.8s cubic-bezier(0.25, 0.1, 0.25, 1) 0.2s',
          }}
        >
          <Card
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
              textAlign: 'center',
              maxWidth: '600px',
              margin: '0 auto',
            }}
            p="lg"
          >
            <Stack gap="xl" align="center">
              {/* Icon */}
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 4px 20px rgba(255, 255, 255, 0.1)',
                }}
              >
                <IconRocket size={40} color="#ffffff" />
              </div>

              {/* Coming Soon Text */}
              <div>
                <Title
                  order={3}
                  style={{
                    color: '#ffffff',
                    fontSize: '1.8rem',
                    fontWeight: 600,
                    marginBottom: '0.5rem',
                  }}
                >
                  Coming Soon
                </Title>
                <Text
                  style={{
                    color: '#ffffff',
                    fontSize: '1.1rem',
                    opacity: 0.8,
                    marginBottom: '1.5rem',
                  }}
                >
                  Currently working on something exciting for this space
                </Text>
              </div>

              {/* Features Preview */}
              <Stack gap="md" style={{ width: '100%' }}>
                <Group gap="sm" justify="center">
                  <IconBulb size={20} color="#ffffff" />
                  <Text style={{ color: '#ffffff', fontSize: '0.95rem' }}>
                    Development insights and learnings
                  </Text>
                </Group>
                <Group gap="sm" justify="center">
                  <IconCalendar size={20} color="#ffffff" />
                  <Text style={{ color: '#ffffff', fontSize: '0.95rem' }}>
                    Project updates and progress
                  </Text>
                </Group>
                <Group gap="sm" justify="center">
                  <IconRocket size={20} color="#ffffff" />
                  <Text style={{ color: '#ffffff', fontSize: '0.95rem' }}>
                    Tech tips and discoveries
                  </Text>
                </Group>
              </Stack>

              {/* Status */}
              <Text
                style={{
                  color: '#ffffff',
                  opacity: 0.6,
                  fontSize: '0.9rem',
                  marginTop: '1rem',
                  fontStyle: 'italic',
                }}
              >
                Currently in development • Expected launch soon
              </Text>
            </Stack>
          </Card>
        </div>
      </Container>
    </section>
  );
}