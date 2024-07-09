'use server';

import { cookies } from 'next/headers';

export async function setCookie(haveConsent: boolean) {
  if (haveConsent) {
    cookies().set('consent', 'true', { maxAge: 60 * 60 * 24 * 31 });
  } else {
    cookies().delete('consent');
  }
}
