'use client';

import React, { PropsWithChildren } from 'react';
import { Container, AppShell as MantineAppShell } from '@mantine/core';

import Header from '../common/appShell/Header';
import Footer from '../common/appShell/Footer';
import Aside from '../common/appShell/Aside';

function AppShell({ children }: PropsWithChildren) {
  return (
    <MantineAppShell header={<Header />} footer={<Footer />} aside={<Aside />}>
      <Container size="md" p={0}>
        <main>{children}</main>
      </Container>
    </MantineAppShell>
  );
}

export default AppShell;
