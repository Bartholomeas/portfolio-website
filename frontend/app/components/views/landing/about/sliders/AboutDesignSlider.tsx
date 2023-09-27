import React from 'react';

import { Box } from '@/components/common/mantine';
import { Image } from '@/components/common/mantine/Image';

import { MacWindow } from '@/components/common/special/macWindow/MacWindow';
import { MacWindowGraphicTools } from '@/components/common/special/macWindow/MacWindowGraphicTools';

import { StrapiImage } from '@/types';

type Props = {
  image: StrapiImage | undefined;
};

export function AboutDesignSlider({ image }: Props) {
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
          right: 'auto',
          top: 0,
          padding: 0,
          overflow: 'visible',
        }}
      >
        <MacWindowGraphicTools />
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            transform: 'translateY(-40px)',
            top: 0,
            right: 0,
          }}
        >
          {image && (
            <Image
              src="/abstract/spring_1.webp"
              alt="Abstrakcyjny kolorowy kształt przypominający sprężynę"
              loading="lazy"
              fill
              sx={{
                objectFit: 'contain',
              }}
            />
          )}
        </Box>
      </MacWindow>
      <MacWindow
        withGlassBg
        sx={{
          position: 'absolute',
          width: 'auto',
          height: 'auto',
          bottom: -100,
          right: 32,
          backgroundColor: '#0b0866',
        }}
      >
        {image && (
          <Image
            src={image?.url}
            alt={image?.alternativeText ?? 'Zdjęcie'}
            loading="lazy"
            width={300}
            height={300}
            sx={{ objectFit: 'contain' }}
          />
        )}
      </MacWindow>
    </Box>
  );
}
