import { Box, Card } from '@/components/common/mantine';

import { createStyles } from '@mantine/core';
import { Icon } from '@tabler/icons-react';


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

export function BenefitsBoxIcon({ icon }: { icon: Icon }) {
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
