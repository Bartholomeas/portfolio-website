"use strict";

/**
 * blog-post controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::blog-post.blog-post",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { id } = ctx.params;

      const entity = await strapi.db.query("api::blog-post.blog-post").findOne({
        where: {
          slug: id,
        },
        populate: ["headerImg", "blogCategories"],
      });

      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

      return this.transformResponse(sanitizedEntity);
    },
  })
);
