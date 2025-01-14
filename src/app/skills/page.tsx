"use client"

import { Container, Text, Stack, Title, Box, Card, Flex } from "@mantine/core"
import { ReactElement } from "react";
import Image from "next/image"
import React, { useState } from "react"
import { IconBox, IconDatabaseCog, IconGhost3Filled, IconServerCog, IconWorldCode } from "@tabler/icons-react";

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
    name: "Php",
    icon: <Image src="/logos/php.png" width={50} height={50} alt="Php" />
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
    name: "Mysql",
    icon: <Image src="/logos/mysql.png" width={50} height={50} alt="Mysql" />
  },
  {
    name: "Docker",
    icon: <Image src="/logos/docker.png" width={50} height={50} alt="Docker" />
  },
  {
    name: "Postgresql",
    icon: <Image src="/logos/postgresql.png" width={50} height={50} alt="Postgresql" />
  },
  {
    name: "NextJs",
    icon: <Image src="/logos/nextjs-white.png" width={50} height={50} alt="NextJs" />
  },
  {
    name: "Vim",
    icon: <Image src="/logos/vim.png" width={50} height={50} alt="Vim" />
  },
  {
    name: "Arch",
    icon: <Image src="/logos/arch.png" width={50} height={50} alt="Vim" />
  },
  {
    name: "Kubernetes",
    icon: <Image src="/logos/kubernetes.png" width={50} height={50} alt="Vim" />
  },
  {
    name: "Kafka",
    icon: <Image src="/logos/kafka.png" width={50} height={50} alt="Vim" />
  },
];

const skillSets: Skill[] = [
  {
    name: "Web development",
    techStack: "NextJs, React, typescript, Php, Go",
    icon: <IconWorldCode size={30} className="flex-shrink-0 mt-1" />
  },
  {
    name: "Database management",
    techStack: "Mysql, Postgresql, Redis, MongoDb",
    icon: <IconDatabaseCog size={30} className="flex-shrink-0 mt-1" />
  },
  {
    name: "Virtualization + Container techs",
    techStack: "Docker, Nix",
    icon: <IconBox size={30} className="flex-shrink-0 mt-1" />
  },
  {
    name: "Linux Systems",
    techStack: "user side, system adiministration",
    icon: <IconGhost3Filled size={30} className="flex-shrink-0 mt-1" />
  },
  {
    name: "IT operations",
    techStack: "computer & server operations",
    icon: <IconServerCog size={30} className="flex-shrink-0 mt-1" />
  },
]

export default function Skills() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)

  return (
    <Container mt="md">
      <Stack>
        <Title order={1}>SKILLS</Title>
        <Card>
          <Box m="md">
            {skillSets.map((skillSet, index) => (
              <Flex key={index} gap="sm" justify="start" my="md" align="start">
                {skillSet.icon}
                <Box>
                  <Text fw="bold">{skillSet.name}</Text>
                  <Text size="sm">{skillSet.techStack}</Text>
                </Box>
              </Flex>
            ))}
          </Box>
        </Card>
        <Card>
          <Flex direction="row" justify="center" wrap="wrap" className="group">
            {skills.map((item, index) => (
              <Box
                key={index}
                m="sm"
                className="relative group"
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <div className="relative cursor-pointer">
                  {item.icon}
                  {hoverIndex === index && (
                    <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity bottom-[25px] left-1/2 transform -translate-x-1/2 bg-zinc-900">
                      {item.name}
                    </span>
                  )}
                </div>
              </Box>
            ))}
          </Flex>
        </Card>
      </Stack>
    </Container>
  )
}

