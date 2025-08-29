"use client";

import React, { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import {
  Card,
  Badge,
  Group,
  Text,
  Stack,
  Divider,
  ActionIcon,
  Modal,
  Timeline,
  Title,
  Container,
  Box,
  Center,
} from "@mantine/core";
import Image from "next/image";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconBrandX,
  IconExternalLink,
  IconCode,
  IconPalette,
  IconBrain,
  IconRocket,
  IconMapPin,
  IconTarget,
  IconBulb,
  IconSchool,
  IconCalendar,
} from "@tabler/icons-react";

interface PersonalData {
  name: string;
  role: string;
  location: string;
  overview: string;
  skills: string[];
  interests: string[];
}

interface PersonalStoryProps {
  data: PersonalData;
}

export const PersonalStory: React.FC<PersonalStoryProps> = ({ data }) => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [selectedInterest, setSelectedInterest] = useState<string | null>(null);

  const personalInfo = {
    background:
      "I enjoy building web applications. My interest in technology started by just spending a lot of time with a computer and trying to make something happen (like changing wallpaper XD)",

    currentFocus:
      "Currently working as a Full Stack Developer at Issa Compass, where I mostly work on internal products and services to help the company products, and handle operations.",

    philosophy: `A good programmer isn&apos;t the one who writes the prettiest code, neither the one who solve the problems most effectively. It&apos;s whoever uses VIM: Change My Mind :P`,
  };

  const educations = [
    {
      school: "Stamford International University",
      degree: "Bachelor of Science | Information Technology",
      timeStamp: "2022 - 2025",
      status: "Graduating in December 2025",
      link: "https://www.stamford.edu/",
      current: false,
      was: "Served as a Coding Club Maintainer",
    },
    {
      school: "Info Myanmar College",
      degree: "BTEC Level 5 Diploma in Software Engineering",
      timeStamp: "2019 - 2022",
      status: "Graduated",
      link: "https://infomyanmarcollege.com/",
      current: false,
      was: "Served as a Class President",
    },
  ];

  const EducationItem = ({ edu }: { edu: (typeof educations)[0] }) => (
    <Card
      style={{
        background: "rgba(255, 255, 255, 0.05)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "16px",
        backdropFilter: "blur(10px)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
        marginLeft: "0.25rem",
      }}
      p="md"
    >
      <Stack gap="sm">
        {/* Header */}
        <Group justify="space-between" align="flex-start">
          <div>
            <Title
              order={3}
              style={{
                color: "#f8fafc",
                fontSize: "1.5rem",
                fontWeight: 600,
                marginBottom: "0.5rem",
              }}
            >
              {edu.school}
            </Title>
            <Text
              style={{
                color: "#ffffff",
                fontSize: "1.1rem",
                fontWeight: 500,
              }}
            >
              {edu.degree}
            </Text>
          </div>
          <a href={edu.link} target="_blank" rel="noopener noreferrer">
            <IconExternalLink size={20} style={{ color: "#ffffff" }} />
          </a>
        </Group>

        {/* Details */}
        <Group gap="xl">
          <Group gap="xs">
            <IconCalendar size={16} color="#ffffff" />
            <Text size="sm" style={{ color: "#ffffff" }}>
              {edu.timeStamp}
            </Text>
          </Group>
          <Group gap="xs">
            <IconSchool size={16} color="#ffffff" />
            <Text size="sm" style={{ color: "#ffffff" }}>
              {edu.status}
            </Text>
          </Group>
        </Group>

        {/* Description */}
        <Text size="sm" style={{ color: "#ffffff" }}>
          {edu.was}
        </Text>
      </Stack>
    </Card>
  );

  const skillCategories = [
    {
      name: "Frontend",
      icon: <IconPalette size={20} />,
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Mantine UI"],
      color: "#ffffff",
    },
    {
      name: "Backend",
      icon: <IconCode size={20} />,
      skills: ["Go", "PHP", "Python", "Node.js", "Express"],
      color: "#ffffff",
    },
    {
      name: "Database",
      icon: <IconBrain size={20} />,
      skills: ["MySQL", "PostgreSQL", "Redis", "Firebase"],
      color: "#ffffff",
    },
    {
      name: "DevOps",
      icon: <IconRocket size={20} />,
      skills: ["Docker", "Kubernetes", "Linux", "CI/CD", "Git"],
      color: "#ffffff",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/NayHtetKyaw",
      icon: <IconBrandGithub size={20} />,
      color: "#ffffff",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/nay-htet-kyaw-8b8b8b8b/",
      icon: <IconBrandLinkedin size={20} />,
      color: "#ffffff",
    },
    {
      name: "Email",
      url: "mailto:nayhtetkyaw.dev@gmail.com",
      icon: <IconMail size={20} />,
      color: "#ffffff",
    },
    {
      name: "X",
      url: "https://twitter.com/nayhtetkyaw",
      icon: <IconBrandX size={20} />,
      color: "#ffffff",
    },
  ];

  const handleSocialClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Box
      component="section"
      ref={sectionRef}
      style={{
        minHeight: "100vh",
        padding: "clamp(1rem, 4vw, 2rem) clamp(0.5rem, 2vw, 1rem)",
        position: "relative",
      }}
    >
      <Container
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Section Header */}
        <Center
          style={{
            marginBottom: "1.5rem",
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            opacity: isVisible ? 1 : 0,
            transition: "all 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)",
            flexDirection: "column",
          }}
        >
          <Title
            order={2}
            style={{
              fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
              fontWeight: 300,
              color: "#f8fafc",
              marginBottom: "1rem",
              letterSpacing: "-0.02em",
              fontFamily:
                'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
            }}
          >
            About Me
          </Title>
          <div
            style={{
              width: "60px",
              height: "3px",
              background: "linear-gradient(90deg, #ffffff, #d1d5db)",
              margin: "0 auto",
              borderRadius: "2px",
            }}
          />
        </Center>

        {/* Main Content - Compact Single Column */}
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            opacity: isVisible ? 1 : 0,
            transition: "all 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)",
          }}
        >
          {/* Personal Details */}
          <Card
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "20px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
              marginBottom: "1rem",
              backdropFilter: "blur(10px)",
            }}
            p="lg"
          >
            <div style={{ position: "relative" }}>
              <Stack gap="md">
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 1rem",
                      overflow: "hidden",
                      border: "2px solid rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    <Image
                      src="/media/avatar.png"
                      alt="Profile Avatar"
                      width={80}
                      height={80}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                  <h3
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 600,
                      color: "#f8fafc",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {data.name}
                  </h3>
                  <Text
                    style={{
                      color: "#d1d5db",
                      fontSize: "1.1rem",
                      fontWeight: 500,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {data.role}
                  </Text>
                  <Text size="sm" style={{ color: "#9ca3af" }}>
                    <IconMapPin
                      size={16}
                      style={{ marginRight: "0.5rem", display: "inline" }}
                    />
                    {data.location}
                  </Text>
                </div>

                <Divider style={{ borderColor: "rgba(255, 255, 255, 0.2)" }} />

                {/* Social Links */}
                <div>
                  <Text
                    size="sm"
                    fw={500}
                    style={{
                      color: "#f8fafc",
                      marginBottom: "0.75rem",
                      textAlign: "center",
                    }}
                  >
                    Connect with me
                  </Text>
                  <Group justify="center" gap="xs">
                    {socialLinks.map((link, index) => (
                      <ActionIcon
                        key={index}
                        size="md"
                        variant="light"
                        onClick={() => handleSocialClick(link.url)}
                        style={{
                          background: "rgba(255, 255, 255, 0.1)",
                          border: "1px solid rgba(255, 255, 255, 0.3)",
                          color: link.color,
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background =
                            "rgba(255, 255, 255, 0.2)";
                          e.currentTarget.style.transform = "scale(1.1)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background =
                            "rgba(255, 255, 255, 0.1)";
                          e.currentTarget.style.transform = "scale(1)";
                        }}
                      >
                        {link.icon}
                      </ActionIcon>
                    ))}
                  </Group>
                </div>
              </Stack>
            </div>
          </Card>

          {/* Interests */}
          <Card
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              borderRadius: "20px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
              marginBottom: "1rem",
              backdropFilter: "blur(10px)",
            }}
            p="lg"
          >
            <h4
              style={{
                fontSize: "1.3rem",
                fontWeight: 600,
                color: "#f8fafc",
                marginBottom: "1.5rem",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
              }}
            >
              <IconBulb size={24} />
              Personal Interests
            </h4>
            <Group gap="xs" justify="center" wrap="wrap">
              {data.interests.map((interest, index) => (
                <Badge
                  key={index}
                  variant="light"
                  size="lg"
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    color: "#ffffff",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onClick={() => setSelectedInterest(interest)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "scale(1.05) translateY(-2px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 25px rgba(255, 255, 255, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1) translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {interest}
                </Badge>
              ))}
            </Group>
          </Card>

          {/* Skills Grid */}
          <Card
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              borderRadius: "20px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
              marginBottom: "1rem",
              backdropFilter: "blur(10px)",
            }}
            p="lg"
          >
            <h4
              style={{
                fontSize: "1.3rem",
                fontWeight: 600,
                color: "#f8fafc",
                marginBottom: "1.5rem",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
              }}
            >
              <IconRocket size={24} />
              Technical Stack
            </h4>

            <Stack gap="md">
              {skillCategories.map((category, index) => (
                <div key={index}>
                  <Group gap="xs" mb="xs">
                    <div style={{ color: category.color }}>{category.icon}</div>
                    <Text size="sm" fw={500} style={{ color: "#f8fafc" }}>
                      {category.name}
                    </Text>
                  </Group>
                  <Group gap="xs" wrap="wrap">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="light"
                        size="sm"
                        style={{
                          background: "rgba(255, 255, 255, 0.1)",
                          color: "#ffffff",
                          border: "1px solid rgba(255, 255, 255, 0.2)",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                        }}
                        onClick={() => setSelectedSkill(skill)}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background =
                            "rgba(255, 255, 255, 0.2)";
                          e.currentTarget.style.transform = "scale(1.05)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background =
                            "rgba(255, 255, 255, 0.1)";
                          e.currentTarget.style.transform = "scale(1)";
                        }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </Group>
                </div>
              ))}
            </Stack>
          </Card>

          {/* Story Cards */}
          <Card
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              borderRadius: "20px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
              backdropFilter: "blur(10px)",
              marginBottom: "1rem",
            }}
            p="lg"
          >
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: 600,
                color: "#f8fafc",
                marginBottom: "1.5rem",
                textAlign: "center",
              }}
            >
              A little bit about Me ^O^
            </h3>

            <Stack gap="lg">
              {/* Background */}
              <div
                style={{
                  padding: "1.5rem",
                  borderRadius: "16px",
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "4px",
                    height: "100%",
                    background: "linear-gradient(to bottom, #ffffff, #d1d5db)",
                    borderRadius: "2px",
                  }}
                />
                <div style={{ paddingLeft: "1rem" }}>
                  <h4
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      color: "#f8fafc",
                      marginBottom: "0.75rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <IconTarget size={20} />
                    Background
                  </h4>
                  <p
                    style={{
                      color: "#ffffff",
                      lineHeight: 1.7,
                      margin: 0,
                      fontSize: "0.95rem",
                    }}
                  >
                    {personalInfo.background}
                  </p>
                </div>
              </div>

              {/* Current Focus */}
              <div
                style={{
                  padding: "1.5rem",
                  borderRadius: "16px",
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "4px",
                    height: "100%",
                    background: "linear-gradient(to bottom, #ffffff, #d1d5db)",
                    borderRadius: "2px",
                  }}
                />
                <div style={{ paddingLeft: "1rem" }}>
                  <h4
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      color: "#f8fafc",
                      marginBottom: "0.75rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <IconTarget size={20} />
                    Current Focus
                  </h4>
                  <p
                    style={{
                      color: "#ffffff",
                      lineHeight: 1.7,
                      margin: 0,
                      fontSize: "0.95rem",
                    }}
                  >
                    {personalInfo.currentFocus}
                  </p>
                </div>
              </div>

              {/* Philosophy */}
              <div
                style={{
                  padding: "1.5rem",
                  borderRadius: "16px",
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "4px",
                    height: "100%",
                    background: "linear-gradient(to bottom, #ffffff, #d1d5db)",
                    borderRadius: "2px",
                  }}
                />
                <div style={{ paddingLeft: "1rem" }}>
                  <h4
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      color: "#f8fafc",
                      marginBottom: "0.75rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <IconBulb size={20} />
                    Philosophy
                  </h4>
                  <p
                    style={{
                      color: "#ffffff",
                      lineHeight: 1.7,
                      margin: 0,
                      fontSize: "0.95rem",
                      fontStyle: "italic",
                    }}
                  >
                    {personalInfo.philosophy}
                  </p>
                </div>
              </div>
            </Stack>
          </Card>
        </div>

        {/* Education Journey Section */}
        <div style={{ marginTop: "1rem" }}>
          <div style={{ textAlign: "center", marginBottom: "1rem" }}>
            <Title
              order={2}
              style={{
                fontSize: "clamp(2rem, 4vw, 2.5rem)",
                fontWeight: 300,
                color: "#f8fafc",
                marginBottom: "1rem",
                letterSpacing: "-0.02em",
                fontFamily:
                  'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
              }}
            >
              Education Journey
            </Title>
            <div
              style={{
                width: "60px",
                height: "3px",
                background: "linear-gradient(90deg, #ffffff, #d1d5db)",
                margin: "0 auto",
                borderRadius: "2px",
              }}
            />
          </div>

          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <Timeline
              active={educations.length}
              bulletSize={32}
              lineWidth={2}
              color="rgba(255, 255, 255, 0.6)"
              styles={{
                itemBullet: {
                  backgroundColor: "#ffffff",
                  border: "2px solid rgba(255, 255, 255, 0.9)",
                  boxShadow:
                    "0 0 20px rgba(255, 255, 255, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                },
                itemBody: {
                  paddingLeft: "0.5rem",
                },
              }}
            >
              {educations.map((edu, index) => (
                <Timeline.Item
                  key={index}
                  bullet={<IconSchool size={18} style={{ color: "#000000" }} />}
                  style={{
                    paddingBottom: "0.5rem",
                  }}
                >
                  <EducationItem edu={edu} />
                </Timeline.Item>
              ))}
            </Timeline>
          </div>
        </div>

        <style jsx>{`
          @media (max-width: 768px) {
            .about-grid {
              grid-template-columns: 1fr !important;
              gap: 1.5rem !important;
            }

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

        {/* Skill Detail Modal */}
        <Modal
          opened={!!selectedSkill}
          onClose={() => setSelectedSkill(null)}
          title={`${selectedSkill} - Skill Details`}
          size="md"
          centered
          styles={{
            title: { color: "#ffffff", fontSize: "1.3rem", fontWeight: 600 },
            header: {
              background: "rgba(0, 0, 0, 0.95)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
            },
            body: { background: "rgba(0, 0, 0, 0.95)", padding: "2rem" },
            content: {
              background: "rgba(0, 0, 0, 0.95)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            },
          }}
        >
          <Stack gap="md">
            <Text size="sm" style={{ color: "#ffffff", textAlign: "center" }}>
              {selectedSkill} is one of my core competencies that I&apos;ve
              developed through hands-on projects and continuous learning.
            </Text>
            <div style={{ textAlign: "center" }}>
              <IconCode
                size={48}
                style={{ color: "#ffffff", marginBottom: "1rem" }}
              />
              <Text size="lg" fw={500} style={{ color: "#ffffff" }}>
                {selectedSkill}
              </Text>
            </div>
          </Stack>
        </Modal>

        {/* Interest Detail Modal */}
        <Modal
          opened={!!selectedInterest}
          onClose={() => setSelectedInterest(null)}
          title={`${selectedInterest} - Personal Interest`}
          size="md"
          centered
          styles={{
            title: { color: "#ffffff", fontSize: "1.3rem", fontWeight: 600 },
            header: {
              background: "rgba(0, 0, 0, 0.95)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
            },
            body: { background: "rgba(0, 0, 0, 0.95)", padding: "2rem" },
            content: {
              background: "rgba(0, 0, 0, 0.95)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            },
          }}
        >
          <Stack gap="md">
            <Title order={3} style={{ color: "#ffffff", textAlign: "center" }}>
              I just like it that&apos;s it :D
            </Title>
          </Stack>
        </Modal>

        <style jsx>{`
          @media (max-width: 768px) {
            section {
              padding: 3rem 1rem !important;
            }

            div[style*="grid-template-columns"] {
              grid-template-columns: 1fr !important;
              gap: 1.5rem !important;
            }

            h2,
            h3 {
              font-size: clamp(1.5rem, 6vw, 2.5rem) !important;
            }
          }

          @media (max-width: 480px) {
            section {
              padding: 2rem 0.75rem !important;
            }
          }
        `}</style>
      </Container>
    </Box>
  );
};

