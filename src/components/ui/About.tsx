import { Container, Flex, Card, Heading, Box} from "@radix-ui/themes";

export default function About() {
    return (
        <Container>
            <Flex align={"center"} justify={"center"} gap="4">
                <Card>
                    <Box className="">
                        <Heading>What I Do</Heading>
                    </Box>
                </Card>
               
                <Card>
                    <Box className="">
                        <Heading>Projects</Heading>
                    </Box>
                </Card>
            </Flex>
        </Container>
    );
}