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

type SectionHeadingProps = {
  title: string;
  subtext: string;
  centered?: boolean;
};

export function SectionHeading({
  title,
  subtext,
  centered = false,
}: SectionHeadingProps) {
  const { classes } = useStyles();

  return (
    <Stack spacing={0} mx={centered ? 'auto' : 'initial'} mb={24}>
      <Text color="white" fw={700}>
        {subtext}
      </Text>
      <Title order={2} className={classes.heading}>
        {title}
      </Title>
    </Stack>
  );
}
