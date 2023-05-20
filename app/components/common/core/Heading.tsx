import React from 'react';

import { Stack, createStyles } from '@mantine/core';

import { Title } from '../mantine/Title';
import { Text } from '../mantine/Text';

const useStyles = createStyles((theme) => ({
  heading: {
    background: `linear-gradient(to right, ${theme.other.primary}, ${theme.other.secondary})`,
    fontWeight: 700,
    fontSize: 36,
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
}));

export function Heading() {
  const { classes } = useStyles();

  return (
    <Stack spacing={0}>
      <Text color="white" fw={700}>
        Kim jestem?
      </Text>
      <Title order={2} className={classes.heading}>
        Cześć, jestem Bartek!
      </Title>
    </Stack>
  );
}
