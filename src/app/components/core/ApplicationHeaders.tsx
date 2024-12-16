import {
  IconBrandGithubFilled,
  IconMail,
  IconBrandBluesky,
  IconBrandLinkedin,
} from '@tabler/icons-react';
import {
  Box,
  Burger,
  Flex,
  Divider,
  Title,
  NavLink,
  Drawer,
  Group,
  ScrollArea,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderMegaMenu.module.css';
import Link from "next/link"
import { ReactElement } from 'react';

export interface HeaderProps {
  opened: boolean;
  toggle: () => void;
}

interface SocialLink {
  name: string;
  link: string;
  icon: ReactElement;
}

export interface NavigationItem {
  title: string;
  href: string;
}

const socillinks: SocialLink[] = [
  {
    name: "GitHub",
    link: "https://github.com/NayHtetKyaw",
    icon: <IconBrandGithubFilled size={25} />
  },
  {
    name: "Mail",
    link: "https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrgmLDfsqgSmQGTrhtRvTTcTDhspsKQjNTRLpHTXVlslnSbwNNCCgxVvjQvrWhmtrrbGSV",
    icon: <IconMail size={25} />
  },
  {
    name: "BlueSky",
    link: "https://bsky.app/profile/anascence.bsky.social",
    icon: <IconBrandBluesky size={25} />
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/nay-htet-kyaw-0363bb1a3/",
    icon: <IconBrandLinkedin size={25} />
  },
]

export const navigationItems: NavigationItem[] = [
  {
    title: "Home",
    href: "/"
  },

  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Skills",
    href: "/skills",
  },
  {
    title: "Blog",
    href: "/blog",
  },
]

function Navigation({ items }: { items: NavigationItem[] }) {
  return (
    <div>
      {items.map((item) => (
        <Flex key={"navItems" + item.title} direction="row" wrap="wrap">
          <NavLink component={Link} label={item.title} href={item.href} />
        </Flex>
      ))}
    </div>
  )
}

export default function ApplicationHeaders() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

  return (
    <Box className="sticky top-0 z-50 antialiased bg-neutral-950">
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Title order={1}>Anascence</Title>

          <Group h="100%" gap={0} visibleFrom="sm" mr="sm" className="text-xl">
            {navigationItems.map((item) => (
              <div key={item.title} className="mr-5">
                <NavLink component={Link} label={item.title} href={item.href} className="rounded-md" />
              </div>
            ))}
          </Group>


          <Group visibleFrom="sm" gap="md">
            {socillinks.map((link, index) => (
              <Link key={index} href={link.link} target="_blank">
                {link.icon}
              </Link>
            ))}
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Anascence"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px" mx="-md">
          <Divider my="sm" />
          <Navigation items={navigationItems} />
          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="sm">
            {socillinks.map((link, index) => (
              <div className="flex justify-center" key={index}>
                <Link href={link.link} target="_blank" className="justify-self-center">
                  {link.icon}
                </Link>
              </div>
            ))}
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
