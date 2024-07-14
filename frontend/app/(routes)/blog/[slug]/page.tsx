import React from 'react';

import type {Metadata} from 'next';
import {notFound} from "next/navigation";
import {Box, Stack} from '@/components/common/mantine';
import {Breadcrumbs} from '@/components/common/mantine/Breadcrumbs';

import {BlogPostContent} from '@/components/views/blog/single/BlogPostContent';
import {BlogPostHeaderImg} from '@/components/views/blog/single/BlogPostHeaderImg';


import {getBlogPosts} from '@/requests/blog/getBlogPosts';
import {getSingleBlogPost} from '@/requests/blog/getSingleBlogPost';

import {createQueryClient} from '@/utils/createQueryClient';

const queryClient = createQueryClient();

export async function generateMetadata({
                                           params,
                                       }: {
    params: { slug: string };
}): Promise<Metadata> {
    const singleBlogPostData = getSingleBlogPost(params.slug).catch(() => {
            notFound()
        }
    )
    const {data} = await singleBlogPostData;

    const images = data?.headerImg?.url ? [data?.headerImg?.url] : []

    return {
        title: data?.title,
        description: data?.shortDescription,
        openGraph: {
            authors: 'Bartosz Stefaniak',
            description: data?.shortDescription,
            images,
        },
        authors: {
            name: 'Bartosz Stefaniak',
        },
        alternates: {
            canonical: `/blog/${params?.slug}`
        },
        creator: 'Bartosz Stefaniak',
    };
}

export default async function Page({params}: { params: { slug: string } }) {
    const singleBlogPostData = queryClient(`blogPost-${params.slug}`, () =>
        getSingleBlogPost(params?.slug).catch(() => {
            notFound()
        })
    );
    const {data} = await singleBlogPostData;

    const items = [
        {title: 'Blog', href: '/blog'},
        {title: data?.title ?? ''},
    ];

    return (
        <Stack maw={1000} mx="auto" px={16}>
            <Breadcrumbs items={items}/>

            <Box
                w="100%"
                h="auto"
                sx={{
                    aspectRatio: '16/8',
                    position: 'relative',
                    borderRadius: 8,
                    overflow: 'hidden',
                }}
            >
                {data?.headerImg?.url ?
                    <BlogPostHeaderImg imgUrl={data?.headerImg?.url} imgAlt="Nagłówek posta na Blogu"/> : null}
            </Box>
            <BlogPostContent data={data}/>
        </Stack>
    );
}

export async function generateStaticParams() {
    const blogPostsPromise = getBlogPosts().catch(() => ({
        data: undefined
    }));
    const {data} = await blogPostsPromise;

    return data ? data.map((post) => ({slug: post.slug})) : [];
}
