import { MantineThemeOther } from '@mantine/core';

export const darkThemeColors: MantineThemeOther = {
  primary: '#00F680',

  bg: '#1A1A25',
  bgDark: '#15151E',

  black: '#000000',
  white: '#FFFFFF',

  textPrimary: '#ffffff',
  textSecondary: '#9B9BAE',

  error: '#FF4264',
  success: '#00F680',
};

const themeSizes: MantineThemeOther = {
  fontSizes: {
    xs: 10,
    sm: 12,
    md: 14,
    lg: 18,
    xl: 24,
  },

  headings: {
    sizes: {
      h1: { fontWeight: 700, fontSize: '3rem', lineHeight: 1.4 },
      h2: { fontWeight: 400, fontSize: '1.5rem', lineHeight: 1 },
    },
  },
};

export const basicTheme: MantineThemeOther = {
  colorScheme: 'dark',
  other: darkThemeColors,
  ...themeSizes,
  primaryColor: 'primary',
  primaryShade: 6,
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
};
