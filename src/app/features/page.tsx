import { cache } from 'react'
import { Fragment } from 'react/jsx-runtime'

import { BlockWithImage } from '@/components/blocks/block-with-image'
import { Cta } from '@/components/blocks/cta'
import Faq from '@/components/blocks/faq'
import { Hero } from '@/components/blocks/hero'
import { NewsletterCta } from '@/components/blocks/newsletter-cta'
import { Reviews } from '@/components/blocks/reviews'
import { Breadcrumbs } from '@/components/shared/breadcrumbs'
import { GenerateJsonLd } from '@/components/shared/generate-jsonld'
import { generateSeo } from '@/components/shared/generate-seo'
import { ACCOUNTS_URL } from '@/constants'
import { api } from '@/lib/api'

const getData = cache(() => api.GetFeaturesPage())

export default async function FeaturesPage() {
    const { features, featuresPage: data } = await getData()
    return (
        <>
            <GenerateJsonLd faqData={data?.Faq} seo={data?.Seo} />
            <Breadcrumbs activePage="Features" />
            <Hero
                description={data?.Description}
                imageAlt={data?.HeroImageFile?.alternativeText}
                imageUrl={data?.HeroImageFile?.url}
                title={data?.Title}
            />
            {features.map((feature, index) => (
                <Fragment key={feature?.Name}>
                    {index === 4 && <NewsletterCta />}
                    <BlockWithImage
                        data={{
                            Description: feature?.Description,
                            ImageFile: feature?.ImageFile,
                            reverse: index % 2 === 1,
                            Title: feature?.Title,
                        }}
                    />
                </Fragment>
            ))}
            <Reviews />
            <Faq data={data?.Faq ?? []} />
            <Cta
                backgroundColor="primary-50"
                buttonLink={`${ACCOUNTS_URL}/signup?action=signup&section=cta&page=features`}
                buttonText="Start free trial now"
                title="Trusted by thousands of business owners"
            />
        </>
    )
}

export async function generateMetadata() {
    const { featuresPage: data } = await getData()
    return generateSeo({ pathname: '/features', seo: data?.Seo })
}
