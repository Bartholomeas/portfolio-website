import { SimpleGrid } from '@/components/common/mantine';

import { Post } from '@/types';

import React from 'react';

import { useBlogPostsFilters } from '../../../../hooks/usePostsFilters';

import { BlogCard } from './BlogCard';

type BlogPostsListProps = {
  posts: Post[] | undefined;
};

export function BlogPostsList({ posts }: BlogPostsListProps) {
  // const [filteredPosts, setFilteredPosts] = useState(posts);
  // const { queryParams } = useQueryParams();

  const { filteredPosts } = useBlogPostsFilters(posts);

  // useEffect(() => {
  //   if (posts) {
  //     const queryKeys = queryParams.get('Categories');
  //     if (!queryKeys) {
  //       setFilteredPosts(posts);
  //       return;
  //     }
  //     const categoriesArr =
  //       (queryKeys.split(',') as (keyof BlogCategoryCodes)[]) || [];

  //     const matchedPosts = posts.filter((post) =>
  //       post.blogCategories.every(
  //         (cat) => categoriesArr.indexOf(cat.code) !== -1
  //       )
  //     );
  //     setFilteredPosts(matchedPosts);
  //   }
  // }, [posts, queryParams]);

  return (
    <SimpleGrid
      cols={1}
      breakpoints={[
        { minWidth: 'sm', cols: 2 },
        { minWidth: 'lg', cols: 3 },
      ]}
    >
      {/* {filteredData &&
        filteredData.map((post) => <BlogCard key={post.id} post={post} />)} */}
      {filteredPosts &&
        filteredPosts.map((post) => <BlogCard key={post.id} post={post} />)}
    </SimpleGrid>
  );
}
