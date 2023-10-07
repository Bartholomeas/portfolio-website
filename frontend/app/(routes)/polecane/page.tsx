import { Container } from '@/components/common/mantine';

import { RecommendedHeader } from '@/components/views/recommended/RecommendedHeader';
import { RecommendedListsSection } from '@/components/views/recommended/RecommendedListsSection';
import { RecommendedShapesWrapper } from '@/components/views/recommended/RecommendedShapesWrapper';

import { getRecommendedPage } from '@/lib/getRecommendedPage';

export default async function Recommended() {
  const data = await getRecommendedPage().catch((err) => {
    console.log(err);
  });
  console.log(data);

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
      <RecommendedShapesWrapper>
        <RecommendedHeader />
        {/* {data && <RecommendedListsSection data={data} />} */}
      </RecommendedShapesWrapper>
    </Container>
  );
}
