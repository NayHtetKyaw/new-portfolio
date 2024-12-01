"use client";

import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ReactNode } from "react";
import ApplicationHeaders from "./ApplicationHeaders";

export default function ApplicationShell({ children }: { children: ReactNode }) {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      padding="md"
    >

      <ApplicationHeaders />

      <AppShell.Main>
        {children}
      </AppShell.Main>
    </AppShell>
  )
}

