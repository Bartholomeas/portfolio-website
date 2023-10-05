const socials = {
  github: 'https://github.com/Bartholomeas',
  linkedin: 'https://www.linkedin.com/in/bartosz-stefaniak-a82727222/',
  discord: '/',
};

export const routes = {
  home: '/',
  blog: '/blog',
  about: '/o-mnie',
  blogPost: (slug: string | undefined) => `/blog/${slug}`,
  recommended: '/polecane',
  ...socials,
};
