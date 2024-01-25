import { Heading, Container, Flex, Text, Box } from "@radix-ui/themes";
import { motion } from "framer-motion";
import { IconLocationFilled, IconHome } from "@tabler/icons-react";

export default function NameCard() {
  return (
    <Container className="flex justify-center items-center h-screen text-gray-400">
      <Flex gap="4" align="center" direction="column">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Heading as="h1" size="9" className="">
            Nay Htet Kyaw
          </Heading>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Text as="span" size="5" align="center">
            Senior Software Engineering Student
          </Text>

          <Box className="flex flex-row mt-2 justify-center">
            <>
              <IconLocationFilled size={18} className="self-center" />
              <Text as="span" size="5" align="center" className="ml-2">
                Bangkok
              </Text>
            </>
            <>
              <IconHome size={18} className="self-center ml-4" />
              <Text as="span" size="5" align="center" className="ml-2">
                Myanmar
              </Text>
            </>
          </Box>
        </motion.div>
      </Flex>
    </Container>
  );
}
