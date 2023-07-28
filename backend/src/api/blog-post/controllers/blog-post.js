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

    async findLatest(ctx) {
      const entity = await strapi.db.query("api::blog-post.blog-post").find({
        _sort: "createdAt:DESC",
        _limit: 1,
        populate: ["headerImg", "blogCategories"],
      });
      if (entity.length === 0) {
        return ctx.throw(404, "Blog post not found");
      } else {
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);
      }
    },
  })
);
