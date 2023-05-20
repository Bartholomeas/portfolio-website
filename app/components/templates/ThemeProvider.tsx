'use client';

import React, { PropsWithChildren } from 'react';
import { Global, MantineProvider } from '@mantine/core';
import { basicTheme } from '../../../theme/mantine-theme';

function ThemeProvider({ children }: PropsWithChildren) {
  return (
    <MantineProvider theme={basicTheme} withGlobalStyles withNormalizeCSS>
      <Global
        styles={(theme) => ({
          body: {
            backgroundColor: theme.other.bg,
            color: theme.white,
          },
          a: {
            color: 'inherit',
            textDecoration: 'none',
          },
        })}
      />
      {children}
    </MantineProvider>
  );
}

export default ThemeProvider;
