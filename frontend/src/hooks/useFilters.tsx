import { useEffect, useState } from 'react';
import { useDebouncedValue } from '@mantine/hooks';
import { usePathname } from 'next/navigation';

type SearchParamsCodes = { Search: 'Search'; Categories: 'Categories' };

type SearchParams = Record<keyof SearchParamsCodes, string>;

export type FiltersContext = {
  handleFilters?: (
    searchParam: keyof SearchParamsCodes,
    value: string | string[]
  ) => void;
  searchParams?: SearchParams;
  filterArray?: <T>(
    searchParam: keyof SearchParamsCodes,
    arr: T[] | undefined,
    filterName: keyof T
  ) => T[] | [];
};

export const useFilters = () => {
  const pathname = usePathname();
  const [searchParams, setSearchParams] = useState<SearchParams>({
    Search: '',
    Categories: '',
  });

  const [debouncedSearchParams] = useDebouncedValue(searchParams, 500);

  const [filteredData, setFilteredData] = useState<any>([]);

  // const filteredPosts = searchParams.Search
  //   ? currentPosts?.filter((post) =>
  //       post.title.toLowerCase().includes(searchParams.Search.toLowerCase())
  //     )
  //   : posts ?? [];

  // setCurrentPosts(filteredPosts);
  // console.log(filteredPosts);
  const filterArray = <T extends Record<keyof T, string>>(
    searchParam: keyof SearchParamsCodes | keyof SearchParamsCodes[],
    arr: T[] | undefined,
    filterName: keyof T
  ) => {
    if (typeof searchParam === 'string') {
      const newData = searchParams[searchParam]
        ? arr?.filter((item) =>
            item[filterName]
              .toLowerCase()
              .includes(searchParams.Search.toLowerCase())
          )
        : arr ?? [];

      setFilteredData(newData);
    } else if (Array.isArray(searchParam)) {
      console.log('tablica', searchParam);
    }

    // setFilteredData(filteredData);
    console.log(filteredData);
    return filteredData as T[] | [];
  };

  const handleFilters = (
    searchParam: keyof SearchParamsCodes,
    value: string | string[]
  ) => {
    setSearchParams((prev) => ({
      ...prev,
      [searchParam]: Array.isArray(value) ? value.join(',') : value.trim(),
    }));
  };

  useEffect(() => {
    const newParams = new URLSearchParams();

    Object.entries(debouncedSearchParams).forEach(
      ([key, value]: [string, string]) => {
        if (value) {
          newParams.set(key, value);
        } else {
          newParams.delete(key);
        }
      }
    );

    const searchQuery = newParams.toString() ? `?${newParams.toString()}` : '';
    window.history.replaceState(null, '', `${pathname}${searchQuery}`);
  }, [debouncedSearchParams, pathname]);

  return { handleFilters, searchParams: debouncedSearchParams, filterArray };
};
