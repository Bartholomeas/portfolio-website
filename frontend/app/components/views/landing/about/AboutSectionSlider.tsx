'use client';

import { createStyles } from '@mantine/core';
import { motion } from 'framer-motion';

import { Box } from '@/components/common/mantine';

import { Image } from '@/components/common/mantine/Image';

import { MacWindow } from './MacWindow';

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

type Props = {
  sectionCard: AboutMeCard & { alignLeft?: boolean };
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
        <SliderCurrentContent sectionCard={sectionCard} />
      </motion.div>
    </Box>
  );
}

function SliderCurrentContent({
  sectionCard,
}: {
  sectionCard: AboutMeCard & { alignLeft?: boolean };
}) {
  return (
    <MacWindow>
      {sectionCard?.image && (
        <Image
          src={sectionCard.image.url}
          alt={sectionCard.image.alternativeText ?? 'Zdjęcie o mnie'}
          // width={800}
          // height={800}
          loading="lazy"
          fill
          sx={{
            objectFit: 'contain',
            width: '100%',
            marginTop: 32,
          }}
        />
      )}
      <MacWindow
        sx={(theme) => ({
          height: 200,
          transform: 'translate(-50px,50px)',
          backgroundColor: theme.other.bg,
        })}
      >
        {sectionCard?.image && (
          <Image
            src={sectionCard.image.url}
            alt={sectionCard.image.alternativeText ?? 'Zdjęcie o mnie'}
            // width={800}
            // height={800}
            loading="lazy"
            fill
            sx={{
              objectFit: 'contain',
              height: '100%',
              marginTop: 32,
            }}
          />
        )}
        {/* <Box
        sx={{
          position: 'relative',
          height: 200,
          width: '100%',
          backgroundImage: `url(${sectionCard.image.url})`,
          backgroundPosition: 'center',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          borderRadius: 64,
        }}
      /> */}
      </MacWindow>
    </MacWindow>
  );
}
