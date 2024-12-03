import { Container, Flex, SimpleGrid } from "@mantine/core"
import Image from "next/image"

export default function Home() {
  return (
    <Container>
      <SimpleGrid cols={2}>
        <Flex direction="column" justify="center">
          <Image src="/media/welcome-font1.png" alt="welcome" width={500} height={500} />
        </Flex>

        <Flex direction="column" justify="center" align="center" h="100%">
          <Image src="/media/avatar.png" alt="avatar" width={500} height={500} />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
