'use client';

import { Global, MantineProvider } from '@mantine/core';
import React, { PropsWithChildren } from 'react';

import { basicTheme } from '../../misc/theme/mantine-theme';

function ThemeProvider({ children }: PropsWithChildren) {
  return (
    <MantineProvider theme={basicTheme} withGlobalStyles withNormalizeCSS>
      <Global
        styles={(theme) => ({
          body: {
            backgroundColor: theme.other.bg,
            color: theme.white,
            fontFamily: 'Poppins, sans-serif',
            scrollBehavior: 'smooth',
          },
          a: {
            color: 'inherit',
            textDecoration: 'none',
            fontFamily: 'Poppins, sans-serif',
          },
          button: {
            color: 'inherit',
            textDecoration: 'none',
            fontFamily: 'Poppins, sans-serif',
          },

          'h1,h2,h3,h4,h5,h6': {
            fontFamily: 'Oswald, sans-serif',
          },
        })}
      />
      {children}
    </MantineProvider>
  );
}

export default ThemeProvider;
