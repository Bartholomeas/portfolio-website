'use client';

import React, { PropsWithChildren } from 'react';
import { Container, AppShell as MantineAppShell } from '@mantine/core';

import { Header } from '../common/appShell/Header';
import { Footer } from '../common/appShell/Footer';
import { Aside } from '../common/appShell/Aside';
import { Dialog } from '../common/mantine/Dialog';

function AppShell({ children }: PropsWithChildren) {
  return (
    <MantineAppShell header={<Header />} footer={<Footer />} aside={<Aside />}>
      <Container size="md" p={0}>
        <main>
          {children}
          <Dialog />
        </main>
      </Container>
    </MantineAppShell>
  );
}

export default AppShell;
