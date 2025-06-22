'use client'

import Link from 'next/link'

export default function Footer() {
    // 푸터 링크 목록
    const links = [
        { label: 'About', href: '#' },
        { label: 'Products', href: '#' },
        { label: 'Privacy', href: '#' },
        { label: 'Terms', href: '#' },
        { label: 'Manage cookies', href: '#' },
    ]

    return (
        <footer className="bg-black text-gray-400 text-sm">
            <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                {/* 왼쪽 로고 */}
                <div className="flex-shrink-0">
                    <Link href="https://www.google.com" className="text-white font-medium hover:underline">
                        Recomind
                    </Link>
                </div>

                {/* 가운데 링크 그룹 */}
                <nav className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
                    {links.map(({ label, href }) => (
                        <Link
                            key={label}
                            href={href}
                            className="hover:text-gray-200 hover:underline"
                        >
                            {label}
                        </Link>
                    ))}
                </nav>

                {/* 오른쪽 저작권 */}
                <div className="text-xs text-gray-500">
                    © {new Date().getFullYear()} Recomind AI
                </div>
            </div>
        </footer>
    )
}
