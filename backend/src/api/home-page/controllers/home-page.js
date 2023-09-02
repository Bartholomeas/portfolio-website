"use strict";

/**
 * home-page controller
 */
const { createCoreController } = require("@strapi/strapi").factories;

// const schema = require("../content-types/home-page/schema.json");
// const createPopulatedController = require("../../../helpers/populate");

module.exports = createCoreController("api::home-page.home-page");
