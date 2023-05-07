'use client';

import React, { PropsWithChildren } from 'react';

import { useServerInsertedHTML } from 'next/navigation';
import { CacheProvider } from '@emotion/react';
import { useEmotionCache } from '@mantine/core';

import ThemeProvider from './ThemeProvider';

const RootStyleRegistry = ({ children }: PropsWithChildren) => {
  const cache = useEmotionCache();
  cache.compat = true;

  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(' '),
      }}
    />
  ));

  return (
    <CacheProvider value={cache}>
      <ThemeProvider>{children}</ThemeProvider>
    </CacheProvider>
  );
};

export default RootStyleRegistry;
