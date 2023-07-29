'use client';

import { AppShell as MantineAppShell } from '@mantine/core';
import React, { PropsWithChildren } from 'react';

import { Footer } from '../common/appShell/footer/Footer';
import { Header } from '../common/appShell/Header';

export function AppShell({ children }: PropsWithChildren) {
  return (
    <MantineAppShell header={<Header />} footer={<Footer />} padding={0}>
      {children}
    </MantineAppShell>
  );
}
