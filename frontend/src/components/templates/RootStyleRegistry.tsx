'use client';

import { CacheProvider } from '@emotion/react';
import { useEmotionCache } from '@mantine/core';
import { useServerInsertedHTML } from 'next/navigation';
import React, { PropsWithChildren } from 'react';

import ThemeProvider from './ThemeProvider';

function RootStyleRegistry({ children }: PropsWithChildren) {
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
}

export default RootStyleRegistry;
