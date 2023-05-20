import React from 'react';

import { Icon } from 'react-feather';

import { Box, Stack, createStyles } from '@mantine/core';

import { Title } from '../../common/mantine/Title';
import { Text } from '../../common/mantine/Text';
import { Card } from '../../common/mantine/Card';

type BenefitsBoxProps = {
  icon: Icon;
  title: string;
  content: string;
};

export function BenefitsBox({ icon, title, content }: BenefitsBoxProps) {
  return (
    <Stack align="center" spacing={16}>
      <BenefitsBoxIcon icon={icon} />
      <Title order={4}>{title}</Title>
      <Text textColor="textSecondary" ta="center">
        {content}
      </Text>
    </Stack>
  );
}

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

function BenefitsBoxIcon({ icon }: { icon: Icon }) {
  const { classes } = useStyles();

  const PropIcon = icon;

  return (
    <div className={classes.wrapper}>
      <Card h={70} w={70} p={0} className={classes.card}>
        <PropIcon size={32} color="white" />
      </Card>
      <Box className={classes.box} />
    </div>
  );
}
