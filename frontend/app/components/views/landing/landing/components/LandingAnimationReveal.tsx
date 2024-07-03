import { PropsWithChildren, useEffect, useRef } from 'react';
import { BoxProps } from '@mantine/core';
import { motion, useAnimation, useInView } from 'framer-motion';

import { Box } from '@/components/common/mantine';

type Props = PropsWithChildren<BoxProps>;

export function LandingAnimationReveal({ children, ...props }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
      slideControls.start('visible');
    }
  }, [isInView]);

  return (
    <Box
      sx={{ position: 'relative', width: 'fit-content', overflow: 'hidden' }}
      ref={ref}
      {...props}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: '100%' },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: 'easeIn' }}
        className="absolute bottom-1 left-0 right-0 top-1 z-20 bg-indigo-600"
      />
    </Box>
  );
}
