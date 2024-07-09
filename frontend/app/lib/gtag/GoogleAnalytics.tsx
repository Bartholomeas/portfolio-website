'use client'

import Script from "next/script";
import {GTAG_ID} from "@/utils/variables";

declare const window: Window & { gtag: any };

export function GoogleAnalytics() {
    if (typeof window !== "undefined")
        return <>
            <Script async strategy='lazyOnload'
                    src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`}
            />
            <Script id='gtag-script' strategy='lazyOnload'>
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GTAG_ID}', {
                page_path: window.location.pathname,
                });
            `}
            </Script>
        </>
    return null
}
