import { Container, Text, Flex, Center } from "@mantine/core"
import { IconUser, IconBriefcase, IconCake, IconFlag, IconMapPin, IconDeviceIpadHorizontalCode } from "@tabler/icons-react"
import Image from "next/image"

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

export default function Home() {
  return (
    <Container fluid className="h-full">
      <Center mih={800}>
        <Flex wrap="wrap-reverse" gap="lg" justify="center" align="center">
          <Flex direction="column" gap="lg">
            <Image src="/media/welcome-font1.png" alt="welcome" width={500} height={500} />
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
      </Center>
    </Container>
  );
}
