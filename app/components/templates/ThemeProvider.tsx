'use client';

import React, { PropsWithChildren } from 'react';
import { Global, MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { basicTheme } from '../../../theme/mantine-theme';

function ThemeProvider({ children }: PropsWithChildren) {
  return (
    <MantineProvider theme={basicTheme} withGlobalStyles withNormalizeCSS>
      <ModalsProvider>
        <Global
          styles={(theme) => ({
            body: {
              backgroundColor: theme.other.bg,
              color: theme.white,
              fontFamily: 'Poppins, sans-serif',
            },
            a: {
              color: 'inherit',
              textDecoration: 'none',
            },

            'h1,h2,h3,h4,h5,h6': {
              fontFamily: 'Poppins, sans-serif',
            },
          })}
        />
        {children}
      </ModalsProvider>
    </MantineProvider>
  );
}

export default ThemeProvider;
