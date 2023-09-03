import { createStyles, rem } from '@mantine/core';

import { Box, Card, Divider, Group, Stack } from '@/_components/common/mantine';
import { Text } from '@/_components/common/mantine/Text';
import { Title } from '@/_components/common/mantine/Title';

import { CaseStudiesItem } from '@/_types/pages';

const useStyles = createStyles((theme) => ({
  card: {
    postion: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: rem(440),
    minWidth: rem(300),
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    cursor: 'pointer',

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
}));

interface Props {
  item: CaseStudiesItem;
}

export function CaseStudiesCarouselCard({ item }: Props) {
  const { classes } = useStyles();

  return (
    <Card
      component="button"
      p={16}
      radius="md"
      onClick={() => console.log('klik')}
      sx={{ backgroundImage: `url(${item?.mainImg?.url})` }}
      className={classes.card}
    >
      <Stack spacing={8} sx={{ zIndex: 99 }}>
        <Title order={3} className={classes.title}>
          {item?.title}
        </Title>
        <Text textColor="white" size="lg">
          {item?.shortDescription}
        </Text>
      </Stack>
      <Stack spacing={8} w="100%" sx={{ zIndex: 99 }}>
        {item.id && <Divider />}
        <Group>
          {item.tools.map((tool) => (
            <Text textColor="white" size="md" key={tool.uuid}>
              {tool.name}
            </Text>
          ))}
        </Group>
      </Stack>
    </Card>
  );
}
