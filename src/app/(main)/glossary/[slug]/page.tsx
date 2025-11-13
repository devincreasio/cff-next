import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Article, CreativeWorkSeries, WithContext } from 'schema-dts'

import { Cta } from '@/components/blocks/cta'
import { Faq } from '@/components/blocks/faq'
import { PostContent } from '@/components/blog/post-content'
import { PostHero } from '@/components/blog/post-hero'
import { Breadcrumbs } from '@/components/shared/breadcrumbs'
import { GenerateJsonLd } from '@/components/shared/generate-jsonld'
import { generateSeo } from '@/components/shared/generate-seo'
import { api } from '@/lib/api'
import { formatDate } from '@/lib/utils'

import { HelpCentreCta } from '../_components/help-centre-cta'

const getData = (slug: string) => api.GetGlossaryTemplate({ slug })

export const revalidate = 3600

interface GlossaryPageTemplateProps {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: GlossaryPageTemplateProps) {
    const { slug } = await params
    const { glossaries } = await getData(slug)
    const [data] = glossaries

    return generateSeo({ pathname: `/glossary/${slug}`, seo: data?.Seo })
}

export default async function GlossaryPageTemplate({ params }: GlossaryPageTemplateProps) {
    const { slug } = await params
    const { glossaries } = await getData(slug)
    const [data] = glossaries

    if (!data) {
        notFound()
    }

    const articleJsonLdSchema: WithContext<Article> = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        dateModified: data.updatedAt ?? '',
        datePublished: data.publishedAt ?? '',
        description: data.ShortDescription ?? '',
        headline: data.Name,
        image: data.Image?.url,
        mainEntityOfPage: {
            '@id': `https://cashflowfrog.com/glossary/${data.Slug}`,
            '@type': 'WebPage',
        },
    }

    const creativeWorkSeriesSchema: WithContext<CreativeWorkSeries> = {
        '@context': 'https://schema.org',
        '@type': 'CreativeWorkSeries',
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            reviewCount: 20,
        },
        name: data.Name,
    }

    return (
        <>
            <script
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(articleJsonLdSchema).replaceAll('<', '\\u003c'),
                }}
                id="jsonld-article"
                type="application/ld+json"
            />
            <script
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(creativeWorkSeriesSchema).replaceAll('<', '\\u003c'),
                }}
                id="jsonld-creative-work-series"
                type="application/ld+json"
            />
            <GenerateJsonLd faqData={data.Faq} seo={data.Seo} />
            <Breadcrumbs activePage={data.Name} pages={[{ href: '/glossary', name: 'Glossary' }]} />
            <PostHero publishedAt={formatDate(data.publishedAt)} title={data.Name} />
            <PostContent data={data} />
            <section className="container mx-auto flex flex-col gap-5 py-12 md:gap-4 md:py-[60px]">
                <h3 className="border-b border-primary-200 pb-3 text-xl font-medium md:text-2xl">Related Terms</h3>
                <div className="flex flex-col flex-wrap gap-6 md:flex-row">
                    {data.relatedGlossaries.map((item) => {
                        if (!item) return null
                        return (
                            <Link
                                className={`
                                  text-base leading-[26px] text-primary-200 underline transition-colors
                                  hover:text-primary-200
                                `}
                                href={`/glossary/${item.Slug}`}
                                key={item.Slug}
                            >
                                {item.Name}
                            </Link>
                        )
                    })}
                </div>
            </section>
            {data.Faq && <Faq data={data.Faq} />}
            <section className="mx-auto w-full max-w-[1060px] px-4">
                <Link className="flex items-center gap-2.5 px-3 py-2.5" href="/glossary/">
                    <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="m7.825 13 5.6 5.6L12 20l-8-8 8-8 1.425 1.4-5.6 5.6H20v2H7.825Z" fill="#005841" />
                    </svg>
                    <span className="font-semibold text-[#005841]">Back to Glossary Page</span>
                </Link>
            </section>
            <HelpCentreCta
                buttonText="Help Centre"
                buttonUrl={`https://help.cashflowfrog.com/en`}
                description="Visit our help center to find answers to your questions about CashFlowFrog."
                text="Looking for more help?"
            />
            <Cta backgroundColor="primary-50" />
        </>
    )
}
