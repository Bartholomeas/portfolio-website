'use client';

import React, { PropsWithChildren } from 'react';
import { AppShell as MantineAppShell } from '@mantine/core';

import Header from '../common/appShell/Header';
import Footer from '../common/appShell/Footer';
import Aside from '../common/appShell/Aside';

const AppShell = ({ children }: PropsWithChildren) => {
  return (
    <MantineAppShell header={<Header />} footer={<Footer />} aside={<Aside />}>
      {children}
    </MantineAppShell>
  );
};

export default AppShell;
