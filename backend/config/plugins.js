module.exports = ({ env }) => ({
  transformer: {
    enabled: true,
    config: {
      responseTransforms: {
        removeAttributesKey: true,
        removeDataKey: true,
      },
    },
  },
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        blogPost: {
          field: "slug",
          references: "title",
        },
      },
    },
  },
});
