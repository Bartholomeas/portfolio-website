import React from 'react';

import { Box } from '@/components/common/mantine';
import { Image } from '@/components/common/mantine/Image';
import { MacWindow } from '@/components/common/special/macWindow/MacWindow';

import { StrapiImage } from '@/types';

type Props = {
  image: StrapiImage | undefined;
  alignLeft?: boolean;
};

export function AboutFirstSection({ image, alignLeft = false }: Props) {
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
          right: alignLeft ? 0 : 'auto',
          top: 0,
          width: '80%',
          height: '100%',
          overflow: 'hidden',
        }}
      >
        {image && (
          <Image
            src={image.url}
            alt={image.alternativeText ?? 'Zdjęcie o mnie'}
            loading="lazy"
            fill
            sx={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
            }}
          />
        )}
      </MacWindow>
      <MacWindow
        sx={{
          position: 'absolute',
          height: 200,
          width: 200,
          bottom: -50,
          left: 50,
          boxShadow: '8px 16px 40px #28282861',
        }}
        withGlassBg
      >
        <Image
          src="/avatars/me_blink.webp"
          alt="Moja twarz w postaci apple awatara"
          loading="lazy"
          fill
          sx={{
            objectFit: 'contain',
            height: '100%',
          }}
        />
      </MacWindow>
      <MacWindow
        sx={(theme) => ({
          position: 'absolute',
          height: 150,
          width: 150,
          top: -50,
          right: 50,
          backgroundColor: theme.fn.rgba(theme.other.white, 0.2),
          boxShadow: '8px 16px 40px #28282861',
          padding: 16,
          overflow: 'hidden',
        })}
        withGlassBg
      >
        {image && (
          <Image
            src="/Logo.svg"
            alt="Logo mojej strony"
            loading="lazy"
            // width={80}
            // height={80}
            fill
            sx={{
              padding: 8,
              marginTop: 0,
              width: '60%',
              objectFit: 'contain',
            }}
          />
        )}
      </MacWindow>
    </Box>
  );
}
