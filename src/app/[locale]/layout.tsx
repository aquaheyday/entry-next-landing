// src/app/[locale]/layout.tsx
import '../globals.css'
import { dir } from 'i18next'
import type { ReactNode } from 'react'

export function generateStaticParams() {
    return ['ko', 'en', 'ja'].map((locale) => ({ locale }))
}

export default async function LocaleLayout(props: unknown) {
    // props 를 unknown 으로 받아서 any 사용 없이 안전하게 언래핑
    const { children, params } = props as {
        children: ReactNode
        params: Promise<{ locale: string | string[] }>
    }

    // params 가 Promise 이므로 await 처리
    const { locale: raw } = await params
    const locale = Array.isArray(raw) ? raw[0] : raw

    return (
        <html lang={locale} dir={dir(locale)}>
        <body>{children}</body>
        </html>
    )
}

