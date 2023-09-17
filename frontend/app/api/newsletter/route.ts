import { NextResponse } from 'next/server';

import { CONVERTKIT_FORM_ID, CONVERTKIT_KEY } from '@/utils/variables';

const BASE_URL = 'https://api.convertkit.com/v3';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({
        message: `Email is required ${email}${BASE_URL}/forms/${CONVERTKIT_FORM_ID}/subscribe`,
      });
    }

    const res = await fetch(
      `${BASE_URL}/forms/${CONVERTKIT_FORM_ID}/subscribe`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          api_key: CONVERTKIT_KEY,
          email,
        }),
      }
    );
    if (!res.ok) {
      const errorData = await res.text();
      throw new Error(
        `Failed to subscribe. Server responded with ${res.status}: ${errorData}`
      );
    }

    return NextResponse.json({
      message: `Succesfully subscribed to newsletter: ${email}`,
    });
  } catch (err: any) {
    return NextResponse.json({ message: `Error: ${err?.message}` });
  }
}
