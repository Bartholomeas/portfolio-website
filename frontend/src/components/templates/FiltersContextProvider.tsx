'use client';

import { PropsWithChildren, useReducer } from 'react';
import { createCtx } from '@/services/createCtx';
import { useFilters } from '@/hooks/useFilters';

const [FiltersProvider, useFiltersCtx] = createCtx<any>({
  defaultValue: {},
  displayName: 'FiltersProvider',
});

export { useFiltersCtx };

export function FiltersContextProvider({ children }: PropsWithChildren) {
  function reducer(state: any, action: any) {
    return { ...state, ...action };
  }
  const [state, dispatch] = useReducer(reducer, { test: 32 });
  const { handleFilters } = useFilters();

  return (
    <FiltersProvider value={{ handleFilters }}>{children}</FiltersProvider>
  );
}
