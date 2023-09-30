import { useEffect, useMemo, useState } from 'react';

import { useQueryParams } from '@/hooks/useQueryParams';
import { BlogCategory, Post } from '@/types';

export type SearchParamsCodes = {
  Search: 'Search';
  Categories: 'Categories';
};

export const useBlogPostsFilters = (posts: Post[] | undefined) => {
  const { queryParams } = useQueryParams();

  const [filteredPosts, setFilteredPosts] = useState(posts);

  const filterPosts = useMemo(
    () => (post: Post) => filterPostByQuery(post, Array.from(queryParams)),
    [queryParams]
  );

  useEffect(() => {
    if (posts) {
      const filteredArray = posts.filter(filterPosts);
      setFilteredPosts(filteredArray);
    }
  }, [filterPosts, posts, queryParams]);
  console.log('cycle');

  return { filteredPosts };
};

const filterPostByQuery = (post: Post, queryEntries: [string, string][]) => {
  let isMatching = true;

  queryEntries.forEach(([key, value]) => {
    if (!isMatching) return;

    const filterFunction = filterFunctions[key as keyof SearchParamsCodes];
    if (filterFunction) {
      isMatching = filterFunction(value, post);
    }
  });

  return isMatching;
};

const filterFunctions: Record<keyof SearchParamsCodes, any> = {
  Categories: (value: string, post: Post) =>
    post.blogCategories.every(
      (category: BlogCategory) => value.split(',').indexOf(category.code) !== -1
    ),
  Search: (value: string, post: Post) =>
    post.title.toLowerCase().includes(value.toLowerCase()),
};
