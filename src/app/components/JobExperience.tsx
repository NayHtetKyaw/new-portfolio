"use client";

import React, { useState } from 'react';
import { Timeline, Text, Title, Container, Card, Badge, Group, Stack, Modal } from '@mantine/core';
import { IconBriefcase, IconCalendar, IconMapPin, IconBuilding, IconCode, IconRocket, IconAward } from '@tabler/icons-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface JobExperienceItem {
  title: string;
  company: string;
  type: string;
  duration: string;
  location: string;
  description: string[];
  skills: string[];
  current?: boolean;
  achievements?: string[];
}

const experiences: JobExperienceItem[] = [
  {
    title: "Software Developer",
    company: "Issa Compass",
    type: "Full-time",
    duration: "Jul 2025 - Present · 2 mos",
    location: "Bangkok, Bangkok City, Thailand",
    description: [
      "Developing and maintaining web applications using modern technologies",
      "Building chatbot solutions for enhanced user interaction",
      "Collaborating with cross-functional teams to deliver high-quality software"
    ],
    skills: ["Web Development", "Chatbot Development", "Full-stack Development"],
    achievements: [
      "Successfully delivered 3 major web applications",
      "Improved chatbot response accuracy by 40%",
      "Mentored 2 junior developers"
    ],
    current: true
  },
  {
    title: "Software Developer",
    company: "Issa Compass",
    type: "Internship",
    duration: "Mar 2025 - Jun 2025 · 4 mos",
    location: "Bangkok, Bangkok City, Thailand · On-site",
    description: [
      "Gained hands-on experience in web development and microservices architecture",
      "Contributed to various projects involving modern web technologies",
      "Learned industry best practices and agile development methodologies"
    ],
    skills: ["Web Development", "Microservices", "Team Collaboration"],
    achievements: [
      "Completed 5 internship projects",
      "Learned 3 new technologies",
      "Received excellent feedback from mentors"
    ]
  }
];

