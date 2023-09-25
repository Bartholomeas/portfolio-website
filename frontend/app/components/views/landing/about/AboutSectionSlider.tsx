'use client';

import { createStyles } from '@mantine/core';
import { motion } from 'framer-motion';

import { Box } from '@/components/common/mantine';

import { AboutFirstSection } from './sectionImages/AboutFirstSection';
import { AboutSecondSection } from './sectionImages/AboutSecondSection';
import { AboutThirdSection } from './sectionImages/AboutThirdSection';

import { AboutMeCard } from '@/types/pages';

const useStyles = createStyles((theme) => ({
  aboutSlider: {
    position: 'sticky',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100%',
    top: 0,
    pointerEvents: 'none',
    overflow: 'hidden',
    zIndex: 10,

    [theme.fn.largerThan('md')]: {
      display: 'flex',
    },
  },

  slidingFeatureMotionDiv: {
    height: 'fit-content',
    width: '60%',
    padding: 8,
    borderRadius: 16,
  },

  showMobile: {
    [theme.fn.largerThan('md')]: {
      display: 'none',
    },
  },
  showDesktop: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },
}));

export type AboutMeSectionCard = AboutMeCard & { alignLeft?: boolean };

type Props = {
  sectionCard: AboutMeSectionCard;
};

export function AboutSectionSlider({ sectionCard }: Props) {
  const { cx, classes } = useStyles();

  return (
    <Box
      sx={{
        justifyContent: sectionCard?.alignLeft ? 'flex-end' : 'flex-start',
      }}
      className={cx(classes.aboutSlider, classes.showDesktop)}
    >
      <motion.div
        layout
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 25,
        }}
        className={classes.slidingFeatureMotionDiv}
      >
        {getCurrentContent(sectionCard)}
      </motion.div>
    </Box>
  );
}

const getCurrentContent = (sectionCard: AboutMeSectionCard) => {
  switch (sectionCard.code) {
    case 'first':
      return <AboutFirstSection image={sectionCard.image} />;
    case 'second':
      return <AboutSecondSection image={sectionCard.image} />;
    case 'third':
      return <AboutThirdSection image={sectionCard.image} />;
    case 'fourth':
      return <AboutSecondSection image={sectionCard.image} />;
    default:
      return <AboutSecondSection image={sectionCard.image} />;
  }
};
