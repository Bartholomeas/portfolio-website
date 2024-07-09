export type BlogCategoryCodes = {
    tutorial: 'tutorial';
    framework: 'framework';
    styles: 'styles';
    tools: 'tools';
    other: 'other';
};

export type BlogCategory = {
    id: number;
    name: string;
    code: keyof BlogCategoryCodes;
    uuid: string;
};


export type Post = {
    content: string;
    createdAt: string;
    blogCategories: BlogCategory[];
    headerImg: { url: string };
    id: number;
    uuid: string;
    publishedAt: string;
    readTime: number;
    shortDescription: string;
    title: string;
    slug: string;
};

export type FetchResponse<T> = T extends any[]
    ? {
        data: T;
        meta: {
            pagination: {
                page: number;
                pageCount: number;
                pageSize: number;
                total: number;
            };
        };
    }
    : { data: T };

export type StrapiImage = {
    id: number;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
        thumbnail: {
            ext: '.jpeg';
            url: string;
            hash: string;
            mime: 'image/jpeg';
            name: string;
            path: string | null;
            size: number;
            width: number;
            height: number;
            provider_metadata: {
                public_id: string;
                resource_type: 'image';
            };
        };
    };
    hash: string;
    ext: '.jpeg';
    mime: 'image/jpeg';
    size: number;
    url: string;
    previewUrl: string | null;
    provider: 'cloudinary';
    provider_metadata: {
        public_id: string;
        resource_type: 'image';
    };
    createdAt: string;
    updatedAt: string;
};
