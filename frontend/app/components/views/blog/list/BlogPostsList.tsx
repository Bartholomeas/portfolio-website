'use client';

import React from 'react';

import {Post} from '@/types';
import {slugify} from "@/utils/slugify";
import {useBlogPostsFilters} from '@/hooks/usePostsFilters';

import {SimpleGrid} from '@/components/common/mantine';
import {BlogCard} from './BlogCard';

type BlogPostsListProps = {
    posts: Post[] | undefined;
};

export function BlogPostsList({posts}: BlogPostsListProps) {
    const {filteredPosts} = useBlogPostsFilters(posts);

    return (
        <SimpleGrid
            cols={1}
            breakpoints={[
                {minWidth: 'sm', cols: 2},
                {minWidth: 'lg', cols: 3},
            ]}
        >
            {filteredPosts &&
                filteredPosts.map((post) => <BlogCard key={`blogCard-${slugify(`${post?.title}-${post?.slug}`)}`}
                                                      post={post}/>)}
        </SimpleGrid>
    );
}
