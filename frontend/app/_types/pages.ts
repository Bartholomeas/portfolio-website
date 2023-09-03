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
  aboutMeSection: any;
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
  heading: SectionHeading;
  aboutMeDescription: string;
  sectionImage: StrapiImage;
  skillCards: SkillCard[];
  icon: string;
};

type SkillCard = {
  id: number;
  title: string;
  description: string;
};
