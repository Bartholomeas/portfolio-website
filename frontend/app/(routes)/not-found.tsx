'use client';


import React, {useCallback} from 'react';

import {Container, Group} from '@/components/common/mantine';
import {Button} from '@/components/common/mantine/Button';
import {Text} from '@/components/common/mantine/Text';
import {Title} from '@/components/common/mantine/Title';
import {createStyles, rem} from '@mantine/core';

import {useRouter} from "next/navigation";

const useStyles = createStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: rem(80),
        paddingBottom: rem(80),
    },

    label: {
        textAlign: 'center',
        fontWeight: 900,
        fontSize: rem(220),
        lineHeight: 1,
        marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
        color:
            theme.colorScheme === 'dark'
                ? theme.colors.dark[4]
                : theme.colors.gray[2],

        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(120),
        },
    },

    title: {
        textAlign: 'center',
        fontWeight: 900,
        fontSize: rem(38),

        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(32),
        },
    },

    description: {
        maxWidth: rem(500),
        margin: 'auto',
        marginTop: theme.spacing.xl,
        marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
    },
}));
export default function NotFoundPage() {
    const router = useRouter()

    const getUserToPreviousPage = useCallback(() => {
        router.back()
    }, [])

    const {classes} = useStyles();

    return (
        <Container className={classes.root}>
            <div className={classes.label}>Błąd 404</div>
            <Title className={classes.title}>Nie znaleźliśmy tej strony</Title>
            <Text
                color="dimmed"
                size="lg"
                align="center"
                className={classes.description}
            >
                Czasem się tak zdarza, że strona znika w niewyjaśnionych okolicznościach.
            </Text>
            <Group position="center">
                <Button onClick={getUserToPreviousPage} variant="subtle" size="md">
                    Wróć do poprzedniej strony
                </Button>
            </Group>
        </Container>
    );
}
