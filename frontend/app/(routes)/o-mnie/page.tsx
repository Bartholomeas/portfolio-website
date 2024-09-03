import React from 'react';
import { Metadata } from 'next';

import { Container, Stack } from '@/components/common/mantine';

import {
  FloatingShape,
  FloatingShapeProps,
} from '@/components/common/ornaments/FloatingShape';
import { AboutHeader } from '@/components/views/about/AboutHeader';
import { AboutSection } from '@/components/views/about/AboutSection';

import { getAboutMePage } from '@/requests/aboutMe/getAboutMePage';

export const metadata: Metadata = {
  title: 'O mnie | Bartosz Stefaniak - Frontend Developer & Web Designer',
  description:
    'Poznaj mnie bliżej i odkryj, co mnie napędza! Dowiedz się więcej o moich pasjach, projektach i unikalnym podejściu do tworzenia stron internetowych i aplikacji webowych. Ekspert w React, Next.js i nowoczesnych technologiach frontendowych.',
  keywords: [
    'O mnie',
    'Bartosz Stefaniak',
    'Frontend Developer',
    'Web Designer',
    'React',
    'Next.js',
    'Projekty webowe',
    'UI/UX',
    'Pasja do programowania',
    'Innowacyjne podejście',
  ],
  alternates: {
    canonical: 'https://www.bstefaniak.pl/o-mnie',
  },
  openGraph: {
    type: 'profile',
    locale: 'pl_PL',
    url: 'https://www.bstefaniak.pl/o-mnie',
    title: 'O mnie | Bartosz Stefaniak - Frontend Developer & Web Designer',
    description:
      'Poznaj mnie bliżej i odkryj, co mnie napędza! Dowiedz się więcej o moich pasjach, projektach i unikalnym podejściu do tworzenia stron internetowych i aplikacji webowych.',
    images: [
      {
        url: '/og_img.webp',
        width: 1200,
        height: 675,
        alt: 'Bartosz Stefaniak - O mnie',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'O mnie | Bartosz Stefaniak - Frontend Developer & Web Designer',
    description:
      'Poznaj mnie bliżej i odkryj, co mnie napędza! Dowiedz się więcej o moich pasjach, projektach i unikalnym podejściu do tworzenia stron internetowych i aplikacji webowych.',
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

export default async function AboutMe() {
  const aboutMePromise = getAboutMePage().catch(() => ({ data: undefined }));
  const { data } = await aboutMePromise;

  return (
    <Container size="lg" h="100%" w="100%">
      <Stack
        spacing={128}
        align="center"
        mt={128}
        sx={{ position: 'relative' }}
      >
        <AboutHeader />
        <AboutSection cards={data?.aboutMeCards} />

        {pageShapes?.map((shape) => (
          <FloatingShape key={`${shape.shape}-${shape.size}`} {...shape} />
        ))}
      </Stack>
    </Container>
  );
}

const pageShapes: FloatingShapeProps[] = [
  {
    shape: 'firstShape',
    rotate: 39,
    size: 300,
    sx: {
      position: 'absolute',
      bottom: '20%',
      right: 32,
    },
  },
  {
    shape: 'firstShape',
    rotate: 120,

    size: 250,
    sx: {
      position: 'absolute',
      bottom: '45%',
      left: 16,
    },
  },
  {
    shape: 'firstShape',
    rotate: 45,
    size: 150,
    sx: {
      position: 'absolute',
      bottom: '60%',
      right: 16,
      opacity: 0.4,
    },
  },
  {
    shape: 'firstShape',
    size: 320,
    sx: {
      position: 'absolute',
      bottom: '85%',
      right: 32,
    },
  },
  {
    shape: 'firstShape',
    size: 200,
    rotate: 85,
    sx: {
      position: 'absolute',
      bottom: 0,
      right: '50%',
    },
  },
];
