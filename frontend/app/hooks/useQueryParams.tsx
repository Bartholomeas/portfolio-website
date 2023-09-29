import {
  useSearchParams as useNextSearchParams,
  usePathname,
  useRouter,
} from 'next/navigation';
import { useCallback } from 'react';

export const useQueryParams = <T,>() => {
  const searchParams = useNextSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const urlSearchParams = new URLSearchParams(searchParams.toString());

  const setQueryParams = useCallback(
    (params: Partial<T>) => {
      Object.entries(params).forEach(([key, value]) => {
        if (value === undefined || value === null) {
          urlSearchParams.delete(key);
        } else {
          urlSearchParams.set(key, value.toString());
        }
      });

      const search = urlSearchParams.toString();
      const query = search ? `?${search}` : '';
      router.replace(`${pathname}${query}`, { scroll: false });
    },
    [searchParams]
  );

  return { queryParams: searchParams, setQueryParams };
};
