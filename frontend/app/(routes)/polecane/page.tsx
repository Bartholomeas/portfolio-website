import { Container } from '@/components/common/mantine';
import { Glow } from '@/components/common/ornaments/Glow';

import { RecommendedHeader } from '@/components/views/recommended/RecommendedHeader';
import { RecommendedListsSection } from '@/components/views/recommended/RecommendedListsSection';

import { getRecommendedPage } from '@/lib/getRecommendedPage';

export default async function Recommended() {
  const recommendedPromise = getRecommendedPage();
  const { data } = await recommendedPromise;

  return (
    <Container
      size="sm"
      sx={{
        position: 'relative',
        '@media (max-width: 576px)': {
          overflowY: 'auto',
          overflowX: 'hidden',
        },
      }}
    >
      <Glow size={500} position={{ top: -150, left: -150 }} />
      <RecommendedHeader />
      <RecommendedListsSection data={data} />
      <Glow size={350} position={{ bottom: -150, right: -200 }} />
    </Container>
  );
}
