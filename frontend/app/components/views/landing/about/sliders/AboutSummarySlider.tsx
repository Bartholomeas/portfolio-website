import React from 'react';

import { Box } from '@/components/common/mantine';
import { Image } from '@/components/common/mantine/Image';
import { MacWindow } from '@/components/common/special/macWindow/MacWindow';

export function AboutSummarySlider() {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        width: '100%',
        minHeight: 500,
      }}
    >
      <Image
        src="/abstract/serpent_2.webp"
        alt="Abstrakcyjny kolorowy kształt przypominający węża"
        fill
        sx={{
          position: 'absolute',
        }}
      />

      <MacWindow
        withGlassBg
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <Image
            src="/avatars/me_hallo.webp"
            alt="Emoji wykonujące gest dzwonienia."
            loading="lazy"
            fill
            sx={{
              objectFit: 'contain',
            }}
          />
          <Image
            src="/avatars/me_blink.webp"
            alt="Emoji mrugające lewym okiem."
            loading="lazy"
            fill
            sx={{
              objectFit: 'contain',
              transform: 'translate(30%,-40%) scale(0.4) rotate(20deg)',
            }}
          />
          <Image
            src="/avatars/me_peace.webp"
            alt="Emoji pokazujące znak pokoju."
            loading="lazy"
            fill
            sx={{
              objectFit: 'contain',
              transform: 'translate(-120px,-60%) scale(0.6) rotate(-10deg)',
            }}
          />
        </Box>
        <Box
          sx={{ width: '100%', minHeight: 300, backgroundColor: 'royalblue' }}
        >
          <Image
            width={100}
            height={100}
            src="/icons/css.svg"
            alt=""
            sx={{ fill: 'red', color: 'blue', backgroundColor: 'gold' }}
          />
        </Box>
      </MacWindow>
    </Box>
  );
}
