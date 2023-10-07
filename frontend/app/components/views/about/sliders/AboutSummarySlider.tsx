import { Box } from '@/components/common/mantine';
import { Image } from '@/components/common/mantine/Image';
import { MacWindow } from '@/components/common/special/macWindow/MacWindow';

import { createStyles } from '@mantine/core';

const useStyles = createStyles(() => ({
  root: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    minHeight: 500,
    overflow: 'visible',
  },

  firstWindow: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    overflow: 'visible',
  },
  emojiBox: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },

  image: {
    objectFit: 'contain',
  },

  firstImage: {
    transform: 'translate(30%,-40%) scale(0.4) rotate(20deg)',
  },
  secondImage: {
    transform: 'translate(-100px,-60%) scale(0.6) rotate(-10deg)',
  },
}));

export function AboutSummarySlider() {
  const { classes, cx } = useStyles();

  return (
    <Box className={classes.root}>
      <Image
        src="/abstract/serpent_2.webp"
        alt="Abstrakcyjny kolorowy kształt przypominający węża"
        fill
        sizes="50vw"
        sx={{
          position: 'absolute',
        }}
      />

      <MacWindow withGlassBg className={classes.firstWindow}>
        <Box className={classes.emojiBox}>
          <Image
            src="/avatars/me_hallo.webp"
            alt="Emoji wykonujące gest dzwonienia."
            width="0"
            height="0"
            sizes="100vw"
            className={classes.image}
            sx={{
              position: 'absolute',
              width: '100%',
              maxHeight: 500,
              height: 'auto',
              bottom: 0,
            }}
          />
          <Image
            src="/avatars/me_blink.webp"
            alt="Emoji mrugające lewym okiem."
            fill
            sizes="50vw"
            className={cx(classes.image, classes.firstImage)}
          />
          <Image
            src="/avatars/me_peace.webp"
            alt="Emoji pokazujące znak pokoju."
            fill
            sizes="50vw"
            className={cx(classes.image, classes.secondImage)}
          />
        </Box>
      </MacWindow>
    </Box>
  );
}
