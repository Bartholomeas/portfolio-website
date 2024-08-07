'use client'

import React from 'react';
import {IconArrowRight} from '@tabler/icons-react';
import dayjs from 'dayjs';
import {motion} from 'framer-motion';
import Image from 'next/image';
import {Box, Card, Flex, Group, Stack} from '@/components/common/mantine';
import {ButtonLink} from '@/components/common/mantine/Button';
import {Text} from '@/components/common/mantine/Text';
import {Title} from '@/components/common/mantine/Title';
import {Link} from '@/components/common/special/Link';


import {routes} from '@/misc/routes';
import {Post} from '@/types';


import {BlogPostCategoryBadge} from './BlogPostCategoryBadge';
import {slugify} from "@/utils/slugify";

type BlogCardProps = {
    post: Post | undefined;
};

export function BlogCard({post}: BlogCardProps) {
    return (
        <Card
            component={motion.div}
            withBorder
            pb={8}
            p={16}
            initial={{opacity: 0, y: 150}}
            animate={{opacity: 1, y: 1}}
            transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
            }}
            sx={{position: 'relative', zIndex: 90}}
        >
            <Stack justify="space-between" h="100%">
                <Link href={routes.blogPost(post?.slug)}>
                    <Box
                        w="100%"
                        sx={{
                            position: 'relative',
                            aspectRatio: '16/9',
                            borderRadius: 8,
                            overflow: 'hidden',
                        }}
                    >
                        <Image
                            src={`${post?.headerImg?.url ?? ''}`}
                            alt={`${post?.title}`}
                            fill
                            sizes="50vw"
                            style={{objectFit: 'cover'}}
                        />
                    </Box>
                </Link>

                <Stack h="100%" spacing={16} justify="space-between">
                    <Flex w="100%" justify="space-between">
                        <Group spacing={4} align="center">
                            {post?.blogCategories?.map(({code, name}) => (
                                <BlogPostCategoryBadge key={`blogPostCategoryBadge-${slugify(`${code} ${name}`)}`}
                                                       code={code} name={name}/>
                            ))}
                        </Group>
                        <Group>
                            <Group spacing={8}>
                                <Text ta="center" size="sm" textColor="textSecondary">
                                    {dayjs(post?.publishedAt).format('DD.MM.YYYY')}
                                </Text>
                                <Text size="sm" textColor="textSecondary">
                                    ~ {post?.readTime} min
                                </Text>
                            </Group>
                        </Group>
                    </Flex>

                    <Link href={routes.blogPost(post?.slug)}>
                        <Title order={3} textColor="primary">
                            {post?.title}
                        </Title>
                    </Link>

                    <Text textColor="textPrimary" size="sm">
                        {post?.shortDescription}
                    </Text>
                    <ButtonLink
                        href={routes.blogPost(post?.slug)}
                        variant="outline"
                        sx={{alignSelf: 'end'}}
                        rightIcon={<IconArrowRight size={16}/>}
                    >
                        Przeczytaj
                    </ButtonLink>
                </Stack>
            </Stack>
        </Card>
    );
}
