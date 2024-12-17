"use client"

import {
  Card,
  Container,
  Text,
  Flex,
  Center,
  Loader,
  ActionIcon
} from "@mantine/core";
import {
  IconUser,
  IconBriefcase,
  IconCake,
  IconFlag,
  IconMapPin,
  IconDeviceIpadHorizontalCode,
  IconArrowBadgeDownFilled,
  IconArrowBadgeUpFilled
} from "@tabler/icons-react";

import { useScrollIntoView } from "@mantine/hooks";
import Image from "next/image";
import { Suspense, useEffect, useState } from "react";

import Projects from "./projects/page";
import Skills from "./skills/page";
import Blog from "./blog/page";

interface UserInfo {
  name: string;
  role: string;
  dob: string;
  nationality: string;
  location: string;
  overview: string;
}

const userInformation: UserInfo[] = [
  {
    name: "Nay Htet Kyaw",
    role: "Software Engineering Student",
    dob: "Sep 16",
    nationality: "Burmese",
    location: "Bangkok",
    overview: "Full Stack Dev wannabe"
  }
]

const fieldIcons = {
  name: <IconUser size={25} stroke={1.5} />,
  role: <IconBriefcase size={25} stroke={1.5} />,
  dob: <IconCake size={25} stroke={1.5} />,
  nationality: <IconFlag size={25} stroke={1.5} />,
  location: <IconMapPin size={25} stroke={1.5} />,
  overview: <IconDeviceIpadHorizontalCode size={25} stroke={1.5} />,
};

type UserInfoField = keyof typeof fieldIcons;

const LoadingBars = () => {
  return (
    <Loader
      type="bars"
      variant="bars"
      color="blue"
      size="md"
    />
  )
}

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [windowheigh, setWindowHeigh] = useState<number | undefined>(undefined)


  const toggleVisibility = () => {
    if (window.scrollY > window.innerHeight) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowHeigh(window.innerHeight)
      window.addEventListener("scroll", toggleVisibility);

      return () => window.removeEventListener("scroll", toggleVisibility)
    }
  }, []);

  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    duration: 500,
    offset: windowheigh || 10,
  });

  function ScrollUp() {
    if (!isVisible) return null;
    return (
      <ActionIcon
        onClick={scrollToTop}
        variant="default"
        size="md"
        color=""
        className="fixed bottom-6 right-6 z-50 hover:scale-110 transition-transform"
        aria-label="Scroll to top ^"
      >
        <IconArrowBadgeUpFilled size={25} />
      </ActionIcon>
    )
  }


  return (
    <Suspense fallback={<LoadingBars />}>
      <Container fluid className="bg-cover bg-home-bg mt-2">
        <Center className="min-h-screen flex flex-col">
          <Card radius="lg" className="bg-black/50">
            <Flex wrap="wrap-reverse" gap="lg" justify="center" align="center">
              <Flex direction="column" gap="lg">
                <Image src="/media/ntmy1.png" alt="welcome" width={500} height={500} />
                <Text>˚✦. ★⋆..˚✭*✦..✦˚˚.˚𓇼 ⋆.˚ 𓆉 𓆝 𓆡⋆.˚ 𓇼</Text>
                {userInformation.map((user, index) => (
                  <Flex direction="column" w="100%" key={index} justify="center" gap="sm">
                    {(Object.keys(user) as UserInfoField[]).map((field) => {
                      if (!(field in fieldIcons)) return null;
                      return (
                        <Flex key={field} direction="row" justify="start" align="center" gap="sm">
                          {fieldIcons[field]}
                          <Text className="lg:text-2xl">
                            {user[field]}
                          </Text>
                        </Flex>
                      )
                    })}
                  </Flex>
                ))}
              </Flex>

              <Flex direction="column" justify="center" align="center" h="100%">
                <Image src="/media/avatar.png" alt="avatar" width={500} height={500} />
              </Flex>
            </Flex>
          </Card>
          <IconArrowBadgeDownFilled onClick={() =>
            scrollIntoView({ alignment: "center" })
          }
            size={50} className="my-5 lg:my-20 cursor-pointer hover:animate-spin" />
        </Center>
      </Container>
      <div ref={targetRef}>
        <Skills />
      </div>
      <Projects />
      <Blog />
      <ScrollUp />
    </Suspense>
  );
}
