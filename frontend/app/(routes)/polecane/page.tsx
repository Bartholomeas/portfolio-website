import { Metadata } from 'next';

import { Container, Text } from '@/components/common/mantine';
import { RecommendedHeader } from '@/components/views/recommended/RecommendedHeader';
import { RecommendedListsSection } from '@/components/views/recommended/RecommendedListsSection';
import { RecommendedShapesWrapper } from '@/components/views/recommended/RecommendedShapesWrapper';

import { getRecommendedPage } from '@/requests/getRecommendedPage';

export const metadata: Metadata = {
  title: 'Polecane aplikacje i sprzęt | Bartosz Stefaniak - Frontend Developer',
  description:
    "Odkryj moje rekomendacje w świecie technologii! W sekcji 'Polecane' znajdziesz starannie wybrane aplikacje i sprzęt, które cenię za ich wydajność, jakość i przydatność w pracy frontend developera i web designera.",
  keywords: [
    'Polecane aplikacje',
    'Rekomendowany sprzęt',
    'Narzędzia programistyczne',
    'Software dla developerów',
    'Sprzęt dla programistów',
    'Produktywność',
    'Efektywność pracy',
    'Frontend tools',
    'Web development',
    'Bartosz Stefaniak rekomendacje',
  ],
  alternates: {
    canonical: 'https://www.bstefaniak.pl/polecane',
  },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://www.bstefaniak.pl/polecane',
    title:
      'Polecane aplikacje i sprzęt | Bartosz Stefaniak - Frontend Developer',
    description:
      'Odkryj moje rekomendacje w świecie technologii! Sprawdzone aplikacje i sprzęt, które cenię za ich wydajność i jakość w pracy frontend developera.',
    images: [
      {
        url: '/og_img.webp',
        width: 1200,
        height: 675,
        alt: 'Polecane aplikacje i sprzęt - Bartosz Stefaniak',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Polecane aplikacje i sprzęt | Bartosz Stefaniak - Frontend Developer',
    description:
      'Odkryj moje rekomendacje w świecie technologii! Sprawdzone aplikacje i sprzęt, które cenię za ich wydajność i jakość w pracy frontend developera.',
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

export default async function Recommended() {
  const getRecommendedPagePromise = getRecommendedPage().catch(() => ({
    data: undefined,
  }));
  const { data } = await getRecommendedPagePromise;

  return (
    <Container size="sm" mih="100vh" h="100%" px={24} py={64}>
      <RecommendedShapesWrapper>
        <RecommendedHeader />
        {data ? (
          <RecommendedListsSection data={data.recommendedGroups} />
        ) : (
          <Text>Brak danych</Text>
        )}
      </RecommendedShapesWrapper>
    </Container>
  );
}
