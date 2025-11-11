import type { Metadata } from 'next'

import { Manrope } from 'next/font/google'

import { Layout } from '@/components/layout'
import { SITE_URL } from '@/constants'

import './globals.css'

const manrope = Manrope({
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
            <body className={`${manrope.className} antialiased`}>
                <Layout>{children}</Layout>
            </body>
        </html>
    )
}
