export type SearchParams = Record<keyof SearchParamsCodes, string | string[]>;
export type SearchParamsCodes = {
  Search: 'Search';
  Categories: 'Categories';
};
