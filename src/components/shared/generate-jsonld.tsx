import type { FAQPage, Organization, WebPage, WithContext } from 'schema-dts'

import { CLOUDINARY_URL, SITE_URL } from '@/constants'
import { ComponentSeoSeoFragmentFragment } from '@/graphql/generated/sdk'
import { api } from '@/lib/api'

interface FaqItem {
    Answer?: null | string
    Question?: null | string
}

interface GenerateJsonLdProps {
    faqData?: (FaqItem | null)[] | null
    seo?: ComponentSeoSeoFragmentFragment | null
    showJsonLdOrganization?: boolean
    showJsonLdWebpage?: boolean
}

export async function GenerateJsonLd({
    faqData = [],
    seo,
    showJsonLdOrganization = false,
    showJsonLdWebpage = true,
}: GenerateJsonLdProps) {
    const jsonLdWebpage = getWebPageJsonLd({
        description: seo?.MetaDescription ?? 'Cash Flow Frog',
        title: seo?.MetaTitle ?? 'Cash Flow Frog',
    })
    const jsonLdOrganization = getOrganizationJsonLd()
    const jsonLdFaq = getFaqJsonLd({ faqs: faqData ?? [] })

    const { faqs: defaultFaqs } = await api.getAllFaqs()

    return (
        <>
            {showJsonLdWebpage && (
                <script
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(jsonLdWebpage).replaceAll('<', '\\u003c'),
                    }}
                    id="jsonld-webpage"
                    type="application/ld+json"
                />
            )}
            {showJsonLdOrganization && (
                <script
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(jsonLdOrganization).replaceAll('<', '\\u003c'),
                    }}
                    id="jsonld-organization"
                    type="application/ld+json"
                />
            )}
            {(faqData?.length ?? 0) > 0 ? (
                <script
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(jsonLdFaq).replaceAll('<', '\\u003c'),
                    }}
                    id="jsonld-faq"
                    type="application/ld+json"
                />
            ) : (
                <script
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(getFaqJsonLd({ faqs: defaultFaqs })).replaceAll('<', '\\u003c'),
                    }}
                    id="jsonld-faq"
                    type="application/ld+json"
                />
            )}
        </>
    )
}

export function getFaqJsonLd({ faqs }: { faqs: (FaqItem | null)[] }): WithContext<FAQPage> {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => {
            return {
                '@type': 'Question',
                acceptedAnswer: { '@type': 'Answer', text: faq?.Answer ?? '' },
                name: faq?.Question ?? '',
            }
        }),
    }
}

export function getOrganizationJsonLd(): WithContext<Organization> {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        description:
            'Cash Flow Frog is a simple yet powerful cash flow forecasting and scenario planning tool. Try it now and get your forecast instantly.',
        logo: `${CLOUDINARY_URL}/image/upload/images/svg/logo.svg`,
        name: 'CashFlowFrog',
        url: SITE_URL,
    }
}

export function getWebPageJsonLd({ description, title }: { description: string; title: string }): WithContext<WebPage> {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        description,
        name: title,
        publisher: {
            '@type': 'Person',
            name: 'Ariel Gottfeld',
            url: 'https://www.linkedin.com/in/arielgottfeld',
        },
    }
}
