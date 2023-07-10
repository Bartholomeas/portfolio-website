'use client';

import { PropsWithChildren } from 'react';
import { createCtx } from '@/services/createCtx';
import { FiltersContext, useFilters } from '@/hooks/useFilters';

const [FiltersProvider, useFiltersCtx] = createCtx<FiltersContext>({
  defaultValue: {},
  displayName: 'FiltersProvider',
});

export { useFiltersCtx };

export function FiltersContextProvider({ children }: PropsWithChildren) {
  const filters = useFilters();

  return <FiltersProvider value={{ ...filters }}>{children}</FiltersProvider>;
}
