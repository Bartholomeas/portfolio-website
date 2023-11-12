import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

import { routes } from '@/misc/routes';
import { REVALIDATE_BLOG_SECRET } from '@/utils/variables';

export async function POST(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const secret = searchParams.get('secret');

    if (!secret) {
      return NextResponse.json({
        message: 'There is no secret in the request.',
      });
    }

    if (secret !== REVALIDATE_BLOG_SECRET) {
      return NextResponse.json({
        message: 'Wrong secret.',
      });
    }

    revalidatePath(routes.blog);

    return NextResponse.json({
      message: 'Revalidated succesfully.',
    });
  } catch (err: any) {
    return NextResponse.json({ message: `Error: ${err}` });
  }
}
