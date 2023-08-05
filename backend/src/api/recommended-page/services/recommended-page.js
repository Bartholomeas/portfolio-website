'use strict';

/**
 * recommended-page service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::recommended-page.recommended-page');
