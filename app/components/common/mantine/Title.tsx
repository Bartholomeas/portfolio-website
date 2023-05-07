import { Title as MantineTitle, TitleProps, createStyles } from '@mantine/core';
import { ThemeColors } from '../../../../theme/types';

type StylesProps = {
  textColor: ThemeColors;
};

const useStyles = createStyles((theme, { textColor }: StylesProps) => ({
  textColor: { color: theme.other[textColor], fontFamily: 'Merriweather, serif' },
}));

type TextComponentProps = {
  children: React.ReactNode;
  textColor?: ThemeColors;
} & TitleProps;

export const Title = ({ children, textColor = 'textPrimary', ...props }: TextComponentProps) => {
  const { classes } = useStyles({ textColor });

  return (
    <MantineTitle className={classes.textColor} {...props}>
      {children}
    </MantineTitle>
  );
};
