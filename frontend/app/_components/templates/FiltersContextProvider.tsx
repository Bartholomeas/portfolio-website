'use client';


import { FiltersContext, useFilters } from '@/_hooks/useFilters';
import { createCtx } from '@/_utils/createCtx';

import { PropsWithChildren } from 'react';

const [FiltersProvider, useFiltersCtx] = createCtx<FiltersContext>({
  defaultValue: {},
  displayName: 'FiltersProvider',
});

export { useFiltersCtx };

export function FiltersContextProvider({ children }: PropsWithChildren) {
  const filters = useFilters();

  return <FiltersProvider value={{ ...filters }}>{children}</FiltersProvider>;
}
