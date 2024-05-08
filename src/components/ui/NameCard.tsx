import { Heading, Container, Flex, Text, Box } from "@radix-ui/themes";
import { motion } from "framer-motion";
import { IconLocationFilled, IconHome } from "@tabler/icons-react";

export default function NameCard() {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <Container className="flex justify-center h-screen text-gray-400 z-20">
        <Flex gap="4" align="center" direction="column" className=" inset-0 ">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Heading as="h1" className="text-5xl sm:text-7xl">
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
            <motion.ul>
              <Box className="flex flex-row mt-2 justify-center">
                <motion.li
                  variants={item}
                  className="flex flex-row content-center"
                >
                  <IconLocationFilled size={18} className="self-center" />
                  <Text size="5" align="center" ml={"2"}>
                    Bangkok
                  </Text>
                </motion.li>

                <motion.li
                  variants={item}
                  className="flex flex-row content-center"
                >
                  <IconHome size={18} className="self-center ml-4" />
                  <Text as="span" size="5" align="center" className="ml-2">
                    Myanmar
                  </Text>
                </motion.li>
              </Box>
            </motion.ul>
          </motion.div>
        </Flex>
    </Container>
  );
}
