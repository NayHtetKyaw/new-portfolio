import { Heading, Container, Flex, Link } from "@radix-ui/themes";
import { motion } from "framer-motion";

interface NavigationProps {
  title: string;
  link: string;
}

//create an array of tile and subtitle
const navigationData: NavigationProps[] = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/About",
  },
  {
    title: "Projects",
    link: "/Projects",
  },
  {
    title: "Contact",
    link: "/Contact",
  },
];

export function Navigation() {
  return (
    <Container className="flex justify-center h-20 text-gray-400">
      <Flex gap="4" align="center" direction="row">
        {navigationData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href={item.link} className="text-2xl">
              {item.title}
            </Link>
          </motion.div>
        ))}
      </Flex>
    </Container>
  );
}
