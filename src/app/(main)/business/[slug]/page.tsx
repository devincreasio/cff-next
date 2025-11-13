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

const getData = (slug: string) => api.GetBusinessTemplate({ slug })

export const revalidate = 3600

interface BusinessPageProps {
    params: Promise<{ slug: string }>
}

export default async function BusinessPage({ params }: BusinessPageProps) {
    const { slug } = await params
    const { businesses } = await getData(slug)
    const [data] = businesses

    if (!data) {
        notFound()
    }
    return (
        <>
            <GenerateJsonLd faqData={data.Faq} seo={data.Seo} />
            <Breadcrumbs activePage={data.Name ?? ''} />
            <Hero
                buttonText={`Get your ${data.Name}`}
                description={data.Description}
                imageAlt={data.HeroImageFile?.alternativeText}
                imageUrl={data.HeroImageFile?.url}
                title={data.Title}
            />
            {data.Ladder?.map((ladderItem, index) => (
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
            <Cta
                backgroundColor="primary-50"
                buttonLink={`${ACCOUNTS_URL}/signup?action=signup&section=cta&page=${data.Name}`}
                buttonText="Start free"
                title={`Get more out of ${data.Name}`}
            />
        </>
    )
}

export async function generateMetadata({ params }: BusinessPageProps) {
    const { slug } = await params
    const { businesses } = await getData(slug)
    const [data] = businesses

    return generateSeo({ pathname: `/business/${slug}`, seo: data?.Seo })
}

export async function generateStaticParams() {
    const { businesses } = await api.GetBusinessTemplateSlugs()
    return businesses.map((business) => {
        if (!business?.Slug) return null
        return {
            slug: business.Slug,
        }
    })
}
