// src/app/header.tsx
'use client'

import Link from 'next/link'
//import { ChevronDown } from 'lucide-react' // npm i lucide-react

export default function Header() {
    return (
        <header className="bg-black text-white relative">
            <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4">
                {/* ─── 왼쪽: 브랜드 드롭다운 ─── */}
                <div className="relative group">
                    <button className="flex items-center space-x-1 hover:text-gray-300">
                        <span className="font-semibold text-lg">Recomind AI</span>
                        {/*<ChevronDown size={16} />*/}
                    </button>
                    {/*<div className="absolute left-0 top-full mt-1 w-48 bg-white text-black rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                        <ul className="py-2">
                            <li>
                                <Link href="#" className="block px-4 py-1 hover:bg-gray-100">
                                    Google AI
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="block px-4 py-1 hover:bg-gray-100">
                                    Google Cloud AI
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="block px-4 py-1 hover:bg-gray-100">
                                    AI Hub
                                </Link>
                            </li>
                        </ul>
                    </div>*/}
                </div>

                {/* ─── 가운데: 메인 네비게이션 ─── */}
                <nav className="flex items-center space-x-6 text-sm">
                    {['Products', 'Build', 'Research', 'Responsibility', 'Societal impact', 'About'].map((label) => (
                        label === 'Products' ?
                            <div key={label} className=" group">
                                {/* Products 버튼 */}
                                <button className="hover:text-gray-300">
                                    {label}
                                </button>
                                {/* 메가 메뉴 */}
                                <div
                                  className="
                                    absolute left-0 top-full
                                    w-screen
                                    bg-black backdrop-blur-sm
                                    overflow-hidden
                                    max-h-0 group-hover:max-h-screen
                                    transition-[max-height] duration-300 ease-out
                                  "
                                >
                                    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-3 gap-6">
                                        {/* 첫 번째 컬럼 */}
                                        <div>
                                            <h3 className="text-sm font-semibold uppercase mb-2">Experience AI</h3>
                                            <ul className="space-y-1 text-gray-100">
                                                <li><Link href="#" className="hover:underline">Chat with Gemini</Link></li>
                                                <li><Link href="#" className="hover:underline">AI Mode</Link></li>
                                                <li><Link href="#" className="hover:underline">NotebookLM</Link></li>
                                                <li><Link href="#" className="hover:underline">Flow</Link></li>
                                            </ul>
                                        </div>
                                        {/* 두 번째 컬럼 */}
                                        <div>
                                            <h3 className="text-sm font-semibold uppercase mb-2">Try AI Features</h3>
                                            <ul className="space-y-1 text-gray-100">
                                                <li><Link href="#" className="hover:underline">Ask Maps</Link></li>
                                                <li><Link href="#" className="hover:underline">Conversational AI</Link></li>
                                                <li><Link href="#" className="hover:underline">Gemini Live</Link></li>
                                                <li><Link href="#" className="hover:underline">Ask Photos</Link></li>
                                            </ul>
                                        </div>
                                        {/* 세 번째 컬럼 */}
                                        <div>
                                            <h3 className="text-sm font-semibold uppercase mb-2">Experiments</h3>
                                            <ul className="space-y-1 text-gray-100">
                                                <li><Link href="#" className="hover:underline">Project Astra</Link></li>
                                                <li><Link href="#" className="hover:underline">Project Mariner</Link></li>
                                                <li><Link href="#" className="hover:underline">Whisk</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            : <Link
                                key={label}
                                href="#"
                                className="hover:text-gray-300"
                            >
                                {label}
                            </Link>
                    ))}
                </nav>

                {/* ─── 오른쪽: CTA 버튼 ─── */}
                <div className="flex items-center space-x-3">
                    <Link
                        href="#"
                        className="border border-white px-4 py-2 rounded-full text-sm hover:bg-white hover:text-black transition"
                    >
                        Explore the Recomind AI Manual
                    </Link>
                    <Link
                        href="#"
                        className="bg-white text-black px-4 py-2 rounded-full text-sm hover:bg-gray-200 transition"
                    >
                        Try Recomind AI
                    </Link>
                </div>
            </div>
        </header>
    )
}
