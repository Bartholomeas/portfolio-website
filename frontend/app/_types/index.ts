export type BlogCategoryCodes = {
  tutorial: 'tutorial';
  framework: 'framework';
  styles: 'styles';
  tools: 'tools';
  other: 'other';
};

export type BlogCategory = { name: string; code: keyof BlogCategoryCodes };

export type Post = {
  content: string;
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
