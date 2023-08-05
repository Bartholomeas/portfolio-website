import React from 'react';

import { Container } from '@/_components/common/mantine';
import { RecommendedHeader } from '@/_components/views/recommended/RecommendedHeader';

function Recommended() {
  return (
    <Container size="md" mt={32}>
      <RecommendedHeader />
    </Container>
  );
}

export default Recommended;
