import { Container } from '@/components/common/mantine';

import { RecommendedHeader } from '@/components/views/recommended/RecommendedHeader';
import { RecommendedListsSection } from '@/components/views/recommended/RecommendedListsSection';
import { RecommendedShapesWrapper } from '@/components/views/recommended/RecommendedShapesWrapper';

import { getRecommendedPage } from '@/lib/getRecommendedPage';

export default async function Recommended() {
  const getRecommendedPagePromise = getRecommendedPage();
  const { data } = await getRecommendedPagePromise;

  return (
    <Container
      size="sm"
      mih={'100vh'}
      h="100%"
      sx={{
        position: 'relative',
        '@media (max-width: 576px)': {
          overflowY: 'auto',
          overflowX: 'hidden',
        },
      }}
    >
      <RecommendedShapesWrapper>
        <RecommendedHeader />
        {data && <RecommendedListsSection data={data.recommendedGroups} />}
      </RecommendedShapesWrapper>
    </Container>
  );
}
