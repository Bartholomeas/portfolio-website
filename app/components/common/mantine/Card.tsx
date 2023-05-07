import React from 'react';
import { CardProps, Card as MantineCard } from '@mantine/core';

type CardComponentProps = {
  children: React.ReactNode;
} & CardProps;

const Card = ({ children, ...props }: CardComponentProps) => {
  return (
    <MantineCard
      sx={theme => ({
        backdropFilter: 'blur(20px)',
        backgroundColor: theme.fn.rgba('#15151E', 0.6),
      })}
      {...props}>
      {children}
    </MantineCard>
  );
};

export default Card;
