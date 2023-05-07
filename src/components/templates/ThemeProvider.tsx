'use client';

import React, { PropsWithChildren, useState } from 'react';
import {
  ColorScheme,
  ColorSchemeProvider,
  Global,
  MantineProvider,
  createEmotionCache,
} from '@mantine/core';
import { basicTheme } from '@/theme/mantine-theme';

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');

  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  };

  const myCache = createEmotionCache({
    key: 'mantine',
    prepend: false,
  });

  return (
    // <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
    <MantineProvider emotionCache={myCache} theme={basicTheme} withGlobalStyles withNormalizeCSS>
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
    // </ColorSchemeProvider>
  );
};

export default ThemeProvider;
