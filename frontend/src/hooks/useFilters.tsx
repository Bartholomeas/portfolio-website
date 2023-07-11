import { useEffect, useState } from 'react';
import { useDebouncedValue } from '@mantine/hooks';
import { usePathname } from 'next/navigation';
import { Post } from '@/types';

type SearchParamsCodes = { Search: 'Search'; Categories: 'Categories' };

type SearchParams = Record<keyof SearchParamsCodes, string>;

export type FiltersContext = {
  handleFilters?: (
    searchParam: keyof SearchParamsCodes,
    value: string | string[]
  ) => void;
  searchParams?: SearchParams;
  filterArray?: (
    searchParam: keyof SearchParamsCodes | (keyof SearchParamsCodes)[],
    arr: Post[] | undefined,
    filterName: keyof Post
  ) => void;
  filteredData?: Post[] | [];
};

export const useFilters = () => {
  const pathname = usePathname();
  const [searchParams, setSearchParams] = useState<SearchParams>({
    Search: '',
    Categories: '',
  });

  const [debouncedSearchParams] = useDebouncedValue(searchParams, 500);

  const [filteredData, setFilteredData] = useState<Post[] | []>([]);

  const filterArray = (
    searchParam: keyof SearchParamsCodes | (keyof SearchParamsCodes)[],
    arr: Post[] | undefined,
    filterName: keyof Post
  ) => {
    if (
      typeof searchParams[searchParam as keyof SearchParamsCodes] === 'string'
    ) {
      const filteredArr = arr?.filter((item) => {
        if (typeof item[filterName] === 'string') {
          return item[filterName]
            .toString()
            .toLowerCase()
            .includes(
              searchParams[searchParam as keyof SearchParamsCodes].toLowerCase()
            );
        }
        return [];
      }) as Post[];
      setFilteredData(filteredArr);
    } else if (Array.isArray(searchParam)) {
      console.log('arr');
    }
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

  return {
    handleFilters,
    searchParams: debouncedSearchParams,
    filterArray,
    filteredData,
  };
};
