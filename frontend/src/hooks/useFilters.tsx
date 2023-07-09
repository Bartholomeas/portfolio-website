import { useEffect, useState } from 'react';
import { useDebouncedValue } from '@mantine/hooks';
import { usePathname, useSearchParams } from 'next/navigation';

type SearchParamsCodes = { Search: 'Search'; Categories: 'Categories' };
// type SearchParams = 'Search' | 'Categories';

// export const useFilters = (searchParam: string) => {
export const useFilters = () => {
  const [searchPhrase, setSearchPhrase] = useState<{
    [key: string]: string;
  }>({});
  const [debouncedSearchPhrase] = useDebouncedValue(searchPhrase, 500);

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const params = new URLSearchParams(Array.from(searchParams.entries()));

  const createQueryString = (name: string, value: string) => {
    params.set(name, value);
    return params.toString();
  };

  const handleFilters = (
    searchParam: keyof SearchParamsCodes,
    value: string | string[]
  ) => {
    setSearchPhrase((prev) => ({
      ...prev,
      [searchParam]: Array.isArray(value) ? value.join(',') : value.trim(),
    }));
    // params.set(searchParam, value.join(','));

    // if (!debouncedSearchPhrase && params.has(searchParam)) {
    //   params.delete(searchParam);
    // } else {
    //   params.set(searchParam, debouncedSearchPhrase[searchParam]);
    //   console.log(debouncedSearchPhrase);
    // }

    // if (typeof value === 'string') {
    //   const searchQuery = createQueryString(searchParam, value);
    //   window.history.pushState(null, '', `${pathname}?${searchQuery}`);
    // } else if (Array.isArray(value)) {
    //   const searchQuery = createQueryString(searchParam, value.join(','));
    //   window.history.pushState(null, '', `${pathname}?${searchQuery}`);
    // }
  };

  useEffect(() => {
    console.log(Object.entries(debouncedSearchPhrase));

    const newParams = new URLSearchParams();

    Object.entries(debouncedSearchPhrase).forEach(([key, value]) => {
      newParams.set(key, value);
    });

    const searchQuery = newParams.toString() ? `?${newParams.toString()}` : '';
    window.history.replaceState(null, '', `${pathname}${searchQuery}`);
  }, [debouncedSearchPhrase, pathname]);

  // useEffect(() => {
  //   console.log(searchPhrase);
  //   window.history.pushState(null, '', `${pathname}${searchQuery}`);
  // }, [searchPhrase, debouncedSearchPhrase]);

  // useEffect(() => {
  //   if (!debouncedSearchPhrase && params.has(searchParam)) {
  //     params.delete(searchParam);
  //   } else {
  //     params.set(searchParam, debouncedSearchPhrase);
  //   }

  //   const searchQuery = params.toString()
  //     ? `?${createQueryString(searchParam, searchPhrase)}`
  //     : '';

  //   // params.set(searchParam, searchPhrase);
  //   // router.push(`${pathname}${searchQuery}`, { shallow: true });
  //   // window.history.pushState(null, '', `${pathname}${searchQuery}`);
  //   window.history.replaceState(null, '', `${pathname}${searchQuery}`);
  //   console.log('jest');
  // }, [debouncedSearchPhrase, pathname]);

  return { handleFilters };
};
