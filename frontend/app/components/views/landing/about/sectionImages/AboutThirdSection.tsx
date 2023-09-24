import { motion } from 'framer-motion';
import React from 'react';

import { Box } from '@/components/common/mantine';
import { MacWindow } from '@/components/common/special/MacWindow';

import { StrapiImage } from '@/types';

const icon = {
  hidden: { opacity: 0, pathLength: 0, fill: 'rgba(255, 255, 255, 0)' },
  visible: { opacity: 1, pathLength: 1, fill: 'rgba(255, 255, 255, 1)' },
};

type Props = {
  image: StrapiImage | undefined;
  alignLeft?: boolean;
};

export function AboutThirdSection({ image, alignLeft = false }: Props) {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        width: '100%',
        minHeight: 500,
      }}
    >
      <MacWindow
        withGlassBg
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          right: alignLeft ? 0 : 'auto',
          top: 0,
        }}
      >
        <Box className="container">
          <motion.path
            d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: {
                duration: 2,
                ease: 'easeInOut',
              },
              fill: {
                duration: 2,
                ease: [1, 0, 0.8, 1],
              },
            }}
          />
        </Box>

        {/* {image && (
          <Image
            src={image?.url}
            alt={image?.alternativeText ?? 'Zdjęcie kodu'}
            loading="lazy"
            fill
            sx={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
            }}
          />
        )} */}
      </MacWindow>
    </Box>
  );
}
