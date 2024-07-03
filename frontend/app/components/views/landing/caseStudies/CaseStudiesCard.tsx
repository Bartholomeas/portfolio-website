'use client';

import {useMemo} from "react";
import {createStyles, rem, Stack, TypographyStylesProvider,} from '@mantine/core';
import {motion} from 'framer-motion';

import Image from 'next/image';

import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import {HEADER_HEIGHT} from '@/components/common/appShell/Header/Header';
import {Box, Card, Group} from '@/components/common/mantine';
import {Text} from '@/components/common/mantine/Text';
import {Title} from '@/components/common/mantine/Title';

import {CaseStudiesItem} from '@/types/pages';
import {slugify} from "@/utils/slugify";

const useStyles = createStyles((theme) => ({
    border: {
        border: `1px solid ${theme.fn.rgba(theme.other.white, 0.2)}`,
        borderRadius: theme.radius.md,
    },

    cardWrapper: {
        padding: rem(12),

        [theme.fn.largerThan('sm')]: {
            marginBottom: 0,
        },
    },
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
        width: `min(${40}, 95%)`,
        maxWidth: rem(800),
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
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
        objectPosition: 'center',
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

type Props = {
    item: CaseStudiesItem;
    onClick: (cardId: string | null) => void;
    isSelected?: boolean;
};

export function CaseStudiesCard({item, onClick, isSelected = false}: Props) {
    const {classes, cx} = useStyles();
    const slugId = useMemo(() => slugify(item?.title), [item?.title])

    return (
        <Stack className={cx(classes.cardWrapper, classes.border)}>
            <Box sx={{position: 'relative'}}>
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
                    layoutId={slugId}
                    transition={isSelected ? openSpring : closeSpring}
                    animate={{zIndex: isSelected ? 150 : 0}}
                    onClick={() => {
                        onClick(slugId);
                        document.body.classList.add(classes.disableScroll);
                    }}
                    className={cx(
                        {[classes.opened]: isSelected},
                        classes.card,
                        classes.border
                    )}
                >
                    <Stack spacing={8} align="center">
                        <motion.div
                            layout
                            className={classes.imageWrapper}
                            initial={false}
                            transition={isSelected ? openSpring : closeSpring}
                        >
                            <Image
                                width={640}
                                height={360}
                                sizes="100vw"
                                loading="lazy"
                                className={classes.image}
                                src={item?.mainImg?.url}
                                alt={item?.mainImg?.alternativeText ?? 'Zdjęcie projektu'}
                            />
                        </motion.div>

                        {isSelected && (
                            <Stack p={24} spacing={8} w="100%">
                                <Title order={2} textColor="primary">
                                    {item.title}
                                </Title>
                                <Group>
                                    {item.tools.map((tool) => (
                                        <Text size="sm" textColor="white" fw={700}
                                              key={`tool-${slugId}-${slugify(tool?.name)}`}>
                                            #{tool.name}
                                        </Text>
                                    ))}
                                </Group>
                                <motion.div
                                    style={{originY: 0, originX: -100, zIndex: 300}}
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
            <Stack h="100%" spacing={8}>
                <Stack spacing={4}>
                    <Title order={3} textColor="primary">
                        {item.title}
                    </Title>
                    <Group spacing={8}>
                        {item.tools.map((tool) => (
                            <Text key={`tool-${slugId}-${slugify(tool?.name)}`} textColor="textPrimary">
                                #{tool.name}
                            </Text>
                        ))}
                    </Group>
                    <Text textColor="textSecondary">{item.shortDescription}</Text>
                </Stack>
            </Stack>
        </Stack>
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
            initial={{opacity: isSelected ? 1 : 0}}
            animate={{opacity: isSelected ? 1 : 0, zIndex: isSelected ? 105 : 0}}
            exit={{opacity: 0}}
            transition={{duration: 0.2}}
            onClick={() => onClick(null)}
            sx={(theme) => ({
                position: 'fixed',
                width: '100%',
                top: '0',
                bottom: '0',
                left: '50%',
                minHeight: rem(500),
                backgroundColor: theme.fn.rgba(theme.other.bg, 0.95),
                zIndex: 105,
                pointerEvents: isSelected ? 'auto' : 'none',
                willChange: 'opacity',
                transform: 'translateX(-50%)',
            })}
        />
    );
}
