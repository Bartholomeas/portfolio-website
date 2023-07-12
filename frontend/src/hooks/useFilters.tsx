import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import { useDebouncedValue } from '@mantine/hooks';

import { BlogCategoryCodes, Post } from '@/types';

type SearchParamsCodes = { Search: 'Search'; Categories: 'Categories' };

type SearchParams = Record<keyof SearchParamsCodes, string>;

export type FiltersContext = {
  handleFilters?: (
    searchParam: keyof SearchParamsCodes,
    value: string | string[]
  ) => void;
  searchParams?: SearchParams;
  filterArray?: (
    searchParam: (keyof SearchParamsCodes)[],
    arr: Post[] | undefined
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
    searchParam: (keyof SearchParamsCodes)[],
    arr: Post[] | undefined
  ) => {
    filterArrayWithArrayOfParameters(searchParam, arr);
  };

  const filterArrayWithArrayOfParameters = (
    searchParam: (keyof SearchParamsCodes)[],
    arr: Post[] | undefined
  ) => {
    const filteredArr = arr?.filter((item) =>
      searchParam.every((param) => {
        if (searchParams[param] === '') return true;
        if (param === 'Search') {
          return item.title
            .toLowerCase()
            .includes(searchParams[param].toLowerCase());
        }
        if (param === 'Categories') {
          const choosenCategories = searchParams.Categories.split(
            ','
          ) as (keyof BlogCategoryCodes)[];
          const itemCategories = item.blogCategories.map((cat) => cat.category);

          return choosenCategories.every((category) =>
            itemCategories.includes(category)
          );
        }
        return false;
      })
    );
    setFilteredData(filteredArr ?? []);
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
