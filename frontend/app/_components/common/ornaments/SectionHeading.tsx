'use client';

import { createStyles, Stack } from '@mantine/core';
import React from 'react';

import { Text } from '../mantine/Text';
import { Title } from '../mantine/Title';

const useStyles = createStyles((theme) => ({
  heading: {
    background: `linear-gradient(to right, ${theme.other.primary}, ${theme.other.secondary})`,
    fontWeight: 700,
    fontSize: 36,
    backgroundClip: 'text',
    paddingBottom: 4,
    WebkitTextFillColor: 'transparent',
  },
}));

type SectionHeadingProps = {
  title: string | undefined;
  subtext: string | undefined;
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
