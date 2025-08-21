import {
  IconBrandGithubFilled,
  IconBrandTelegram,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
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
  Text,
  ActionIcon,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { ReactElement } from "react";

interface SocialLink {
  name: string;
  link: string;
  icon: ReactElement;
}

interface NavigationItem {
  title: string;
  href: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    link: "https://github.com/NayHtetKyaw",
    icon: <IconBrandGithubFilled size={22} />,
  },
  {
    name: "Mail",
    link: "https://t.me/nayhtetkyaw",
    icon: <IconBrandTelegram size={22} />,
  },
  {
    name: "X",
    link: "https://x.com/anascence_",
    icon: <IconBrandX size={22} />,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/nay-htet-kyaw-0363bb1a3/",
    icon: <IconBrandLinkedin size={22} />,
  },
];

export const navigationItems: NavigationItem[] = [
  {
    title: "Home",
    href: "/",
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
  {
    title: "Resume",
    href: "/nayhtetkyaw(resume).pdf",
  },
];

export default function ApplicationHeaders() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  const Navigation = ({ items }: { items: NavigationItem[] }) => {
    return (
      <div>
        {items.map((item) => (
          <Flex key={"navItems" + item.title} direction="row" wrap="wrap">
            <NavLink
              component={Link}
              label={item.title}
              href={item.href}
              onClick={closeDrawer}
              style={{
                color: '#e5e7eb',
                fontWeight: 500,
                fontSize: '1rem',
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#e5e7eb';
              }}
            />
          </Flex>
        ))}
      </div>
    );
  };

  return (
    <Box 
      className="sticky top-0 z-50 antialiased" 
      style={{
        background: 'rgba(0, 0, 0, 0.95)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <header 
        style={{
          padding: '0 2rem',
          height: '70px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Title 
          order={1} 
          style={{
            color: '#ffffff',
            fontSize: '1.8rem',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
          }}
        >
          Anascence
        </Title>

        {/* Desktop Navigation */}
        <Group h="100%" gap={0} visibleFrom="sm" style={{ marginRight: '1rem' }}>
          {navigationItems.map((item) => (
            <div key={item.title} style={{ marginRight: '0.5rem' }}>
              <Link 
                href={item.href}
                style={{
                  color: '#e5e7eb',
                  textDecoration: 'none',
                  fontWeight: 500,
                  fontSize: '1rem',
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                  display: 'block',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#e5e7eb';
                }}
              >
                {item.title}
              </Link>
            </div>
          ))}
        </Group>

        {/* Desktop Social Links */}
        <Group visibleFrom="sm" gap="md">
          {socialLinks.map((link, index) => (
            <ActionIcon
              key={index}
              component={Link}
              href={link.link}
              target="_blank"
              size="md"
              variant="subtle"
              style={{
                color: '#e5e7eb',
                background: 'transparent',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              {link.icon}
            </ActionIcon>
          ))}
        </Group>

        {/* Mobile Menu Button */}
        <Burger
          opened={drawerOpened}
          onClick={toggleDrawer}
          hiddenFrom="sm"
          color="#ffffff"
          size="sm"
        />
      </header>

      {/* Mobile Drawer */}
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title={
          <Text 
            style={{
              color: '#ffffff',
              fontSize: '1.5rem',
              fontWeight: 700,
            }}
          >
            Anascence
          </Text>
        }
        hiddenFrom="sm"
        zIndex={1000000}
        styles={{
          header: { 
            background: 'rgba(0, 0, 0, 0.95)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          },
          body: { 
            background: 'rgba(0, 0, 0, 0.95)',
            padding: '2rem',
          },
          content: { 
            background: 'rgba(0, 0, 0, 0.95)',
          }
        }}
      >
        <ScrollArea h="calc(100vh - 80px)" mx="-md">
          <Divider my="lg" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />
          
          {/* Mobile Navigation */}
          <div style={{ marginBottom: '2rem' }}>
            <Text size="sm" fw={500} style={{ color: '#9ca3af', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Navigation
            </Text>
            <Navigation items={navigationItems} />
          </div>

          <Divider my="lg" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />

          {/* Mobile Social Links */}
          <div>
            <Text size="sm" fw={500} style={{ color: '#9ca3af', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Connect
            </Text>
            <Group justify="center" gap="md">
              {socialLinks.map((link, index) => (
                <ActionIcon
                  key={index}
                  component={Link}
                  href={link.link}
                  target="_blank"
                  size="lg"
                  variant="subtle"
                  style={{
                    color: '#e5e7eb',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  {link.icon}
                </ActionIcon>
              ))}
            </Group>
          </div>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
