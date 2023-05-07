'use client';

import React, { PropsWithChildren } from 'react';
import { Global, MantineProvider, createEmotionCache } from '@mantine/core';
import { basicTheme } from '@/theme/mantine-theme';

const ThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <MantineProvider theme={basicTheme} withGlobalStyles withNormalizeCSS>
      <Global
        styles={theme => ({
          body: {
            fontFamily: 'Poppins, sans-serif',
            backgroundColor: theme.other.bg,
            color: theme.white,
          },
          a: {
            color: 'inherit',
            textDecoration: 'none',
          },

          'h1,h2,h3,h4,h5,h6': {
            fontFamily: 'Merriweather, serif',
          },
        })}
      />
      {children}
    </MantineProvider>
  );
};

export default ThemeProvider;
