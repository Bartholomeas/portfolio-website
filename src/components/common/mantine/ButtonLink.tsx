import { ButtonProps, Button as MantineButton, createStyles } from '@mantine/core';

const useStyles = createStyles(() => ({
  children: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
}));

type TextComponentProps = {
  variant: string;
  href: string;
  children: React.ReactNode;
} & ButtonProps;

export const ButtonLink = ({
  variant,
  className,
  href,
  children,
  ...props
}: TextComponentProps) => {
  const { classes, cx } = useStyles();

  return (
    <MantineButton component="a" href={href} className={cx(classes.children, className)} {...props}>
      {children}
    </MantineButton>
  );
};
