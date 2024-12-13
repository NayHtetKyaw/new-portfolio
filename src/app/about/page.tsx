"use client"

import { Container, Stack, Title, Box, Card, Flex } from "@mantine/core"
import { ReactElement } from "react";
import Image from "next/image"
import React, { useState } from "react"

interface Skill {
  name: string;
  icon: ReactElement;
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
]

export default function About() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)

  return (
    <Container>
      <Stack>
        <Title order={1}>SKILLS</Title>
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

