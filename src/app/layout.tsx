import type { Metadata } from "next";

import "./globals.css";
import "@mantine/core/styles.css";

import { createTheme, MantineProvider } from "@mantine/core";
import { Analytics } from "@vercel/analytics/react";
import ApplicationShell from "./components/core/AppShell";

export const metadata: Metadata = {
  title: "Anascence",
  description: "My portfolio",
  icons: {
    icon: "/dev.ico",
  },
};

const theme = createTheme({
  colors: {
    dark: [
      "#A3A4A7",
      "#8C8D90",
      "#76777A",
      "#45474B",
      "#2A2C30",
      "#212326",
      "#1B1C1F",
      "#131416",
      "#0F0F10",
      "#0A0A0B",
    ],
  },
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          <Analytics />
          <ApplicationShell>{children}</ApplicationShell>
        </MantineProvider>
      </body>
    </html>
  );
}
