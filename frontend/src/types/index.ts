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
  blogCategories: BlogCategory[];
  headerImg: { url: string };
  id: number;
  publishedAt: string;
  readTime: number;
  shortDescription: string;
  title: string;
  slug: string;
};

export type FetchResponse<T> = T extends any[]
  ? {
      data: T;
      meta: {
        pagination: {
          page: number;
          pageCount: number;
          pageSize: number;
          total: number;
        };
      };
    }
  : { data: T };
