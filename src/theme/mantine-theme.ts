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

const themeSizes: MantineThemeOther = {};

export const basicTheme: MantineThemeOther = {
  colorScheme: 'dark',
  fontFamily: ['Poppins, sans-serif', 'Merriweather, serif'],
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
