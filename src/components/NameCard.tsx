import { Heading, Container, Flex, Text, Box } from "@radix-ui/themes";
import { motion } from "framer-motion";
import { IconLocationFilled, IconHome } from "@tabler/icons-react";
import Image from "next/image";

export default function NameCard() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <Container className="flex justify-center h-screen text-gray-400">
      <Flex gap="4" align="center" direction="column">
        <motion.ul variants={container} initial="hidden" animate="visible">
          <motion.li variants={item}>
            <Image
              src="/media/profile.png"
              alt="Nay Htet Kyaw"
              width={200}
              height={200}
              className="rounded-full"
            />
          </motion.li>

          <motion.li variants={item}>
            <Heading as="h1" className="text-6xl sm:text-7xl">
              「Nay Htet Kyaw」
            </Heading>
          </motion.li>

          <motion.li variants={item} className="text-center mt-2">
            <Text as="span" size="5" align="center">
              Senior Software Engineering Student
            </Text>
          </motion.li>

          <Box className="flex flex-row mt-2 justify-center">
            <motion.li variants={item} className="flex flex-row content-center">
              <IconLocationFilled size={18} className="self-center" />
              <Text size="5" align="center" ml={"2"}>
                Bangkok
              </Text>
            </motion.li>

            <motion.li variants={item} className="flex flex-row content-center">
              <IconHome size={18} className="self-center ml-4" />
              <Text as="span" size="5" align="center" className="ml-2">
                Myanmar
              </Text>
            </motion.li>
          </Box>
        </motion.ul>
      </Flex>
    </Container>
  );
}
