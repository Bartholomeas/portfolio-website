module.exports = {
  routes: [
    {
      method: "GET",
      path: "/blog-posts/:slug",
      handler: "blog-post.findOne",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/blog-posts/latest",
      handler: "blog-post.findLatest",
      config: {
        auth: false,
      },
    },
  ],
};
