import { HEADER_HEIGHT } from '@/components/common/appShell/Header';

import { Box, Card, Group } from '@/components/common/mantine';

import { Text } from '@/components/common/mantine/Text';

import { Title } from '@/components/common/mantine/Title';

import { CaseStudiesItem } from '@/types/pages';

import { createStyles, Stack, TypographyStylesProvider } from '@mantine/core';

import { motion } from 'framer-motion';

import Image from 'next/image';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';



const useStyles = createStyles(() => ({
  card: {
    width: '100%',
    border: 'none',
    cursor: 'pointer',
  },

  opened: {
    position: 'fixed',
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    height: `calc(100vh - ${HEADER_HEIGHT}px - 2rem)`,
    width: 'min(40rem, 95%)',
    maxWidth: 800,
    top: `calc(${HEADER_HEIGHT}px + 1rem)`,
    right: 0,
    left: 0,
    margin: 'auto',
    overflowY: 'auto',
    overflowX: 'hidden',
    zIndex: 150,
  },

  disableScroll: {
    overflow: 'hidden',
  },

  imageWrapper: {
    position: 'relative',
    width: '100%',
    top: 0,
    left: 0,
    right: 0,
    aspectRatio: '16 / 9',

    overflow: 'hidden',
  },
  image: {
    objectFit: 'cover',
    objectPosition: 'center',
    minHeight: 300,
    aspectRatio: '16 / 9',
  },
}));

const openSpring = {
  type: 'spring',
  stiffness: 200,
  damping: 30,
};
const closeSpring = {
  type: 'spring',
  stiffness: 200,
  damping: 35,
};

interface Props {
  item: CaseStudiesItem;
  onClick: (cardId: string | null) => void;
  isSelected?: boolean;
}

export function CaseStudiesCard({ item, onClick, isSelected = false }: Props) {
  const { classes, cx } = useStyles();

  return (
    <Box sx={{ position: 'relative' }}>
      <CaseStudiesCardOverlay
        isSelected={isSelected}
        onClick={() => {
          onClick(null);
          document.body.classList.remove(classes.disableScroll);
        }}
      />

      <Card
        p={0}
        component={motion.div}
        layout
        layoutId={item.uuid}
        transition={isSelected ? openSpring : closeSpring}
        animate={{ zIndex: isSelected ? 150 : 0 }}
        onClick={() => {
          onClick(item.uuid);
          document.body.classList.add(classes.disableScroll);
        }}
        className={cx({ [classes.opened]: isSelected }, classes.card)}
      >
        <Stack spacing={8} align="center">
          <motion.div
            layout
            className={classes.imageWrapper}
            initial={false}
            transition={isSelected ? openSpring : closeSpring}
          >
            <Image
              layout="responsive"
              width={600}
              height={300}
              className={classes.image}
              src={item?.mainImg?.url}
              alt={item?.mainImg?.alternativeText ?? 'Zdjęcie projektu'}
            />
          </motion.div>

          {isSelected && (
            <Stack p={24} spacing={8}>
              <Title order={2} textColor="primary">
                {item.title}
              </Title>
              <Group>
                {item.tools.map((tool) => (
                  <Text size="sm" textColor="white" key={tool.uuid}>
                    #{tool.name}
                  </Text>
                ))}
              </Group>
              <motion.div
                style={{ originY: 0, originX: -100, zIndex: 300 }}
                layout="position"
              >
                <TypographyStylesProvider>
                  <Markdown
                    // transformImageUri={(src) => `${API_URL}${src}`}
                    remarkPlugins={[remarkGfm]}
                  >
                    {item?.description}
                  </Markdown>
                </TypographyStylesProvider>
              </motion.div>
            </Stack>
          )}
        </Stack>
      </Card>
    </Box>
  );
}

function CaseStudiesCardOverlay({
  onClick,
  isSelected,
}: {
  isSelected: boolean;
  onClick: (cardId: string | null) => void;
}) {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: isSelected ? 1 : 0 }}
      animate={{ opacity: isSelected ? 1 : 0, zIndex: isSelected ? 105 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={() => onClick(null)}
      sx={(theme) => ({
        position: 'fixed',
        width: '100%',
        top: '0',
        bottom: '0',
        left: '50%',
        minHeight: 500,
        backgroundColor: theme.fn.rgba(theme.other.bg, 0.95),
        zIndex: 105,
        pointerEvents: isSelected ? 'auto' : 'none',
        willChange: 'opacity',
        transform: 'translateX(-50%)',
      })}
    />
  );
}
