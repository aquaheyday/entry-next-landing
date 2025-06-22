'use client'

import '@/i18n'
import Head from 'next/head'
import { useTranslation } from 'react-i18next'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function AboutPage() {
    const { t, i18n } = useTranslation('common')
    const { locale: raw } = useParams()
    const locale = Array.isArray(raw) ? raw[0] : raw

    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        if (locale && i18n.language !== locale) {
            i18n.changeLanguage(locale)
        }
        setMounted(true)
    }, [locale, i18n])

    if (!mounted) {
        return <div className="p-8">Loading...</div>
    }

    return (
        <>
            <Head>
                <title>{t('about_title')}</title>
                <meta name="description" content={t('about_description')} />
            </Head>

            <main className="max-w-4xl mx-auto p-8 space-y-8">
                {/* Hero Section */}
                <section className="text-center">
                    <h1 className="text-5xl font-extrabold">{t('about_heading')}</h1>
                    <p className="mt-4 text-lg text-gray-600">{t('about_subheading')}</p>
                </section>

                {/* Feature Cards */}
                <section className="grid gap-6 md:grid-cols-2">
                    {['feature1', 'feature2', 'feature3', 'feature4'].map((key) => (
                        <div
                            key={key}
                            className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow"
                        >
                            <h2 className="text-2xl font-semibold mb-2">
                                {t(`${key}_title`)}
                            </h2>
                            <p className="text-gray-500">{t(`${key}_desc`)}</p>
                        </div>
                    ))}
                </section>

                {/* Call to Action */}
                <section className="text-center">
                    <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                        {t('about_cta')}
                    </button>
                </section>
            </main>
        </>
    )
}
