import { notFound } from 'next/navigation'
import { Fragment } from 'react'

import { BlockWithImage } from '@/components/blocks/block-with-image'
import { Cta } from '@/components/blocks/cta'
import { Faq } from '@/components/blocks/faq'
import { Hero } from '@/components/blocks/hero'
import { Reviews } from '@/components/blocks/reviews'
import SingleReview from '@/components/blocks/single-review'
import { Breadcrumbs } from '@/components/shared/breadcrumbs'
import { GenerateJsonLd } from '@/components/shared/generate-jsonld'
import { generateSeo } from '@/components/shared/generate-seo'
import { Button } from '@/components/ui/button'
import { ACCOUNTS_URL } from '@/constants'
import { api } from '@/lib/api'

const getData = (slug: string) => api.GetIntegrationTemplate({ slug })

export const revalidate = 3600

interface IntegrationPageProps {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: IntegrationPageProps) {
    const { slug } = await params
    const { integrations } = await getData(slug)
    const [data] = integrations

    return generateSeo({ pathname: `/integrations/${slug}`, seo: data?.Seo })
}

export default async function IntegrationPage({ params }: IntegrationPageProps) {
    const { slug } = await params
    const { integrations } = await getData(slug)
    const [data] = integrations

    if (!data) {
        notFound()
    }
    return (
        <>
            <GenerateJsonLd faqData={data.Faq} seo={data.Seo} />
            <Breadcrumbs activePage={data.Name ?? ''} pages={[{ href: '/integrations', name: 'Integrations' }]} />
            <Hero
                buttonText={`Get your ${data.Name} — Start Free `}
                description={data.SingleDescription}
                imageAlt={data.SingleHeroFile?.alternativeText}
                imageUrl={data.SingleHeroFile?.url}
                title={data.SingleTitle}
            />
            {data.SingleLadder?.map((ladderItem, index) => (
                <Fragment key={ladderItem?.Title ?? index}>
                    {index === 2 && (
                        <>
                            <div className="mb-[90px] flex items-center justify-center">
                                <Button asChild>
                                    <a
                                        href={`${ACCOUNTS_URL}/signup?action=signup&section=content&page=${data.Name}`}
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        Start Free
                                    </a>
                                </Button>
                            </div>
                            <SingleReview />
                        </>
                    )}
                    <BlockWithImage data={ladderItem} key={ladderItem?.Title} />
                </Fragment>
            ))}
            <div className="mb-[90px] flex items-center justify-center">
                <Button asChild>
                    <a
                        href={`${ACCOUNTS_URL}/signup?action=signup&section=content&page=${data.Name}`}
                        rel="noreferrer"
                        target="_blank"
                    >
                        Start Free
                    </a>
                </Button>
            </div>
            <Reviews />
            <Faq data={data.Faq ?? []} />
            <Cta backgroundColor="primary-50" buttonText="Start free" title={`Get more out of ${data.Name}`} />
        </>
    )
}
