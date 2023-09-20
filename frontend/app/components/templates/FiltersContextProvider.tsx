'use client';

import { PropsWithChildren } from 'react';

import { FiltersContext, useFilters } from '@/hooks/useFilters';
import { createCtx } from '@/utils/createCtx';

const [FiltersProvider, useFiltersCtx] = createCtx<FiltersContext>({
  defaultValue: {},
  displayName: 'FiltersProvider',
});

export { useFiltersCtx };

export function FiltersContextProvider({ children }: PropsWithChildren) {
  const filters = useFilters();

  return <FiltersProvider value={{ ...filters }}>{children}</FiltersProvider>;
}
