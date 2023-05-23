import React from 'react';
import { CardProps, Card as MantineCard } from '@mantine/core';

type CardComponentProps = {
  children: React.ReactNode;
} & CardProps;

export function Card({ children, ...props }: CardComponentProps) {
  return (
    <MantineCard
      sx={(theme) => ({
        width: '100%',
        backgroundColor: theme.fn.rgba(theme.other.white, 0.03),
        borderRadius: 8,
        border: `1px solid ${theme.fn.rgba(theme.other.white, 0.2)}`,
        backdropFilter: 'blur(10px)',
        overflow: 'none',
      })}
      {...props}
    >
      {children}
    </MantineCard>
  );
}
