import { Box, Stack, Title, Text, Container, Card, Flex } from "@mantine/core";
import { IconCode, IconLabel, IconFileDescription, IconBrandGit } from "@tabler/icons-react";
import Link from "next/link";

interface Project {
  name: string;
  description: string;
  technologies: string;
  repos?: {
    link: string;
    text: string;
  }[];
}

const fieldIcons = {
  name: <IconLabel size={25} />,
  description: <IconFileDescription size={25} className="flex-shrink-0" />,
  technologies: <IconCode size={25} className="flex-shrink-0" />,
  repo: <IconBrandGit size={25} className="flex-shrink-0" />
}

const projects: Project[] = [
  {
    name: "Course Compose",
    description: "Web application for reviewing courses at Stamford International University",
    technologies: "NextJs, TypesScript, GoLang, Tailwind, Mantine/core, Redis, Supabase, Posgresql, Docker",
    repos: [
      {
        link: "https://github.com/stamford-syntax-club/course-compose",
        text: "/stamford-syntax-club/course-compose",
      },
    ]
  },
  {
    name: "Stamford Center",
    description: "A centralized web application for accessing all kind of documents and resources needed as a student at Stamford",
    technologies: "NextJs, TypesScript, Javascript, Tailwind, Mantine/core, Redis, Docker",
    repos: [
      {
        link: "https://github.com/stamford-syntax-club/stamfordcenter-frontend.git",
        text: "/stamford-syntax-club/stamfordcenter-frontend",
      },
      {
        link: "https://github.com/stamford-syntax-club/stamfordcenter-backend.git",
        text: "/stamford-syntax-club/stamfordcenter-backend",
      }
    ]
  },
  {
    name: "Style War",
    description: "A customized coding competition platform that allow users to write codes and preview the result at the same time. And allow judges and admin to view all the competitor's result overview and code detials",
    technologies: "NextJs, TypesScript, GoLang, Tailwind, Mantine/core, WebSocket, Clerk auth, Docker",
    repos: [
      {
        link: "https://github.com/stamford-syntax-club/style-war",
        text: "/stamford-syntax-club/style-war",
      }
    ]
  },
  {
    name: "My Spotify Taste",
    description: "A web platform to view all the detials about your spotify listening stats",
    technologies: "NextJs, TypesScript, GoLang, Tailwind, Mantine/core, SpotifyWebApi",
    repos: [
      {
        link: "https://github.com/NayHtetKyaw/mySpotifyTaste",
        text: "/NayHtetKyaw/mySpotifyTaste",
      }
    ]
  },
  {
    name: "CoffeeShop",
    description: "A web platform functions as the online shop to order food & beverages",
    technologies: "HTML, CSS, PHP, MYSQL, JavaScript",
    repos: [
      {
        link: "https://github.com/NayHtetKyaw/coffeeshop.git",
        text: "/NayHtetKyaw/coffeeshop",
      }
    ]
  },
  {
    name: "Redis Client App",
    description: "Platform to test out redis database",
    technologies: "Typescript, nextjs, redis, Javascript",
    repos: [
      {
        link: "https://github.com/NayHtetKyaw/redis-client-app.git",
        text: "/NayHtetKyaw/redis-client-app",
      }
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

              <Flex align="center" gap="sm" mb="sm" className="items-center" >
                {fieldIcons.repo}
                {item.repos?.map((repo, repoIndex) => (
                  <Link key={`${index}-repo-${repoIndex}`} href={repo.link} target="_blank">
                    <Text className="text-sky-700 text-wrap">{repo.text}</Text>
                  </Link>
                ))}
              </Flex>
            </Card>
          ))}
        </Stack>
      </Box>
    </Container>
  )
}

