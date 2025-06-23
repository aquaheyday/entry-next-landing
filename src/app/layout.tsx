import './globals.css'
import { Geist, Geist_Mono } from 'next/font/google'
import HeadMeta from './head'
import Header from './header'
import Footer from './footer'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })


export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="ko">
        <HeadMeta />
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        </body>
        </html>
    )
}