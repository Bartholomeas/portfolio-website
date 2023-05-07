'use client';

import LandingSection from './components/home/landing/LandingSection';
import ProfitsSection from './components/home/profits/ProfitsSection';
import { Stack } from '@mantine/core';

const Home = () => {
  return (
    <Stack spacing={64}>
      <LandingSection />
      <ProfitsSection />
    </Stack>
  );
};
export default Home;
