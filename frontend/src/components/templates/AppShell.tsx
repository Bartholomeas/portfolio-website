'use client';

import { AppShell as MantineAppShell } from '@mantine/core';
import React, { PropsWithChildren } from 'react';

import { Footer } from '../common/appShell/Footer/Footer';
import { Header } from '../common/appShell/Header';

function AppShell({ children }: PropsWithChildren) {
  return (
    <MantineAppShell header={<Header />} footer={<Footer />} padding={0}>
      {children}
    </MantineAppShell>
  );
}

export default AppShell;
