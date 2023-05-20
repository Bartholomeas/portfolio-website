'use client';

import { Stack } from '@mantine/core';
import LandingSection from './components/home/landing/LandingSection';
import AboutSection from './components/home/about/AboutSection';

function Home() {
  return (
    <Stack spacing={64}>
      <LandingSection />
      <AboutSection />
    </Stack>
  );
}
export default Home;