export const JobExperience: React.FC = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [selectedExperience, setSelectedExperience] = useState<JobExperienceItem | null>(null);

  const getExperienceIcon = (type: string) => {
    switch (type) {
      case 'Full-time':
        return <IconBriefcase size={16} />;
      case 'Internship':
        return <IconCode size={16} />;
      case 'Contract':
        return <IconRocket size={16} />;
      default:
        return <IconBriefcase size={16} />;
    }
  };

  const getExperienceColor = (type: string) => {
    switch (type) {
      case 'Full-time':
        return '#ffffff';
      case 'Internship':
        return '#ffffff';
      case 'Contract':
        return '#ffffff';
      default:
        return '#ffffff';
    }
  };

  return (
    <section
      ref={sectionRef}
      style={{
        minHeight: '100vh',
        padding: 'clamp(1.5rem, 4vw, 3rem) clamp(0.5rem, 2vw, 1rem)',
        position: 'relative',
      }}
    >
      <Container size="lg">
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
            Professional Journey
          </Title>
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

        {/* Timeline */}
        <div
          style={{
            transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
            opacity: isVisible ? 1 : 0,
            transition: 'all 0.8s cubic-bezier(0.25, 0.1, 0.25, 1) 0.2s',
          }}
        >
          <Timeline
            active={experiences.length}
            bulletSize={32}
            lineWidth={2}
            color="rgba(255, 255, 255, 0.6)"
            styles={{
              itemBullet: {
                backgroundColor: '#ffffff',
                border: '2px solid rgba(255, 255, 255, 0.9)',
                boxShadow: '0 0 20px rgba(255, 255, 255, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              },
              itemBody: {
                paddingLeft: '0.5rem',
              },
            }}
          >
            {experiences.map((experience, index) => (
              <Timeline.Item
                key={index}
                bullet={
                  <div style={{ color: '#000000' }}>
                    {getExperienceIcon(experience.type)}
                  </div>
                }
                style={{
                  paddingBottom: '0.5rem',
                }}
              >
                <Card
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '20px',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                    marginLeft: '0.25rem',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                  }}
                  p="md"
                >
                  <Stack gap="sm">
                    {/* Header */}
                    <Group justify="space-between" align="flex-start">
                      <div style={{ flex: 1 }}>
                        <Title
                          order={3}
                          style={{
                            color: '#f8fafc',
                            fontSize: '1.5rem',
                            fontWeight: 600,
                            marginBottom: '0.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                          }}
                        >
                          <IconBuilding size={20} style={{ color: getExperienceColor(experience.type) }} />
                          {experience.title}
                        </Title>
                        <Text
                          style={{
                            color: getExperienceColor(experience.type),
                            fontSize: '1.2rem',
                            fontWeight: 500,
                            marginBottom: '0.5rem',
                          }}
                        >
                          {experience.company}
                        </Text>
                      </div>
                      {experience.current && (
                        <Badge
                          color="white"
                          variant="light"
                          style={{
                            background: 'rgba(255, 255, 255, 0.2)',
                            color: '#ffffff',
                            border: '1px solid rgba(255, 255, 255, 0.3)',
                            padding: '0.5rem 1rem',
                            fontSize: '0.8rem',
                          }}
                        >
                          Current
                        </Badge>
                      )}
                    </Group>

                    {/* Job Details */}
                    <Group gap="xl" wrap="wrap">
                      <Group gap="xs">
                        <IconCalendar size={16} color="#ffffff" />
                        <Text size="sm" style={{ color: '#ffffff' }}>
                          {experience.duration}
                        </Text>
                      </Group>
                      <Group gap="xs">
                        <IconMapPin size={16} color="#ffffff" />
                        <Text size="sm" style={{ color: '#ffffff' }}>
                          {experience.location}
                        </Text>
                      </Group>
                      <Badge
                        variant="outline"
                        style={{
                          color: getExperienceColor(experience.type),
                          borderColor: getExperienceColor(experience.type),
                          background: `${getExperienceColor(experience.type)}10`,
                        }}
                      >
                        {experience.type}
                      </Badge>
                    </Group>

                    {/* Description */}
                    <Stack gap="xs">
                      <Text size="sm" fw={500} style={{ color: '#f8fafc', marginBottom: '0.5rem' }}>
                        Key Responsibilities:
                      </Text>
                      {experience.description.map((desc, descIndex) => (
                        <Text
                          key={descIndex}
                          style={{
                            color: '#cbd5e1',
                            lineHeight: 1.6,
                            fontSize: '0.95rem',
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.5rem',
                          }}
                        >
                          <span style={{ color: getExperienceColor(experience.type), fontSize: '0.6rem', marginTop: '0.3rem' }}>•</span>
                          {desc}
                        </Text>
                      ))}
                    </Stack>

                    {/* Skills */}
                    <div>
                      <Text size="sm" fw={500} style={{ color: '#f8fafc', marginBottom: '0.75rem' }}>
                        Technologies & Skills:
                      </Text>
                      <Group gap="xs" wrap="wrap">
                        {experience.skills.map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            variant="light"
                            size="sm"
                            style={{
                              background: `${getExperienceColor(experience.type)}20`,
                              color: getExperienceColor(experience.type),
                              border: `1px solid ${getExperienceColor(experience.type)}40`,
                            }}
                          >
                            {skill}
                          </Badge>
                        ))}
                      </Group>
                    </div>
                  </Stack>
                </Card>
              </Timeline.Item>
            ))}
          </Timeline>
        </div>
      </Container>

      {/* Experience Detail Modal */}
      <Modal
        opened={!!selectedExperience}
        onClose={() => setSelectedExperience(null)}
        title={`${selectedExperience?.title} at ${selectedExperience?.company}`}
        size="lg"
        centered
        styles={{
          title: { color: '#ffffff', fontSize: '1.5rem', fontWeight: 600 },
          header: { background: 'rgba(0, 0, 0, 0.95)', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' },
          body: { background: 'rgba(0, 0, 0, 0.95)', padding: '2rem' },
          content: { background: 'rgba(0, 0, 0, 0.95)', border: '1px solid rgba(255, 255, 255, 0.2)' }
        }}
      >
        {selectedExperience && (
          <Stack gap="lg">
            {/* Header Info */}
            <Card
              style={{
                background: 'rgba(15, 23, 42, 0.3)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '16px',
              }}
              p="md"
            >
              <Group justify="space-between" align="center">
                <div>
                  <Text size="lg" fw={600} style={{ color: '#f8fafc' }}>
                    {selectedExperience.title}
                  </Text>
                  <Text size="md" style={{ color: getExperienceColor(selectedExperience.type) }}>
                    {selectedExperience.company}
                  </Text>
                </div>
                <Badge
                  variant="light"
                  size="lg"
                  style={{
                    color: getExperienceColor(selectedExperience.type),
                    borderColor: getExperienceColor(selectedExperience.type),
                    background: `${getExperienceColor(selectedExperience.type)}20`,
                  }}
                >
                  {selectedExperience.type}
                </Badge>
              </Group>
            </Card>

            {/* Achievements */}
            {selectedExperience.achievements && (
              <div>
                <Text size="lg" fw={600} style={{ color: '#f8fafc', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <IconAward size={20} style={{ color: '#ffffff' }} />
                  Key Achievements
                </Text>
                <Stack gap="md">
                  {selectedExperience.achievements.map((achievement, index) => (
                    <Card
                      key={index}
                      style={{
                        background: 'rgba(15, 23, 42, 0.2)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '12px',
                      }}
                      p="md"
                    >
                      <Text
                        style={{
                          color: '#cbd5e1',
                          lineHeight: 1.6,
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.5rem',
                        }}
                      >
                        <IconCode size={16} style={{ color: '#ffffff', marginTop: '0.3rem' }} />
                        {achievement}
                      </Text>
                    </Card>
                  ))}
                </Stack>
              </div>
            )}

            {/* Skills */}
            <div>
              <Text size="lg" fw={600} style={{ color: '#f8fafc', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <IconCode size={20} style={{ color: '#ffffff' }} />
                Technologies & Skills
              </Text>
              <Group gap="xs" wrap="wrap">
                {selectedExperience.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="light"
                    size="lg"
                    style={{
                      background: `${getExperienceColor(selectedExperience.type)}20`,
                      color: getExperienceColor(selectedExperience.type),
                      border: `1px solid ${getExperienceColor(selectedExperience.type)}40`,
                      padding: '0.5rem 1rem',
                    }}
                  >
                    {skill}
                  </Badge>
                ))}
              </Group>
            </div>
          </Stack>
        )}
              </Modal>
        
        <style jsx>{`
          @media (max-width: 768px) {
            /* Mobile timeline adjustments */
            :global(.mantine-Timeline-itemBullet) {
              min-width: 32px !important;
              min-height: 32px !important;
            }
            
            :global(.mantine-Timeline-itemBody) {
              padding-left: 0.75rem !important;
            }
            
            :global(.mantine-Timeline-root) {
              margin-left: 0.5rem !important;
            }
          }
          
          @media (max-width: 480px) {
            :global(.mantine-Timeline-itemBody) {
              padding-left: 1rem !important;
            }
            
            :global(.mantine-Timeline-root) {
              margin-left: 0.75rem !important;
            }
          }
        `}</style>
      </section>
    );
};