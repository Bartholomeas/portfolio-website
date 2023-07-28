import { Box, createStyles, Stack } from '@mantine/core';

import { Icon } from '@tabler/icons-react';

import React from 'react';

import { Card } from '@/_components/common/mantine';
import { Text } from '@/_components/common/mantine/Text';
import { Title } from '@/_components/common/mantine/Title';

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
