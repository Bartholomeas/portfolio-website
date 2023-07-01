import { Stack } from '@mantine/core';
import React from 'react';
import { BlogCard } from '../BlogCard';

// async function getBlogPosts() {
//   const res = await fetch(
//     `${API_URL}/api/blog-posts?populate[0]=blogCategories&populate[1]=headerImg`
//   );

//   if (!res.ok) throw new Error('getBlogPosts: Failed to fetch');

//   return res.json();
// }

export function BlogPostsList() {
  // const { data } = useFetch<Post>(getAllPosts);
  // const { data } = await getBlogPosts();

  // console.log(meta);

  return (
    <Stack spacing={32}>
      {/* {data?.map((post) => (
        <BlogCard
          key={post.id}
          title={post?.title}
          shortDescription={post?.shortDescription}
          createdAt={post?.publishedDate}
          readTime={post?.readTime}
          imgSrc={post?.headerImg?.url}
          categories={post?.blogCategories}
        />
      ))} */}
    </Stack>
  );
}
