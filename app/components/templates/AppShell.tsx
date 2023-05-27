'use client';

import React, { PropsWithChildren } from 'react';
import { AppShell as MantineAppShell } from '@mantine/core';

import { Header } from '../common/appShell/Header';

import { Aside } from '../common/appShell/Aside';
import { Footer } from '../common/appShell/Footer/Footer';

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
