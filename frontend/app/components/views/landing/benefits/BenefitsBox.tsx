'use client';

import { createStyles } from '@mantine/core';
import React from 'react';

import { Box, Card, Stack } from '@/components/common/mantine';

import { Text } from '@/components/common/mantine/Text';
import { Title } from '@/components/common/mantine/Title';
import { IconComponent } from '@/components/common/special/IconComponent';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    position: 'absolute',
    width: 50,
    height: 50,
    top: -10,
    left: -10,
    transform: 'rotate(-10deg)',
    backgroundColor: theme.colors.primary[7],
    borderRadius: 4,
    zIndex: -5,
  },
}));

type BenefitsBoxProps = {
  icon: string;
  title: string;
  content: string;
};

export function BenefitsBox({ icon, title, content }: BenefitsBoxProps) {
  const { classes } = useStyles();

  return (
    <Stack align="center" spacing={16}>
      <div className={classes.wrapper}>
        <Card h={70} w={70} p={0} className={classes.card}>
          <IconComponent icon={icon} size={32} color="white" />
        </Card>
        <Box className={classes.box} />
      </div>
      <Title order={4}>{title}</Title>
      <Text textColor="textSecondary" ta="center">
        {content}
      </Text>
    </Stack>
  );
}
