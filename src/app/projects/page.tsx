"use client";

import { Stack, Title, Text, Container, Card, Group, Grid, Badge } from "@mantine/core";
import { IconCode, IconExternalLink, IconBrandGithub } from "@tabler/icons-react";
import { useState } from "react";

interface Project {
  name: string;
  description: string;
  technologies: string[];
  repos?: {
    link: string;
    text: string;
  }[];
}

const projects: Project[] = [
  {
    name: "Course Compose",
    description: "A comprehensive web application for reviewing courses at Stamford International University, featuring user authentication, course ratings, and detailed reviews.",
    technologies: ["Next.js", "TypeScript", "Go", "Tailwind CSS", "Mantine", "Redis", "Supabase", "PostgreSQL", "Docker"],
    repos: [
      {
        link: "https://github.com/stamford-syntax-club/course-compose",
        text: "course-compose",
      },
    ],
  },
  {
    name: "Stamford Center",
    description: "A centralized hub for Stamford students to access documents, resources, and academic materials with a modern, intuitive interface.",
    technologies: ["Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Mantine", "Redis", "Docker"],
    repos: [
      {
        link: "https://github.com/stamford-syntax-club/stamfordcenter-frontend.git",
        text: "stamfordcenter-frontend",
      },
      {
        link: "https://github.com/stamford-syntax-club/stamfordcenter-backend.git",
        text: "stamfordcenter-backend",
      }
    ],
  },
  {
    name: "Style War",
    description: "An innovative coding competition platform with real-time code execution, live preview capabilities, and comprehensive judging system for competitive programming events.",
    technologies: ["Next.js", "TypeScript", "Go", "Tailwind CSS", "Mantine", "WebSocket", "Clerk Auth", "Docker"],
    repos: [
      {
        link: "https://github.com/stamford-syntax-club/style-war",
        text: "style-war",
      }
    ],
  },
  {
    name: "My Spotify Taste",
    description: "A personalized analytics dashboard that visualizes your Spotify listening habits, top tracks, artists, and musical preferences with beautiful charts and insights.",
    technologies: ["Next.js", "TypeScript", "Go", "Tailwind CSS", "Mantine", "Spotify Web API"],
    repos: [
      {
        link: "https://github.com/NayHtetKyaw/mySpotifyTaste",
        text: "mySpotifyTaste",
      }
    ],
  },
  {
    name: "CoffeeShop",
    description: "A full-featured e-commerce platform for ordering food and beverages online, complete with shopping cart, user accounts, and order management.",
    technologies: ["HTML", "CSS", "PHP", "MySQL", "JavaScript"],
    repos: [
      {
        link: "https://github.com/NayHtetKyaw/coffeeshop.git",
        text: "coffeeshop",
      }
    ],
  },
  {
    name: "Redis Client App",
    description: "A developer tool for testing and interacting with Redis databases, featuring a clean interface for executing commands and viewing results.",
    technologies: ["TypeScript", "Next.js", "Redis", "JavaScript"],
    repos: [
      {
        link: "https://github.com/NayHtetKyaw/redis-client-app.git",
        text: "redis-client-app",
      }
    ],
  },
];

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section
      style={{
        minHeight: '100vh',
        padding: 'clamp(1.5rem, 4vw, 3rem) clamp(0.5rem, 2vw, 1rem)',
        position: 'relative',
      }}
    >
      <Container size="xl">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(1rem, 3vw, 2rem)' }}>
          <Title
            order={1}
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 300,
              color: '#f8fafc',
              marginBottom: '1rem',
              letterSpacing: '-0.02em',
            }}
          >
            Proud Projects
          </Title>
          <Text
            style={{
              fontSize: '1.2rem',
              color: '#94a3b8',
              maxWidth: '600px',
              margin: '0 auto 2rem',
              lineHeight: 1.6,
            }}
          >
            A showcase of my development journey, from learning projects to production applications
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

        {/* Projects Grid */}
        <Grid gutter="xl">
          {projects.map((project, index) => (
            <Grid.Col key={index} span={{ base: 12, sm: 6, lg: 4 }}>
              <Card
                style={{
                  height: '100%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: hoveredProject === index
                    ? '0 20px 40px rgba(0, 0, 0, 0.3)'
                    : '0 8px 32px rgba(0, 0, 0, 0.2)',
                  transform: hoveredProject === index ? 'translateY(-8px)' : 'translateY(0)',
                  transition: 'all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  backdropFilter: 'blur(10px)',
                }}
                p="lg"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <Stack gap="md" style={{ height: '100%' }}>
                  {/* Project Header */}
                  <div>
                    <Title
                      order={3}
                      style={{
                        color: '#f8fafc',
                        fontSize: '1.4rem',
                        fontWeight: 600,
                        lineHeight: 1.3,
                        marginBottom: '0.75rem',
                      }}
                    >
                      {project.name}
                    </Title>

                    <Text
                      style={{
                        color: '#cbd5e1',
                        lineHeight: 1.6,
                        fontSize: '0.95rem',
                        marginBottom: '1rem',
                      }}
                    >
                      {project.description}
                    </Text>
                  </div>

                  {/* Technologies */}
                  <div style={{ flex: 1 }}>
                    <Group gap="xs" mb="md">
                      <IconCode size={16} color="#ffffff" />
                      <Text size="sm" fw={500} style={{ color: '#f8fafc' }}>
                        Technologies
                      </Text>
                    </Group>
                    <Group gap="xs">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="light"
                          size="sm"
                          style={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            color: '#ffffff',
                            border: '1px solid rgba(255, 255, 255, 0.3)',
                          }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </Group>
                  </div>

                  {/* Repository Links */}
                  <div>
                    <Group gap="xs" mb="sm">
                      <IconBrandGithub size={16} color="#ffffff" />
                      <Text size="sm" fw={500} style={{ color: '#f8fafc' }}>
                        Repository
                      </Text>
                    </Group>
                    <Stack gap="xs">
                      {project.repos?.map((repo, repoIndex) => (
                        <a
                          key={repoIndex}
                          href={repo.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.5rem 0.75rem',
                            background: 'rgba(255, 255, 255, 0.1)',
                            color: '#ffffff',
                            border: '1px solid rgba(255, 255, 255, 0.3)',
                            borderRadius: '6px',
                            textDecoration: 'none',
                            fontSize: '0.9rem',
                            transition: 'all 0.3s ease',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                          }}
                        >
                          <IconExternalLink size={14} />
                          {repo.text}
                        </a>
                      ))}
                    </Stack>
                  </div>
                </Stack>

                {/* Hover Effect Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(209, 213, 219, 0.1))',
                    opacity: hoveredProject === index ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                    pointerEvents: 'none',
                    borderRadius: '20px',
                  }}
                />
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

