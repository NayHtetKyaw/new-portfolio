"use client";

import { AppShell } from "@mantine/core";
import { ReactNode } from "react";
import ApplicationHeaders from "./ApplicationHeaders";

interface ApplicationShellProps {
  children: ReactNode;
}

export default function ApplicationShell({ children }: ApplicationShellProps) {
  return (
    <AppShell padding="md">
      <ApplicationHeaders />
      <AppShell.Main>
        {children}
      </AppShell.Main>
    </AppShell>
  );
}

