export type BlogCategoryCodes = {
  html: 'html';
  javascript: 'javascript';
  css: 'css';
  framework: 'framework';
  react: 'react';
  lifestyle: 'lifestyle';
  other: 'other';
};

export type BlogCategory = { category: keyof BlogCategoryCodes };

export type Post = {
  id: number;
  title: string;
  readTime: number;
  publishedAt: string;
  blogCategories: BlogCategory[];
  headerImg: { url: string };
  shortDescription: string;
};

export type FetchResponse<T> = {
  data: T;
  meta: {
    pagination: {
      page: number;
      pageCount: number;
      pageSize: number;
      total: number;
    };
  };
};
