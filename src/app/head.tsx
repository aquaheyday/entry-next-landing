import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: '내 서비스명 – 메인',
    description: '여기는 내 서비스 소개 문구입니다.',
    openGraph: {
        title: '내 서비스명',
        description: '서비스 설명',
        url: 'https://your-domain.com',
        siteName: '서비스명',
        images: [{ url: '/og-image.png', width: 1200, height: 630 }],
        locale: 'ko_KR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: '내 서비스명',
        description: '서비스 설명',
        images: ['/twitter-image.png'],
    },
}

export default function HeadComponent() {
    return null   // Next.js App Router는 metadata API를 사용하므로 빈 컴포넌트
}
