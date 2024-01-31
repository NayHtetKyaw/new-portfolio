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
        link: "/index",
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


export default function Navigation({ title, link }: NavigationProps) {
    return (
        <Container className="w-full bg-red-300">
            <Flex justify="end" gap="3" direction="row" >
                {navigationData.map((navigation, link) => (
                    <Link >

                    </Link>
                ))}
            </Flex>
        </Container> 
    );
}
