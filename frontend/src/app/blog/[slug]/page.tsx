'use client';

import React from 'react';
import { FetchResponse, Post } from '@/types';
import { API_URL } from '@/utils/variables';

async function getBlogPost(slug: string): Promise<FetchResponse<Post>> {
  try {
    const res = await fetch(`${API_URL}/api/blog-posts/${slug}`);
    return res.json();
  } catch (err) {
    throw new Error('getBlogPost: error');
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  const blogPostPromise = getBlogPost(params.slug);
  const { data } = await blogPostPromise;
  console.log(data);

  return <div>page {params.slug}</div>;
}
