import { Container, Divider, Box, Flex, Text, Card, Title } from "@mantine/core"
import { IconProgressCheck, IconSchool, IconBuilding, IconExternalLink } from "@tabler/icons-react"
import Link from "next/link"
import { memo } from "react";

interface Education {
  school: string;
  degree: string;
  timeStamp: string;
  status: string;
  link: string;
};

const educations: Education[] = [
  {
    school: "Stamford International University",
    degree: "Bechelor of Science | Information Technology",
    timeStamp: "2022 - 2025",
    status: "Currently studying here",
    link: "https://www.stamford.edu/",
  },
  {
    school: "Info Myanmar Collage",
    degree: "BTEC level 5 Diploma in Software engineering",
    timeStamp: "2019 - 2022",
    status: "Graduated",
    link: "https://infomyanmarcollege.com/",
  },
];

const EducationItem = memo(({ edu }: { edu: Education }) => (
  <Box className="my-3">
    <Flex align="center" justify="space-between">
      <Text c="dimmed">{edu.timeStamp}</Text>
      <Link href={edu.link} target="_blank">
        <IconExternalLink size={15} className="flex-shrink-0" />
      </Link>
    </Flex>
    <Flex align="center" gap="xs">
      <IconBuilding size={25} className="flex-shrink-0" />
      <Title order={4}>{edu.school}</Title>
    </Flex>
    <Flex align="center" gap="xs">
      <IconSchool size={25} className="flex-shrink-0" />
      <Text size="sm">{edu.degree}</Text>
    </Flex>
    <Flex align="center" gap="xs">
      <IconProgressCheck size={25} className="flex-shrink-0" />
      <Text size="sm">{edu.status}</Text>
    </Flex>
    <Divider my="md" orientation="horizontal" />
  </Box>
))


export default function Blog() {
  return (
    <Container>
      <Title order={1}>Education Journey</Title>
      <Card my="sm">
        {educations.map((edu, index) => (
          <EducationItem key={`${edu.school}-${index}`} edu={edu} />
        ))}
      </Card>
    </Container>
  )
}

EducationItem.displayName = "EducationItem";
