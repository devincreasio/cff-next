import { cache } from 'react'

import { Cta } from '@/components/blocks/cta'
import Faq from '@/components/blocks/faq'
import { Hero } from '@/components/blocks/hero'
import PricingSelector from '@/components/blocks/pricing-selector'
import PricingTable from '@/components/blocks/pricing-table'
import { Rating } from '@/components/blocks/rating'
import { Reviews } from '@/components/blocks/reviews'
import { GenerateJsonLd } from '@/components/shared/generate-jsonld'
import { generateSeo } from '@/components/shared/generate-seo'
import { api } from '@/lib/api'

const getData = cache(() => api.GetPricingPage())

export async function generateMetadata() {
    const { pricingPage: data } = await getData()
    return generateSeo({ pathname: '/pricing', seo: data?.Seo })
}

export default async function PricingPage() {
    const { pricingPage: data } = await getData()
    return (
        <>
            <GenerateJsonLd faqData={data?.PricingFaq} seo={data?.Seo} />
            <Hero
                description={data?.Description}
                imageAlt={data?.HeroImageFile?.alternativeText}
                imageUrl={data?.HeroImageFile?.url}
                title={data?.Title}
            />
            <Rating />
            <PricingSelector />
            <PricingTable />
            <Reviews backgroundColor="white" />
            <Faq data={data?.PricingFaq ?? []} />
            <Cta
                backgroundColor="primary-50"
                buttonText="Start free trial now"
                title="Trusted by thousands of business owners"
            />
        </>
    )
}
