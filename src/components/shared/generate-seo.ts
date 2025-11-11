import { CLOUDINARY_URL, SITE_URL } from '@/constants'
import { ComponentSeoSeoFragmentFragment } from '@/graphql/generated/sdk'
import { Metadata } from 'next'

interface GenerateSeoParams {
    seo?: ComponentSeoSeoFragmentFragment | null
    pathname?: string
    noIndex?: boolean
    noFollow?: boolean
}
export function generateSeo({ seo, pathname, noIndex = false, noFollow = false }: GenerateSeoParams): Metadata | null {
    if (!seo) {
        return null
    }
    return {
        description: seo.MetaDescription,
        openGraph: {
            description: seo.MetaDescription ?? undefined,
            url: `${SITE_URL}${pathname ?? ''}`,
            images: [
                {
                    url: seo.ShareImageFile?.url ?? `${CLOUDINARY_URL}/v1646239061/images/svg/logo.svg`,
                },
            ],
            type: 'website',
            siteName: 'CashFlowFrog',
            title: seo.MetaTitle ?? undefined,
            locale: 'en_US',
        },
        alternates: {
            canonical: `${SITE_URL}${pathname ?? ''}`,
            languages: {
                'en-US': `${SITE_URL}${pathname ?? ''}`,
            },
        },
        twitter: {
            description: seo.MetaDescription ?? undefined,
            title: seo.MetaTitle ?? undefined,
            images: [
                {
                    url: seo.ShareImageFile?.url ?? `${CLOUDINARY_URL}/v1646239061/images/svg/logo.svg`,
                },
            ],
        },
        robots: {
            index: !noIndex,
            follow: !noFollow,
        },
        title: seo.MetaTitle,
    }
}
