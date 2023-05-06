'use client';

import React, { PropsWithChildren } from 'react';
import { AppShell as MantineAppShell } from '@mantine/core';

const AppShell = ({ children }: PropsWithChildren) => {
  return <MantineAppShell>{children}</MantineAppShell>;
};

export default AppShell;
