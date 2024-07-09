'use client';

import React from 'react';
import dayjs from 'dayjs';
import {createStyles, rem} from '@mantine/core';

import {routes} from "@/misc/routes";

import {Container, Divider, Group, Stack} from '../mantine';
import {Anchor} from '../mantine/Anchor';
import {Text} from '../mantine/Text';

import {FooterNewsletterSection} from './FooterNewsletterSection';
import {Link} from "@/components/common/special/Link";

const useStyles = createStyles((theme) => ({
    footer: {
        borderTop: `${rem(1)} solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
        }`,
    },

    inner: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: theme.spacing.sm,
        paddingBottom: theme.spacing.sm,

        [theme.fn.smallerThan('xs')]: {
            flexDirection: 'column',
        },
    },

    links: {
        [theme.fn.smallerThan('xs')]: {
            marginTop: theme.spacing.md,
        },
    },
}));

export function Footer() {
    const {classes} = useStyles();

    return (
        <Stack spacing={0} mt={120}>
            <FooterNewsletterSection/>
            <div className={classes.footer}>
                <Container className={classes.inner}>
                    <Text size="sm" textColor="textSecondary">
                        Bartosz Stefaniak &copy; {dayjs(new Date()).format('YYYY')}
                    </Text>
                    <Group spacing={16} className={classes.links} position="right" noWrap>
                        <Anchor
                            textColor="textSecondary"
                            size="sm"
                            href="mailto:kontakt@bstefaniak.pl"
                        >
                            kontakt@bstefaniak.pl
                        </Anchor>
                        <Divider mx={0} orientation="vertical"/>
                        <Link
                            href={routes.privacyPolicy}
                            // href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                            // rel="noreferrer"
                        >
                            <Text size="sm" fw={400} textColor="textSecondary">
                                Polityka prywatności
                            </Text>
                        </Link>
                        <a
                            target='_blank'
                            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                            rel="noreferrer"
                        >
                            <Text size="sm" fw={400} textColor="textSecondary">
                                👀
                            </Text>
                        </a>
                    </Group>
                </Container>
            </div>
        </Stack>
    );
}
