// 'use client';

import { Container, Stack } from '@/_components/common/mantine';
import { Glow } from '@/_components/common/ornaments/Glow';
import { RecommendedHeader } from '@/_components/views/recommended/RecommendedHeader';
import { RecommendedList } from '@/_components/views/recommended/RecommendedList';

import { FetchResponse, RecommendedItems } from '@/_types';
import { API_URL } from '@/_utils/variables';

async function getRecommendedPage(): Promise<
  FetchResponse<RecommendedItems[]>
> {
  try {
    const res = await fetch(
      `${API_URL}/api/recommended-pages?fields[0]=title&populate[items]=items`
    );

    if (!res.ok) {
      throw new Error('getRecommendedPage: error');
    }

    return await res.json();
  } catch (err) {
    throw new Error('getRecommendedPage: error');
  }
}

export default async function Recommended() {
  const recommendedPromise = getRecommendedPage();
  const { data } = await recommendedPromise;

  return (
    <Container size="sm" mt={32} sx={{ position: 'relative' }}>
      <Glow size={500} position={{ top: -150, left: -150 }} />
      <RecommendedHeader />
      <Stack spacing={48}>
        {data.map((list) => (
          <RecommendedList list={list} />
        ))}
      </Stack>
      <Glow size={350} position={{ bottom: -150, right: -200 }} />
    </Container>
  );
}
