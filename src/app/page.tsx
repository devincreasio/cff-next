import { Benefits } from '@/components/blocks/benefits'
import { BlockWithImage } from '@/components/blocks/block-with-image'
import { Cta } from '@/components/blocks/cta'
import Features from '@/components/blocks/features'
import { HeroWithLottie } from '@/components/blocks/hero-with-lottie'
import { Integrations } from '@/components/blocks/integrations'
import { NewsletterCta } from '@/components/blocks/newsletter-cta'
import { Rating } from '@/components/blocks/rating'
import { Reviews } from '@/components/blocks/reviews'
import { api } from '@/lib/api'

export default async function Home() {
    const { benefits, home: data } = await api.GetHomePage()
    return (
        <>
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
            <Cta buttonText="Start free trial now" title="Trusted by thousands of business owners" />
        </>
    )
}
