import { cache } from 'react'

import { BlockWithImage } from '@/components/blocks/block-with-image'
import { Cta } from '@/components/blocks/cta'
import { Faq } from '@/components/blocks/faq'
import { Hero } from '@/components/blocks/hero'
import IntegrationsCards from '@/components/blocks/integrations-cards'
import SingleReview from '@/components/blocks/single-review'
import { Breadcrumbs } from '@/components/shared/breadcrumbs'
import { GenerateJsonLd } from '@/components/shared/generate-jsonld'
import { generateSeo } from '@/components/shared/generate-seo'
import { ACCOUNTS_URL } from '@/constants'
import { api } from '@/lib/api'

const getData = cache(() => api.GetIntegrationPage())

export const revalidate = 3600

export async function generateMetadata() {
    const { integrationsPage: data } = await getData()
    return generateSeo({ pathname: '/integrations', seo: data?.Seo })
}

export default async function IntegrationsPage() {
    const { integrations, integrationsPage: data } = await getData()

    return (
        <>
            <GenerateJsonLd faqData={data?.Faq} seo={data?.Seo} />
            <Breadcrumbs activePage="Integrations" />
            <Hero
                description={data?.Description}
                imageAlt={data?.HeroImageFile?.alternativeText}
                imageUrl={data?.HeroImageFile?.url}
                title={data?.Title}
            />
            {data?.Ladder?.map((item) => (
                <BlockWithImage data={item} key={item?.Title} />
            ))}
            <SingleReview />
            <IntegrationsCards
                description={data?.IntegrationDescription}
                integrations={integrations}
                title={data?.IntegrationTitle}
            />
            <Faq data={data?.Faq ?? []} />
            <Cta
                backgroundColor="primary-50"
                buttonLink={`${ACCOUNTS_URL}/signup?action=signup&section=cta&page=features`}
            />
        </>
    )
}
