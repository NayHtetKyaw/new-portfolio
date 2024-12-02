import { Container, Title, Text, Flex } from "@mantine/core"

export default function Home() {
  return (
    <Container>
      <Flex direction="row" justify="center">
        <Flex direction="column" justify="center">
          <Title order={1}>Hello !</Title>
          <Title order={2}>Anascence</Title>
        </Flex>

        <Flex direction="column" justify="center">
        </Flex>
      </Flex>
    </Container>
  );
}
