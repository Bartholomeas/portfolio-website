'use client';

import React, { PropsWithChildren } from 'react';
import { AppShell as MantineAppShell } from '@mantine/core';

import Header from '../common/header/Header';

const AppShell = ({ children }: PropsWithChildren) => {
  return <MantineAppShell header={<Header />}>{children}</MantineAppShell>;
};

export default AppShell;
