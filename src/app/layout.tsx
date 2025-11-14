import type { Metadata } from 'next'

import { GoogleTagManager } from '@next/third-parties/google'
import { Manrope } from 'next/font/google'

import { SITE_URL } from '@/constants'

import './globals.css'

const manrope = Manrope({
    display: 'swap',
    subsets: ['latin'],
    variable: '--font-manrope',
    weight: ['200', '300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
    description: 'Cash Flow Frog',
    openGraph: {
        url: SITE_URL,
    },
    title: {
        absolute: 'Cash Flow Frog',
        template: '%s · Cash Flow Frog',
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <GoogleTagManager gtmId="GTM-MDM9PVK" />
            <body className={`${manrope.className} antialiased`}>{children}</body>
        </html>
    )
}
