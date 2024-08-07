import {revalidatePath, revalidateTag} from 'next/cache';
import {NextResponse} from 'next/server';

import {routes} from '@/misc/routes';
import {REVALIDATE_BLOG_SECRET} from '@/utils/variables';
import {GET_BLOG_POSTS_KEY, GET_HOMEPAGE_KEY} from "@/requests/keys";
import {getBlogPosts} from "@/requests/blog/getBlogPosts";

export async function POST(req: Request) {
    try {
        const {searchParams} = new URL(req.url);
        const secret = searchParams.get('secret');
        console.log("Rewalidating..", secret === REVALIDATE_BLOG_SECRET)

        if (!secret) {
            return NextResponse.json({
                message: 'There is no secret in the request.',
            });
        }

        if (secret !== REVALIDATE_BLOG_SECRET) {
            return NextResponse.json({
                revalidated: false,
                now: Date.now(),
                message: 'Wrong secret',
            })
        }

        const blogPostsPromise = getBlogPosts().catch(() => ({
            data: undefined
        }));
        const {data} = await blogPostsPromise;
        const blogPostSlugs = data?.map((post) => post?.slug)
        blogPostSlugs?.forEach((slug) => {
            revalidatePath(routes.blogPost(slug), 'page');

        })

        revalidatePath(routes.blog, 'page');
        revalidatePath(routes.home, 'page');
        revalidatePath(routes.about, 'page');
        revalidatePath(routes.recommended, 'page');
        revalidatePath(routes.privacyPolicy, 'page');

        revalidateTag(GET_BLOG_POSTS_KEY)
        revalidateTag(GET_HOMEPAGE_KEY)

        return NextResponse.json({
            revalidated: true,
            now: Date.now(),
            message: 'Revalidated succesfully.',
        });

    } catch (err: any) {
        return NextResponse.json({message: `Error: ${err}`});
    }
}
