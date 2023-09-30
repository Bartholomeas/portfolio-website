import {
  useSearchParams as useNextSearchParams,
  usePathname,
  useRouter,
} from 'next/navigation';

import { SearchParamsCodes } from './usePostsFilters';

export type SearchParams = Record<keyof SearchParamsCodes, string | string[]>;

export const useQueryParams = () => {
  const searchParams = useNextSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const urlSearchParams = new URLSearchParams(searchParams.toString());

  const setQueryParams = (params: Partial<SearchParams>) => {
    Object.entries(params).forEach(([key, value]) => {
      if (!value) {
        urlSearchParams.delete(key);
      } else {
        urlSearchParams.set(key, value.toString().toLowerCase());
      }
      if (Array.isArray(value) && !value.length) {
        urlSearchParams.delete(key);
      }
    });

    const search = urlSearchParams.toString();
    const query = search ? `?${search}` : '';
    router.replace(`${pathname}${query}`, { scroll: false });
  };

  return { queryParams: searchParams, setQueryParams };
};
