import React from 'react';
import { Metadata } from 'next';

import { Container, Stack } from '@/components/common/mantine';
import { BlogHeader } from '@/components/views/blog/list/BlogHeader';
import { BlogPostsSection } from '@/components/views/blog/list/BlogPostsSection';
import { BlogShapesWrapper } from '@/components/views/blog/list/BlogShapesWrapper';

import { getBlogCategories } from '@/requests/blog/getBlogCategories';
import { getBlogPosts } from '@/requests/blog/getBlogPosts';

export const metadata: Metadata = {
  title: 'Blog o Frontend, Design i Web Development | Bartosz Stefaniak',
  description:
    'Odkryj inspirujące artykuły, praktyczne porady i dogłębne analizy z zakresu frontend developmentu, web designu i najnowszych technologii webowych. Poszerzaj swoją wiedzę z ekspertem w dziedzinie React, Next.js i nowoczesnego web developmentu.',
  keywords: [
    'Frontend Development',
    'Web Design',
    'React',
    'Next.js',
    'JavaScript',
    'CSS',
    'UI/UX',
    'Web Performance',
    'Programowanie',
    'Technologie webowe',
  ],
  alternates: {
    canonical: 'https://www.bstefaniak.pl/blog',
  },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://www.bstefaniak.pl/blog',
    title: 'Blog o Frontend, Design i Web Development | Bartosz Stefaniak',
    description:
      'Odkryj inspirujące artykuły i praktyczne porady z zakresu frontend developmentu, web designu i najnowszych technologii webowych. Poszerzaj swoją wiedzę z ekspertem.',
    images: [
      {
        url: '/og_img.webp',
        width: 1200,
        height: 630,
        alt: 'Blog Bartosza Stefaniaka o Frontend i Web Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog o Frontend, Design i Web Development | Bartosz Stefaniak',
    description:
      'Odkryj inspirujące artykuły i praktyczne porady z zakresu frontend developmentu, web designu i najnowszych technologii webowych.',
    images: ['/og_img.webp'],
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
};

async function Blog() {
  const blogPostsPromise = getBlogPosts().catch(() => ({
    data: undefined,
  }));
  const blogCategoriesPromise = getBlogCategories().catch(() => ({
    data: undefined,
  }));
  const [{ data: blogPostsData }, { data: blogCategoriesData }] =
    await Promise.all([blogPostsPromise, blogCategoriesPromise]);

  return (
    <Container size="lg" mt={32}>
      <Stack spacing={160} sx={{ position: 'relative' }}>
        <BlogShapesWrapper>
          <BlogHeader featuredPost={blogPostsData && blogPostsData[0]} />
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
