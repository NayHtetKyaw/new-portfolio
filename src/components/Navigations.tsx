import { Heading, Container, Flex, Link } from "@radix-ui/themes";
import { motion } from "framer-motion";


interface NavigationProps {
    title: string;
    link: string;
}


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
