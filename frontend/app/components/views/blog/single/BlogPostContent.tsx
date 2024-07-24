'use client';


import React from 'react';
import {createStyles, rem} from '@mantine/core';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {Post} from '@/types';
import {Divider, Stack, TypographyStylesProvider,} from '@/components/common/mantine';


import {BlogPostBanner} from './BlogPostBanner';


const useStyles = createStyles((theme) => ({
    postContent: {
        backgroundColor: theme.other.bgDark,
        borderRadius: rem(8),
        [theme.fn.largerThan('sm')]: {
            transform: 'translateY(-100px)',
        },
    },

    stylesProvider: {
        p: {
            color: theme.other.textPrimary,
            fontWeight: 400,
            fontSize: theme.fontSizes.lg,
            lineHeight: 1.7,
            letterSpacing: '0.03rem',
        },
        strong: {color: theme.other.white},
        'h2,h3,h4': {
            color: theme.other.primary,
            marginTop: rem(24),
            marginBottom: rem(8),
        },
        h2: {
            fontSize: rem(32),
        },
        h3: {
            fontSize: rem(24),
        },
        h4: {
            fontSize: rem(20),
        },
    },
}));

type Props = {
    data: Post | undefined;
};

export function BlogPostContent({data}: Props) {
    const {classes} = useStyles();

    return (
        <Stack w="100%" maw={800} mx="auto" p={24} className={classes.postContent}>
            <BlogPostBanner data={data}/>
            <Divider/>

            <TypographyStylesProvider className={classes.stylesProvider}>
                <Markdown remarkPlugins={[remarkGfm]}>{data?.content ?? ''}</Markdown>
            </TypographyStylesProvider>
        </Stack>
    );
}
