import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksAboutMe extends Schema.Component {
  collectionName: 'components_landing_page_about_mes';
  info: {
    displayName: 'SectionHeading';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String;
  };
}

export interface BlocksRecommendedGroup extends Schema.Component {
  collectionName: 'components_blocks_recommended_groups';
  info: {
    displayName: 'RecommendedItem';
    description: '';
    icon: 'puzzle';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
    uuid: Attribute.UID & Attribute.CustomField<'plugin::field-uuid.uuid'>;
    description: Attribute.RichText;
  };
}

export interface BlocksRecommendedItemsGroup extends Schema.Component {
  collectionName: 'components_blocks_recommended_items_groups';
  info: {
    displayName: 'RecommendedItemsGroup';
    icon: 'crown';
    description: '';
  };
  attributes: {
    items: Attribute.Component<'blocks.recommended-group', true>;
    title: Attribute.String & Attribute.Required;
    uuid: Attribute.UID & Attribute.CustomField<'plugin::field-uuid.uuid'>;
  };
}

export interface BlocksTitleWithDescription extends Schema.Component {
  collectionName: 'components_blocks_title_with_descriptions';
  info: {
    displayName: 'TitleWithDescription';
    icon: 'archive';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    icon: Attribute.String & Attribute.CustomField<'plugin::react-icons.icon'>;
  };
}

export interface HomepageAboutmeCard extends Schema.Component {
  collectionName: 'components_homepage_aboutme_cards';
  info: {
    displayName: 'AboutmeCard';
    icon: 'alien';
    description: '';
  };
  attributes: {
    uuid: Attribute.UID & Attribute.CustomField<'plugin::field-uuid.uuid'>;
    description: Attribute.RichText;
    image: Attribute.Media;
    title: Attribute.String & Attribute.Required;
    code: Attribute.Enumeration<['general', 'frontend', 'design', 'summary']> &
      Attribute.Required;
  };
}

export interface HomepageAboutmeSection extends Schema.Component {
  collectionName: 'components_homepage_aboutme_sections';
  info: {
    displayName: 'AboutMeSection';
    icon: 'alien';
    description: '';
  };
  attributes: {
    aboutMeCards: Attribute.Component<'homepage.aboutme-card', true>;
  };
}

export interface HomepageCaseStudiesSection extends Schema.Component {
  collectionName: 'components_homepage_case_studies_sections';
  info: {
    displayName: 'CaseStudiesSection';
    icon: 'apps';
    description: '';
  };
  attributes: {
    heading: Attribute.Component<'blocks.about-me'>;
    caseStudies: Attribute.Component<'homepage.case-studies', true>;
  };
}

export interface HomepageCaseStudies extends Schema.Component {
  collectionName: 'components_homepage_case_studies';
  info: {
    displayName: 'CaseStudies';
    icon: 'alien';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    shortDescription: Attribute.String & Attribute.Required;
    tools: Attribute.Relation<
      'homepage.case-studies',
      'oneToMany',
      'api::tool.tool'
    >;
    mainImg: Attribute.Media & Attribute.Required;
    uuid: Attribute.UID & Attribute.CustomField<'plugin::field-uuid.uuid'>;
    description: Attribute.RichText;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.about-me': BlocksAboutMe;
      'blocks.recommended-group': BlocksRecommendedGroup;
      'blocks.recommended-items-group': BlocksRecommendedItemsGroup;
      'blocks.title-with-description': BlocksTitleWithDescription;
      'homepage.aboutme-card': HomepageAboutmeCard;
      'homepage.aboutme-section': HomepageAboutmeSection;
      'homepage.case-studies-section': HomepageCaseStudiesSection;
      'homepage.case-studies': HomepageCaseStudies;
    }
  }
}
