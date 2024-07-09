import {MetadataRoute} from "next";

const sitemap = (): MetadataRoute.Sitemap => [
    {
        url: 'https://bstefaniak.pl',
        changeFrequency: 'weekly',
        priority: 1,
        lastModified: new Date()
    },
    {
        url: 'https://bstefaniak.pl/blog',
        changeFrequency: 'weekly',
        priority: 1,
        lastModified: new Date()
    },
    {
        url: 'https://bstefaniak.pl/o-mnie',
        changeFrequency: 'weekly',
        priority: 0.8,
        lastModified: new Date()
    },
    {
        url: 'https://bstefaniak.pl/polecane',
        changeFrequency: 'weekly',
        priority: 0.6,
        lastModified: new Date()
    },
    {
        url: 'https://bstefaniak.pl/polityka-prywatnosci',
        changeFrequency: 'weekly',
        priority: 0.3,
        lastModified: new Date()
    }
]

export default sitemap