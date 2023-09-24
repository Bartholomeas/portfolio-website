'use client';

import { createStyles } from '@mantine/core';

import { motion, useInView } from 'framer-motion';

import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

import { Box, Group } from '@/components/common/mantine';
import { Text } from '@/components/common/mantine/Text';
import { Title } from '@/components/common/mantine/Title';
import { IconComponent } from '@/components/common/special/IconComponent';

import { AboutSectionSlider } from './AboutSectionSlider';

import { AboutMeCard, AboutMeSection } from '@/types/pages';

const useStyles = createStyles((theme) => ({
  sectionWrapper: {
    position: 'relative',
    margin: '0 auto',
  },

  displayOffset: {
    marginTop: '-100vh',
    // overflow: 'hidden',
    [theme.fn.largerThan('md')]: {
      display: 'block',
    },
  },

  contentSectionWrapper: {
    position: 'relative',
    display: 'flex',
    height: 'fit-content',
    zIndex: 0,
    [theme.fn.largerThan('md')]: {
      height: '100vh',
    },
  },
  contentGridContainer: {
    display: 'grid',
    height: '100%',
    width: '100%',
    padding: '8px 16px',
    placeContent: 'center',
    [theme.fn.largerThan('md')]: {
      width: '40%',
      padding: '12px 12px',
    },
  },

  contentMotionDiv: {
    display: 'block',
    marginTop: 8,
    [theme.fn.largerThan('md')]: {
      // overflow: 'hidden',
    },
  },
}));

export type AboutMeCardWithStyles = AboutMeCard & { alignLeft: boolean };

type Props = {
  data: AboutMeSection;
};

export function AboutSection({ data }: Props) {
  const { classes } = useStyles();

  const { aboutmeCards } = data;
  const mappedCards: AboutMeCardWithStyles[] = aboutmeCards.map(
    (card, index) => ({
      ...card,
      alignLeft: index % 2 === 0,
    })
  );

  const [sectionCard, setSectionCard] = useState<AboutMeCardWithStyles>(
    mappedCards[0]
  );

  return (
    <Box component="section" className={classes.sectionWrapper}>
      <AboutSectionSlider sectionCard={sectionCard} />

      <Box className={classes.displayOffset} />

      {mappedCards.map((card) => (
        <AboutSectionBox
          key={card.uuid}
          sectionCard={card}
          setSectionCard={setSectionCard}
          alignLeft={card.alignLeft}
        />
      ))}
    </Box>
  );
}

type AboutSectionBoxProps = {
  sectionCard: AboutMeCardWithStyles;
  setSectionCard: Dispatch<SetStateAction<AboutMeCardWithStyles>>;
  alignLeft?: boolean;
};

function AboutSectionBox({
  setSectionCard,
  sectionCard,
  alignLeft = false,
}: AboutSectionBoxProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: '-100px',
  });

  const { classes } = useStyles();

  useEffect(() => {
    if (isInView) {
      setSectionCard(sectionCard);
    }
  }, [isInView]);

  return (
    <Box
      component="section"
      ref={ref}
      className={classes.contentSectionWrapper}
      style={{
        justifyContent: alignLeft ? 'flex-start' : 'flex-end',
      }}
    >
      <div className={classes.contentGridContainer}>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          layout
        >
          <Group noWrap>
            <Title order={3} fw={700}>
              {sectionCard.title}
            </Title>
            {sectionCard.icon && (
              <IconComponent size={64} icon={sectionCard.icon} />
            )}
          </Group>
          <Text textColor="textSecondary" size="md">
            {sectionCard.description}
          </Text>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className={classes.contentMotionDiv}
        />
      </div>
    </Box>
  );
}
