import { createStyles, rem } from '@mantine/core';

import { Box, Paper } from '@/_components/common/mantine';
import { Button } from '@/_components/common/mantine/Button';
import { Text } from '@/_components/common/mantine/Text';
import { Title } from '@/_components/common/mantine/Title';

const useStyles = createStyles((theme) => ({
  card: {
    postion: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: rem(440),
    backgroundSize: 'cover',
    backgroundPosition: 'center',

    '&::before': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.other.bg,
      opacity: 0.7,
    },
  },

  title: {
    marginTop: theme.spacing.xs,
    color: theme.white,
    fontSize: rem(32),
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.2,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));

interface Props {
  image: string;
  title: string;
  category: string;
}

export function CaseStudiesCarouselCard({ image, title, category }: Props) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <Box sx={{ zIndex: 99 }}>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </Box>
      <Button onClick={() => console.log('read')} variant="white" color="dark">
        Read article
      </Button>
    </Paper>
  );
}
