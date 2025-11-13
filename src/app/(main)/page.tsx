import { cache } from 'react'

import { Benefits } from '@/components/blocks/benefits'
import { BlockWithImage } from '@/components/blocks/block-with-image'
import { Cta } from '@/components/blocks/cta'
import Features from '@/components/blocks/features'
import { HeroWithLottie } from '@/components/blocks/hero-with-lottie'
import { Integrations } from '@/components/blocks/integrations'
import { NewsletterCta } from '@/components/blocks/newsletter-cta'
import { Rating } from '@/components/blocks/rating'
import { Reviews } from '@/components/blocks/reviews'
import { GenerateJsonLd } from '@/components/shared/generate-jsonld'
import { generateSeo } from '@/components/shared/generate-seo'
import { api } from '@/lib/api'

const getData = cache(() => api.GetHomePage())

export const revalidate = 3600

export async function generateMetadata() {
    const { home: data } = await getData()
    return generateSeo({ pathname: '/', seo: data?.Seo })
}

export default async function Home() {
    const { benefits, home: data } = await getData()
    return (
        <>
            <GenerateJsonLd seo={data?.Seo} showJsonLdOrganization={true} showJsonLdWebpage={false} />
            <HeroWithLottie description={data?.HeroDescription} title={data?.HeroTitle} />
            <Rating />
            <Integrations />
            <BlockWithImage data={data?.Ladder} />
            <Features
                Description={data?.Features?.Description}
                Items={data?.Features?.Items ?? []}
                Title={data?.Features?.Title}
            />
            <BlockWithImage data={data?.Ladder2} />
            <BlockWithImage data={data?.Ladder3} />
            <Benefits
                data={benefits.map(
                    (benefit) =>
                        benefit && {
                            description: benefit.Description ?? '',
                            imageAlt: benefit.ImageFile?.alternativeText ?? '',
                            imageSrc: benefit.ImageFile?.url ?? '',
                            title: benefit.Name ?? '',
                        },
                )}
            />
            <NewsletterCta />
            <Reviews />
            <Cta />
        </>
    )
}
