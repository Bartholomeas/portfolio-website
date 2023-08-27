'use client';

import { Container } from '@/_components/common/mantine';
import { Glow } from '@/_components/common/ornaments/Glow';

import { RecommendedHeader } from '@/_components/views/recommended/RecommendedHeader';
import { RecommendedListsSection } from '@/_components/views/recommended/RecommendedListsSection';

import { FetchResponse, RecommendedItems } from '@/_types';
import { API_TOKEN, API_URL } from '@/_utils/variables';

async function getRecommendedPage(): Promise<
  FetchResponse<RecommendedItems[]>
> {
  try {
    const res = await fetch(
      `${API_URL}/api/recommended-pages?fields[0]=title&populate[items]=items`,
      { headers: { Authorization: `Bearer ${API_TOKEN}` } }
    );

    if (!res.ok) {
      console.error('Error status:', res.status);
      console.error('Error text:', await res.text());
      throw new Error('getRecommendedPage: error');
    }

    return await res.json();
  } catch (err: any) {
    throw new Error(`getRecommendedPage: ${err.message}`);
  }
}

export default async function Recommended() {
  const recommendedPromise = getRecommendedPage();
  const { data } = await recommendedPromise;
  console.log(data);
  return (
    <Container size="sm" mt={32} sx={{ position: 'relative' }}>
      <Glow size={500} position={{ top: -150, left: -150 }} />
      <RecommendedHeader />
      <RecommendedListsSection data={data} />
      <Glow size={350} position={{ bottom: -150, right: -200 }} />
    </Container>
  );
}
