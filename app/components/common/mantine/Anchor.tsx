import { AnchorProps, Anchor as MantineAnchor, createStyles } from '@mantine/core';
import { LinkProps } from 'next/link';
import { ThemeColors } from '../../../../theme/types';

type AnchorLinkProps = {
  href: string | undefined;
} & Omit<LinkProps, 'href'>;

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

type AnchorComponentProps = {
  children: React.ReactNode;
  textColor?: ThemeColors;
} & AnchorProps &
  AnchorLinkProps;

export const Anchor = ({
  children,
  textColor = 'textPrimary',
  className,
  ...props
}: AnchorComponentProps) => {
  const { classes, cx } = useStyles({ textColor });

  return (
    <MantineAnchor
      component="a"
      className={cx(classes.children, classes.textColor, className)}
      {...props}>
      {children}
    </MantineAnchor>
  );
};
