'use client';

import React, { PropsWithChildren } from 'react';

import { Footer } from '../common/appShell/Footer';
import { Header } from '../common/appShell/Header/Header';
import { AppShell as MantineAppShell } from '../common/mantine';

export function AppShell({ children }: PropsWithChildren) {
  return (
    <MantineAppShell header={<Header />} footer={<Footer />} padding={0}>
      {children}
    </MantineAppShell>
  );
}
