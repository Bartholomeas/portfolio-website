import React from "react";
import {Post} from "@/types";
import {slugify} from "@/utils/slugify";

import {SimpleGrid, Stack, Text} from "@/components/common/mantine";
import {SectionHeading} from "@/components/common/ornaments/SectionHeading";
import {BlogCard} from "@/components/views/blog/list/BlogCard";

interface Props {
    data: Post[] | undefined
}

export function BlogPostsSection({data}: Props) {


    return <section>
        <Stack py={64} mih="50vh" spacing={64}>
            <SectionHeading title="Posty na blogu" subtext="Sprawdź co nowego na blogu!"/>
            {data ?
                <SimpleGrid
                    cols={1}
                    breakpoints={[
                        {minWidth: 'md', cols: 3},
                    ]}
                >
                    {data?.map((post) => <BlogCard key={`blogCard-${slugify(`${post?.title}-${post?.slug}`)}`}
                                                   post={post}/>)}
                </SimpleGrid>
                : <Text>Brak postów na blogu..</Text>}
        </Stack>
    </section>
}