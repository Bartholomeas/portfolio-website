export type BlogCategory =
  | 'html'
  | 'javascript'
  | 'css'
  | 'frameworki'
  | 'react'
  | 'lifestyle'
  | 'inne';

export type Post = {
  uid: string;
  title: string;
  content: string;
  readTime: number;
  publishDate: string;
  blogCategories: BlogCategory[];
  headerImg: string;
  contentImages: string;
  isPublished: boolean;
  descriptionShort: any;
};

export type StrapiArrResponse<T> = {
  id: number;
  attributes: T;
};
