'use client';

import { AppShell as MantineAppShell } from '@mantine/core';
import React, { PropsWithChildren } from 'react';

import { Aside } from '../common/appShell/Aside';
import { Footer } from '../common/appShell/Footer/Footer';
import { Header } from '../common/appShell/Header';

function AppShell({ children }: PropsWithChildren) {
  return (
    <MantineAppShell
      header={<Header />}
      footer={<Footer />}
      aside={<Aside />}
      padding={0}
    >
      {children}
    </MantineAppShell>
  );
}

export default AppShell;
