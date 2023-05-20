'use client';

import LandingSection from './components/home/landing/LandingSection';
import AboutSection from './components/home/about/AboutSection';
import { Stack } from '@mantine/core';

const Home = () => {
  return (
    <Stack spacing={64}>
      <LandingSection />
      <AboutSection />
    </Stack>
  );
};
export default Home;
