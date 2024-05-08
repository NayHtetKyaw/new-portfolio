import { Container, Flex, Link } from "@radix-ui/themes";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/utils/cn";


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

export default function Navigation( {className}: {className?: string}) {
    const [active, setActive] = useState<string | null>(null);

    return (
        <div
        className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
      >
        <Menu setActive={setActive}>
          {navigationData.map((item, index) => (
            <MenuItem key={index} setActive={function (item: string): void {
              throw new Error("Function not implemented.");
            } } active={null} item={""}>
              <Link href={item.link}>
                <HoveredLink
                  onMouseEnter={() => setActive(item.title)}
                  onMouseLeave={() => setActive(null)}
                  active={active === item.title}
                >
                  {item.title}
                </HoveredLink>
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
}
