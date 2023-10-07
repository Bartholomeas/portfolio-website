import { StrapiImage } from '.';

type SectionHeading = {
  id: number;
  uuid: string;
  title: string;
  subtitle: string;
};

export type HomePageSections = {
  homepageHeading: any;
  caseStudiesSection: CaseStudiesSection;
};

export type CaseStudiesSection = {
  id: number;
  heading: SectionHeading;
  caseStudies: CaseStudiesItem[];
};
export type CaseStudiesItem = {
  id: number;
  uuid: string;
  title: string;
  description: string;
  shortDescription: string;
  tools: Tool[];
  mainImg: StrapiImage;
};

type Tool = {
  id: number;
  name: string;
  uuid: string;
};

export type AboutMePage = {
  id: number;
  aboutMeCards: AboutMeCard[];
};

export type AboutMeSectionCardCodes = {
  general: 'general';
  frontend: 'frontend';
  design: 'design';
  summary: 'summary';
};

export type AboutMeCard = {
  id: number;
  title: string;
  description: string;
  image: StrapiImage | undefined;
  uuid: string;
  code: keyof AboutMeSectionCardCodes;
};

export type RecommendedItemsGroup = {
  id: number;
  title: string;
  uuid: string;
  items: {
    id: number;
    title: string;
    description: string;
    link: string;
    __component: string;
  }[];
};

export type RecommendedPage = {
  recommendedGroups: RecommendedItemsGroup[];
};
