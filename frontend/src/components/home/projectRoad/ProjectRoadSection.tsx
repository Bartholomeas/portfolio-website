import { Box, createStyles, Group, Stack } from '@mantine/core';

import {
  Icon,
  IconBrain,
  IconEaseInOutControlPoints,
  IconHeartHandshake,
  IconMoodCheck,
  IconProgress,
} from '@tabler/icons-react';
import React from 'react';
import { SectionHeading } from '../../common/design/SectionHeading';
import { Text } from '../../common/mantine/Text';
import { Title } from '../../common/mantine/Title';

const useStyles = createStyles(
  (theme, { iconSize = 64 }: { iconSize?: number }) => ({
    wrapper: {
      position: 'relative',

      '&::before': {
        content: '""',
        position: 'absolute',
        top: 30,
        left: iconSize / 2,
        bottom: 30,
        backgroundColor: theme.other.primary,
        width: 2,
        zIndex: -10,
      },
    },
    icon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: iconSize,
      height: iconSize,
      aspectRatio: '1 / 1',
      backgroundColor: theme.other.bg,
      color: theme.other.primary,
      borderRadius: '50%',
    },
  })
);

const itemsData = [
  {
    title: 'Wstępne warunki i zakres pracy',
    text: 'Na początku ustalamy satysfakcjonujące nas warunki i podpisujemy dokumenty',
    icon: IconHeartHandshake,
  },
  {
    title: 'Ustalenia dotyczące wyglądu i funkcjonalności',
    text: 'Ustalamy przeznaczenie projektu, jego wygląd, możesz przesłać inne projekty, które Ci się spodobały, im więcej informacji tym lepiej!',
    icon: IconEaseInOutControlPoints,
  },
  {
    title: '*Szukanie inspiracji*',
    text: 'To czas na zebranie kluczowych danych i pomysłów na projekt.',
    icon: IconBrain,
  },
  {
    title: 'Akceptacja mockupu',
    text: 'Przesyłam Ci mój wstępny szkielet tego, jak będzie wyglądać docelowy produkt. Spodoba Ci się? Biorę się do dalszej pracy.',
    icon: IconMoodCheck,
  },
  {
    title: 'Projekt w budowie',
    text: 'Prace nad projektem ruszyły i nie zamierzają się zatrzymywać!',
    icon: IconProgress,
  },
];

export function ProjectRoadSection() {
  const { classes } = useStyles({ iconSize: 64 });

  return (
    <Stack mih="60vh" spacing={64} align="center" justify="center">
      <SectionHeading
        title="Jak wygląda droga projektu?"
        subtext="Droga od pomysłu do produktu"
        centered
      />

      <Stack className={classes.wrapper} spacing={64}>
        {itemsData.map(({ title, text, icon }) => (
          <ProjectRoadItem key={title} title={title} text={text} icon={icon} />
        ))}
      </Stack>
    </Stack>
  );
}

type ProjectRoadItemProps = {
  title: string;
  text: string;
  icon: Icon;
};
function ProjectRoadItem({ title, text, icon }: ProjectRoadItemProps) {
  const { classes } = useStyles({});
  const IconElement = icon;

  return (
    <Group noWrap>
      <Box className={classes.icon}>
        <IconElement size={40} />
      </Box>
      <Stack spacing={8}>
        <Title order={3}>{title}</Title>
        <Text textColor="textSecondary" maw={450}>
          {text}
        </Text>
      </Stack>
    </Group>
  );
}
