import { Text as MantineText, TextProps, createStyles } from '@mantine/core';

import { ThemeColors } from '../../../../theme/types';
import React from 'react';

type StylesProps = {
  textColor: ThemeColors;
};

const useStyles = createStyles((theme, { textColor }: StylesProps) => ({
  children: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  },
  textColor: { color: theme.other[textColor] },
}));

type TextComponentProps = {
  textColor?: ThemeColors;
  children: React.ReactNode;
} & TextProps;

const Text = ({ textColor = 'textPrimary', className, children, ...props }: TextComponentProps) => {
  const { classes, cx } = useStyles({ textColor });

  return (
    <MantineText className={cx(classes.children, classes.textColor, className)} {...props}>
      {children}
    </MantineText>
  );
};

export default Text;
