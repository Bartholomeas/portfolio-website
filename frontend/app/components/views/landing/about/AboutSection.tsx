'use client';

import { createStyles, Stack } from '@mantine/core';

import { motion, useInView } from 'framer-motion';

import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

import { Box } from '@/components/common/mantine';
import { Text } from '@/components/common/mantine/Text';
import { MotionTitle } from '@/components/common/mantine/Title';

import { AboutSectionSlider } from './AboutSectionSlider';

import { AboutMeCard, AboutMeSection } from '@/types/pages';

const useStyles = createStyles((theme) => ({
  sectionWrapper: {
    position: 'relative',
    margin: '0 auto',
  },

  displayOffset: {
    marginTop: '-100vh',
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
          <Stack spacing={4}>
            <MotionTitle order={3} textColor="primary" size={32}>
              {sectionCard.title}
            </MotionTitle>
            <MotionTitle order={4} textColor="textPrimary">
              {sectionCard.shortDescription}
            </MotionTitle>
          </Stack>

          <Text textColor="textPrimary" size="md" mt={16}>
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
