import { Box, Stack, Title, Text, Container, Card, Flex } from "@mantine/core";
import { IconCode, IconLabel, IconFileDescription, IconBrandGit, IconBrandTypescript } from "@tabler/icons-react";
import React, { ReactElement } from "react";
import Link from "next/link";

interface Projects {
  name: string;
  description: string;
  technologies: string;
  repo: ReactElement[];
}

const fieldIcons = {
  name: <IconLabel size={25} />,
  description: <IconFileDescription size={25} className="flex-shrink-0" />,
  technologies: <IconCode size={25} className="flex-shrink-0" />,
  repo: <IconBrandGit size={25} className="flex-shrink-0" />
}

const projects: Projects[] = [
  {
    name: "Course Compose",
    description: "Web application for reviewing courses at Stamford International University",
    technologies: "NextJs, TypesScript, GoLang, Tailwind, Mantine/core, Redis, Supabase, Posgresql, Docker",
    repo: [
      <Link href="https://github.com/stamford-syntax-club/course-compose" target="_blank" className="text-sky-700">/stamford-syntax-club/course-compose</Link>
    ]
  },
  {
    name: "Stamford Center",
    description: "A centralized web application for accessing all kind of documents and resources needed as a student at Stamford",
    technologies: "NextJs, TypesScript, Javascript, Tailwind, Mantine/core, Redis, Docker",
    repo: [
      <Link href="https://github.com/stamford-syntax-club/stamfordcenter-frontend.git" target="_blank" className="text-sky-700">/stamford-syntax-club/stamfordcenter-frontend</Link>,
      <Link href="https://github.com/stamford-syntax-club/stamfordcenter-backend.git" target="_blank" className="text-sky-700 ml-5">/stamford-syntax-club/stamfordcenter-backend</Link>
    ]
  },
  {
    name: "Style War",
    description: "A customized coding competition platform that allow users to write codes and preview the result at the same time. And allow judges and admin to view all the competitor's result overview and code detials",
    technologies: "NextJs, TypesScript, GoLang, Tailwind, Mantine/core, WebSocket, Clerk auth, Docker",
    repo: [
      <Link href="https://github.com/stamford-syntax-club/style-war" target="_blank" className="text-sky-700">/stamford-syntax-club/style-war</Link>
    ]
  },
  {
    name: "My Spotify Taste",
    description: "A web platform to view all the detials about your spotify listening stats",
    technologies: "NextJs, TypesScript, GoLang, Tailwind, Mantine/core, SpotifyWebApi",
    repo: [
      <Link href="https://github.com/stamford-syntax-club/style-war" target="_blank" className="text-sky-700">/NayHtetKyaw/mySpotifyTaste</Link>
    ]
  },
  {
    name: "CoffeeShop",
    description: "A web platform functions as the online shop to order food & beverages",
    technologies: "HTML, CSS, PHP, MYSQL, JavaScript",
    repo: [
      <Link href="https://github.com/NayHtetKyaw/coffeeshop.git" target="_blank" className="text-sky-700">/NayHtetKyaw/coffeeshop</Link>
    ]
  },
  {
    name: "Redis Client App",
    description: "Platform to test out redis database",
    technologies: "Typescript, nextjs, redis, Javascript",
    repo: [
      <Link href="https://github.com/NayHtetKyaw/redis-client-app.git" target="_blank" className="text-sky-700">/NayHtetKyaw/redis-client-app</Link>
    ]
  },
]

export default function Projects() {
  return (
    <Container className="my-12">
      <Box>
        <Title order={1}>Projects</Title>
        <Stack>
          {projects.map((item, index) => (
            <Card key={index} mt="sm">
              <Flex mb="sm">
                <Title order={2}>{item.name}</Title>
              </Flex>

              <Flex align="center" gap="sm" mb="sm">
                {fieldIcons.description}
                <Text>{item.description}</Text>
              </Flex>

              <Flex align="center" gap="sm" mb="sm">
                {fieldIcons.technologies}
                <Text>{item.technologies}</Text>
              </Flex>

              <Flex align="center" gap="sm" mb="sm">
                {fieldIcons.repo}
                <Text>{item.repo}</Text>
              </Flex>
            </Card>
          ))}
        </Stack>
      </Box>
    </Container>
  )
}

