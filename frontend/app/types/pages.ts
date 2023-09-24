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
  aboutMeSection: AboutMeSection;
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

export type AboutMeSection = {
  id: number;
  aboutmeCards: AboutMeCard[];
};

export type AboutMeCard = {
  id: number;
  title: string;
  shortDescription: string;
  description: string;
  image: StrapiImage | undefined;
  uuid: string;
  icon: string;
};
