import React from 'react';
import {Metadata} from 'next';

import {Container, Stack} from '@/components/common/mantine';
import {BlogHeader} from '@/components/views/blog/list/BlogHeader';
import {BlogPostsSection} from '@/components/views/blog/list/BlogPostsSection';
import {BlogShapesWrapper} from '@/components/views/blog/list/BlogShapesWrapper';

import {getBlogCategories} from '@/requests/blog/getBlogCategories';
import {getBlogPosts} from '@/requests/blog/getBlogPosts';

export const metadata: Metadata = {
    title: 'Blog Front-end | Bartosz Stefaniak',
    description:
        'Na tym blogu znajdziesz wpisy dotyczące IT, z naciskiem na front-end. Ponadto rady, ciekawostki i przemyślenia.',
};

async function Blog() {
    const blogPostsPromise = getBlogPosts().catch(() => ({
        data: undefined
    }));
    const blogCategoriesPromise = getBlogCategories().catch(() => ({
        data: undefined
    }));
    const [{data: blogPostsData}, {data: blogCategoriesData}] =
        await Promise.all([blogPostsPromise, blogCategoriesPromise]);

    return (
        <Container size="lg" mt={32}>
            <Stack spacing={160} sx={{position: 'relative'}}>
                <BlogShapesWrapper>
                    <BlogHeader
                        featuredPost={(blogPostsData && blogPostsData[0])}
                    />
                </BlogShapesWrapper>
                <BlogPostsSection
                    posts={blogPostsData}
                    categories={blogCategoriesData}
                />
            </Stack>
        </Container>
    );
}

export default Blog;
