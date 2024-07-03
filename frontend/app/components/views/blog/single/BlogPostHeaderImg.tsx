'use client';

import React from 'react';
import {Image} from '@/components/common/mantine/Image';

type Props = {
    imgUrl: string | undefined;
    imgAlt: string | undefined;
};

export function BlogPostHeaderImg({imgUrl, imgAlt = "Nagłówek zdjęcia na Blogu"}: Props) {
    return (
        <Image
            src={`${imgUrl ?? '/'}`}
            alt={imgAlt}
            fill
            sizes="50vw"
            loading="lazy"
            sx={{
                objectFit: 'cover',
                width: '100%',
            }}
        />
    );
}
