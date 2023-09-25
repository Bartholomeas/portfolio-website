import React from 'react';

import { Box } from '@/components/common/mantine';
import { Image } from '@/components/common/mantine/Image';

import { MacWindow } from '@/components/common/special/macWindow/MacWindow';
import { MacWindowGraphicTools } from '@/components/common/special/macWindow/MacWindowGraphicTools';

import { StrapiImage } from '@/types';

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
              alt="Abstrakcyjny kolorowy kształt przypominający węża"
              loading="lazy"
              fill
              sx={{
                objectFit: 'contain',
                width: '100%',
                height: '100%',
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
          backgroundColor: '#fff',
        }}
      >
        {image && (
          <Image
            src={image?.url}
            alt={image?.alternativeText ?? 'Zdjęcie'}
            loading="lazy"
            width={250}
            height={250}
            sx={{ objectFit: 'contain' }}
          />
        )}
      </MacWindow>
    </Box>
  );
}
