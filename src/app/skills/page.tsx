"use client";

import { Container, Text, Stack, Title, Box, Card, Flex, Center } from "@mantine/core";
import { ReactElement } from "react";
import Image from "next/image";
import { IconBox, IconDatabaseCog, IconGhost3Filled, IconServerCog, IconWorldCode } from "@tabler/icons-react";
import { useState } from "react";

interface Skill {
  name: string;
  icon: ReactElement;
  techStack?: string;
}

const skills: Skill[] = [
  {
    name: "TypeScript",
    icon: <Image src="/logos/typescript.png" width={50} height={50} alt="TypeScript" />
  },
  {
    name: "JavaScript",
    icon: <Image src="/logos/javascript.png" width={50} height={50} alt="JavaScript" />
  },
  {
    name: "Golang",
    icon: <Image src="/logos/golang.png" width={50} height={50} alt="Golang" />
  },
  {
    name: "PHP",
    icon: <Image src="/logos/php.png" width={50} height={50} alt="PHP" />
  },
  {
    name: "Python",
    icon: <Image src="/logos/python.png" width={50} height={50} alt="Python" />
  },
  {
    name: "Redis",
    icon: <Image src="/logos/redis.png" width={50} height={50} alt="Redis" />
  },
  {
    name: "MySQL",
    icon: <Image src="/logos/mysql.png" width={50} height={50} alt="MySQL" />
  },
  {
    name: "Docker",
    icon: <Image src="/logos/docker.png" width={50} height={50} alt="Docker" />
  },
  {
    name: "PostgreSQL",
    icon: <Image src="/logos/postgresql.png" width={50} height={50} alt="PostgreSQL" />
  },
  {
    name: "Next.js",
    icon: <Image src="/logos/nextjs-white.png" width={50} height={50} alt="Next.js" />
  },
  {
    name: "Vim",
    icon: <Image src="/logos/vim.png" width={50} height={50} alt="Vim" />
  },
  {
    name: "Arch",
    icon: <Image src="/logos/arch.png" width={50} height={50} alt="Arch Linux" />
  },
  {
    name: "Kubernetes",
    icon: <Image src="/logos/kubernetes.png" width={50} height={50} alt="Kubernetes" />
  },
  {
    name: "Kafka",
    icon: <Image src="/logos/kafka.png" width={50} height={50} alt="Kafka" />
  },
];

const skillSets: Skill[] = [
  {
    name: "Web Development",
    techStack: "Next.js, React, TypeScript, PHP, Go",
    icon: <IconWorldCode size={30} className="flex-shrink-0 mt-1" />
  },
  {
    name: "Database Management",
    techStack: "MySQL, PostgreSQL, Redis, MongoDB",
    icon: <IconDatabaseCog size={30} className="flex-shrink-0 mt-1" />
  },
  {
    name: "Virtualization & Container Tech",
    techStack: "Docker, Nix",
    icon: <IconBox size={30} className="flex-shrink-0 mt-1" />
  },
  {
    name: "Linux Systems",
    techStack: "User side, system administration",
    icon: <IconGhost3Filled size={30} className="flex-shrink-0 mt-1" />
  },
  {
    name: "IT Operations",
    techStack: "Computer & server operations",
    icon: <IconServerCog size={30} className="flex-shrink-0 mt-1" />
  },
];

export default function Skills() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <Box
      component="section"
      style={{
        minHeight: '100vh',
        padding: 'clamp(1.5rem, 4vw, 3rem) clamp(0.5rem, 2vw, 1rem)',
        position: 'relative',
      }}
    >
      <Container size="lg">
        <Center style={{ marginBottom: '2rem', flexDirection: 'column' }}>
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
            Skills and Interest
          </Title>
          <Box
            style={{
              width: '60px',
              height: '3px',
              background: 'linear-gradient(90deg, #ffffff, #d1d5db)',
              margin: '0 auto',
              borderRadius: '2px',
            }}
          />
        </Center>

        <Stack gap="xl">
          <Card
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
            }}
            p="lg"
          >
            <Box>
              {skillSets.map((skillSet, index) => (
                <Flex key={index} gap="sm" justify="start" my="md" align="start">
                  <Box style={{ color: '#ffffff' }}>{skillSet.icon}</Box>
                  <Box>
                    <Text fw="bold" style={{ color: '#ffffff' }}>{skillSet.name}</Text>
                    <Text size="sm" style={{ color: '#ffffff' }}>{skillSet.techStack}</Text>
                  </Box>
                </Flex>
              ))}
            </Box>
          </Card>

          <Card
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
            }}
            p="lg"
          >
            <Flex direction="row" justify="center" wrap="wrap" className="group">
              {skills.map((item, index) => (
                <Box
                  key={index}
                  m="sm"
                  className="relative group"
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                  style={{
                    padding: 'clamp(0.5rem, 2vw, 1rem)',
                    borderRadius: '12px',
                    background: hoverIndex === index ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                    border: hoverIndex === index ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid transparent',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Box className="relative cursor-pointer">
                    {item.icon}
                    {hoverIndex === index && (
                      <Text
                        size="xs"
                        style={{
                          position: 'absolute',
                          bottom: '-35px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          background: 'rgba(0, 0, 0, 0.9)',
                          color: '#ffffff',
                          padding: '0.5rem 0.75rem',
                          borderRadius: '6px',
                          whiteSpace: 'nowrap',
                          border: '1px solid rgba(255, 255, 255, 0.3)',
                          backdropFilter: 'blur(10px)',
                        }}
                      >
                        {item.name}
                      </Text>
                    )}
                  </Box>
                </Box>
              ))}
            </Flex>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
}

