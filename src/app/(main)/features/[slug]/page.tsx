import { notFound } from 'next/navigation'
import { Fragment } from 'react'

import { Answers } from '@/components/blocks/answers'
import { BlockWithImage } from '@/components/blocks/block-with-image'
import { Cta } from '@/components/blocks/cta'
import { Faq } from '@/components/blocks/faq'
import { Hero } from '@/components/blocks/hero'
import SingleReview from '@/components/blocks/single-review'
import { Breadcrumbs } from '@/components/shared/breadcrumbs'
import { GenerateJsonLd } from '@/components/shared/generate-jsonld'
import { generateSeo } from '@/components/shared/generate-seo'
import { Button } from '@/components/ui/button'
import { ACCOUNTS_URL } from '@/constants'
import { api } from '@/lib/api'

const getData = (slug: string) => api.GetFeaturesTemplate({ slug })

export const revalidate = 3600

interface FeaturePageProps {
    params: Promise<{ slug: string }>
}

export default async function FeaturePage({ params }: FeaturePageProps) {
    const { slug } = await params
    const { features } = await getData(slug)
    const [data] = features

    if (!data) {
        notFound()
    }
    return (
        <>
            <GenerateJsonLd faqData={data.Faq} seo={data.Seo} />
            <Breadcrumbs activePage={data.Name ?? ''} pages={[{ href: '/features', name: 'Features' }]} />
            <Hero
                buttonText={`Get your ${data.Name}`}
                description={data.SingleDescription}
                imageAlt={data.SingleImageFile?.alternativeText}
                imageUrl={data.SingleImageFile?.url}
                title={data.SingleTitle}
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
            <Answers
                answers={data.Answers?.map((answer) => answer?.AnswerTitle ?? '') ?? []}
                description={data.AnswersDescription}
                info={data.AnswersInfo}
                title={data.AnswersTitle}
            />
            <Faq data={data.Faq ?? []} />
            <Cta
                backgroundColor="primary-50"
                buttonText="Start free trial now"
                title={`Get your ${data.Name} in seconds`}
            />
        </>
    )
}

export async function generateMetadata({ params }: FeaturePageProps) {
    const { slug } = await params
    const { features } = await getData(slug)
    const [data] = features

    return generateSeo({ pathname: `/features/${slug}`, seo: data?.Seo })
}

export async function generateStaticParams() {
    const { features } = await api.GetFeaturesTemplateSlugs()
    return features.map((feature) => {
        if (!feature?.Slug) return null
        return {
            slug: feature.Slug,
        }
    })
}
