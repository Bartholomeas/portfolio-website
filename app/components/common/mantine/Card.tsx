import React from 'react';
import { CardProps, Card as MantineCard } from '@mantine/core';

type CardComponentProps = {
  children: React.ReactNode;
} & CardProps;

const Card = ({ children, ...props }: CardComponentProps) => {
  return (
    <MantineCard
      sx={theme => ({
        backdropFilter: 'blur(10px)',
        backgroundColor: theme.fn.rgba(theme.other.bgDark, 0.4),
        width: '100%',
      })}
      {...props}>
      {children}
    </MantineCard>
  );
};

export default Card;
