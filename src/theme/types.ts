type ThemeColorsCodes = {
  primary: 'primary';

  bg: 'bg';
  bgDark: 'bgDark';

  textPrimary: 'textPrimary';
  textSecondary: 'textSecondary';

  black: 'black';
  white: 'white';

  error: 'error';
  success: 'success';
};

export type ThemeColors = keyof ThemeColorsCodes;
