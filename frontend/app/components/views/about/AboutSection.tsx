'use client';

import {Dispatch, SetStateAction, useEffect, useRef, useState} from 'react';
import {createStyles, rem, Stack} from '@mantine/core';
import {IconArrowRight} from '@tabler/icons-react';
import {motion, useInView} from 'framer-motion';

import {Box} from '@/components/common/mantine';
import {ButtonLink} from '@/components/common/mantine/Button';
import {Text} from '@/components/common/mantine/Text';
import {MotionTitle} from '@/components/common/mantine/Title';

import {AccentSpan} from '@/components/common/special/AccentSpan';

import {AboutSectionSlider, getCurrentContent} from './AboutSectionSlider';

import {AboutMeCard, AboutMePage} from '@/types/pages';
import {slugify} from "@/utils/slugify";

const useStyles = createStyles((theme) => ({
    sectionWrapper: {
        position: 'relative',
        margin: '0 auto',
        width: '100%',
    },
    displayOffset: {
        [theme.fn.largerThan('md')]: {
            marginTop: '-100vh',
            display: 'block',
        },
    },
    contentSectionWrapper: {
        position: 'relative',
        display: 'flex',
        height: 'fit-content',
        zIndex: 0,
        [theme.fn.largerThan('md')]: {
            height: '100vh',
        },
    },
    contentGridContainer: {
        display: 'grid',
        height: '100%',
        width: '100%',
        placeContent: 'center',

        [theme.fn.largerThan('md')]: {
            width: '40%',
            padding: `${rem(12)} ${rem(12)}`,
        },
    },
    contentMotionDiv: {
        display: 'block',
        marginTop: 8,
        width: '100%',
        [theme.fn.smallerThan('md')]: {
            marginTop: '40%',
        },
        [theme.fn.largerThan('md')]: {
            display: 'none',
        },
    },
}));

export type AboutMeCardWithAlignment = AboutMeCard & { alignLeft: boolean };

type Props = {
    cards: AboutMePage['aboutMeCards'] | undefined;
};

export function AboutSection({cards}: Props) {
    const {classes} = useStyles();

    const mappedCards: AboutMeCardWithAlignment[] =
        cards?.map((card, index) => ({
            ...card,
            alignLeft: index % 2 === 0,
        })) || [];

    const [currentCard, setCurrentCard] = useState<AboutMeCardWithAlignment>(
        mappedCards[0]
    );

    return (
        <Box component="section" className={classes.sectionWrapper}>
            <AboutSectionSlider sectionCard={currentCard}/>

            <Box className={classes.displayOffset}/>

            <Stack spacing={128}>
                {mappedCards.map((card) => (
                    <AboutSectionContent
                        key={`aboutSectionContent-${slugify(card?.title)}`}
                        card={card}
                        setCurrentCard={setCurrentCard}
                    />
                ))}
            </Stack>
        </Box>
    );
}

type AboutSectionContentProps = {
    card: AboutMeCardWithAlignment;
    setCurrentCard: Dispatch<SetStateAction<AboutMeCardWithAlignment>>;
};

function AboutSectionContent({
                                 card,
                                 setCurrentCard,
                             }: AboutSectionContentProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, {
        margin: '-150px',
    });

    const {classes} = useStyles();

    useEffect(() => {
        if (isInView) {
            setCurrentCard(card);
        }
    }, [isInView]);

    return (
        <Box
            component="section"
            ref={ref}
            className={classes.contentSectionWrapper}
            sx={{
                justifyContent: card.alignLeft ? 'flex-start' : 'flex-end',
            }}
        >
            <div className={classes.contentGridContainer}>
                <motion.div
                    initial={{opacity: 0, y: 25}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, ease: 'easeInOut'}}
                    layout
                >
                    <Stack spacing={4}>
                        <MotionTitle fw={900} order={2} textColor="white" size={32}>
                            <AccentSpan wrapText>{card.title}</AccentSpan>
                        </MotionTitle>
                    </Stack>

                    <Text textColor="textSecondary" size="lg" mt={16} lh={1.5}>
                        {card.description}
                    </Text>
                    {card.code === 'summary' && (
                        <ButtonLink
                            mt={32}
                            variant="outline"
                            href="/blog"
                            rightIcon={<IconArrowRight/>}
                        >
                            Sprawdź Blog!
                        </ButtonLink>
                    )}
                </motion.div>
                <motion.div
                    initial={{opacity: 0, y: 25}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, ease: 'easeInOut'}}
                    className={classes.contentMotionDiv}
                >
                    {getCurrentContent(card)}
                </motion.div>
            </div>
        </Box>
    );
}
