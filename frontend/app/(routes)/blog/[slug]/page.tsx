import React from 'react';

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Box, Stack } from '@/components/common/mantine';
import { Breadcrumbs } from '@/components/common/mantine/Breadcrumbs';

import { BlogPostContent } from '@/components/views/blog/single/BlogPostContent';
import { BlogPostHeaderImg } from '@/components/views/blog/single/BlogPostHeaderImg';

import { getBlogPosts } from '@/requests/blog/getBlogPosts';
import { getSingleBlogPost } from '@/requests/blog/getSingleBlogPost';

import { createQueryClient } from '@/utils/createQueryClient';

const queryClient = createQueryClient();

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const singleBlogPostData = await getSingleBlogPost(params.slug).catch(() => {
    notFound();
  });
  const { data } = singleBlogPostData;

  const images = data?.headerImg?.url
    ? [
        {
          url: data.headerImg.url,
          width: 1200,
          height: 630,
          alt: data?.title || 'Blog post image',
        },
      ]
    : [];

  const baseUrl = 'https://www.bstefaniak.pl';

  return {
    title: `${data?.title} | Blog Bartosza Stefaniaka`,
    description: data?.shortDescription,
    openGraph: {
      type: 'article',
      title: data?.title,
      description: data?.shortDescription,
      url: `${baseUrl}/blog/${params.slug}`,
      images,
      authors: ['Bartosz Stefaniak'],
      publishedTime: data?.publishedAt,
    },
    twitter: {
      card: 'summary_large_image',
      title: data?.title,
      description: data?.shortDescription,
      images: images?.length > 0 ? [images[0]?.url] : [],
    },
    authors: [{ name: 'Bartosz Stefaniak' }],
    creator: 'Bartosz Stefaniak',
    publisher: 'Bartosz Stefaniak',
    alternates: {
      canonical: `${baseUrl}/blog/${params.slug}`,
    },
    keywords: [
      ...(data?.blogCategories ?? []).map((category) => category.name),
      'Frontend Developer',
      'Web Development',
      'React',
      'Next.js',
      'JavaScript',
      'TypeScript',
      'HTML',
      'CSS',
      'Responsive Design',
      'UI/UX',
      'Web Performance',
      'SEO',
      'Progressive Web Apps',
      'Single Page Applications',
      'Projektowanie graficzne',
      'Programowanie',
      'Tworzenie stron internetowych',
      'Grafika komputerowa',
      'Projektowanie UX/UI',
      'Optymalizacja stron',
      'Rozwój aplikacji webowych',
    ].join(', '),
    robots: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const singleBlogPostData = queryClient(`blogPost-${params.slug}`, () =>
    getSingleBlogPost(params?.slug).catch(() => {
      notFound();
    })
  );
  const { data } = await singleBlogPostData;

  const items = [
    { title: 'Blog', href: '/blog' },
    { title: data?.title ?? '' },
  ];

  return (
    <Stack maw={1000} mx="auto" px={16}>
      <Breadcrumbs items={items} />

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
        {data?.headerImg?.url ? (
          <BlogPostHeaderImg
            imgUrl={data?.headerImg?.url}
            imgAlt="Nagłówek posta na Blogu"
          />
        ) : null}
      </Box>
      <BlogPostContent data={data} />
    </Stack>
  );
}

export async function generateStaticParams() {
  const blogPostsPromise = getBlogPosts().catch(() => ({
    data: undefined,
  }));
  const { data } = await blogPostsPromise;

  return data ? data.map((post) => ({ slug: post.slug })) : [];
}
