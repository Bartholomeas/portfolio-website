import { MantineTheme, MantineThemeOther } from '@mantine/core';

export const darkThemeColors: MantineThemeOther = {
  primary: '#00F680',
  secondary: '#00FFE0',

  bg: '#0A0F0D',
  bgDark: '#15151E',

  black: '#000000',
  white: '#FFFFFF',

  textPrimary: '#e6e6e6',
  textSecondary: '#9B9BAE',

  error: '#FF4264',
  success: '#00F680',
};

const themeSizes: MantineThemeOther = {
  breakpoints: {
    xs: '30em',
    sm: '36em',
    md: '48em',
    lg: '62em',
    xl: '75em',
  },

  fontSizes: {
    xs: 10,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 24,
  },

  headings: {
    sizes: {
      h1: { fontWeight: 700, fontSize: '2rem', lineHeight: 1.4 },
      h2: { fontWeight: 700, fontSize: '1.6rem', lineHeight: 1 },
      h3: { fontWeight: 700, fontSize: '1.2rem', lineHeight: 1 },
      h4: { fontWeight: 700, fontSize: '1rem', lineHeight: 1 },
      h5: { fontWeight: 700, fontSize: '.8rem', lineHeight: 1 },
    },
  },
};

export const basicTheme: MantineThemeOther = {
  colorScheme: 'dark',
  other: darkThemeColors,
  ...themeSizes,
  primaryColor: 'primary',
  primaryShade: 6,
  lineHeight: 1.8,
  fontFamily: 'Poppins, sans-serif',
  headings: { fontFamily: 'Oswald, sans-serif', fontWeight: 700 },
  colors: {
    primary: [
      '#95F9C9',
      '#78F8BA',
      '#5AF6AB',
      '#42F59F',
      '#25F893',
      '#00F680',
      '#03E277',
      '#06D06F',
      '#08C46A',
      '#0BAD5F',
    ],
  },

  components: {
    Card: {
      styles: (theme: MantineTheme) => ({
        root: {
          width: '100%',
          backgroundColor: theme.fn.rgba(theme.other.white, 0.03),
          borderRadius: 8,
          border: `1px solid ${theme.fn.rgba(theme.other.white, 0.1)}`,
          backdropFilter: 'blur(20px)',
          overflow: 'none',
        },
      }),
    },
    Notification: {
      styles: (theme: MantineTheme) => ({
        root: {
          backgroundColor: theme.fn.rgba(theme.other.white, 0.03),
          borderRadius: 8,
          border: `1px solid ${theme.fn.rgba(theme.other.white, 0.2)}`,
          backdropFilter: 'blur(10px)',
        },
      }),
    },
  },
};
