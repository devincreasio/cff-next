import { notFound } from 'next/navigation'

import { BlockWithImage } from '@/components/blocks/block-with-image'
import { Cta } from '@/components/blocks/cta'
import { Faq } from '@/components/blocks/faq'
import PricingSelector from '@/components/blocks/pricing-selector'
import PricingTable from '@/components/blocks/pricing-table'
import { Rating } from '@/components/blocks/rating'
import { Reviews } from '@/components/blocks/reviews'
import { Footer } from '@/components/layout/footer'
import { GenerateJsonLd } from '@/components/shared/generate-jsonld'
import { generateSeo } from '@/components/shared/generate-seo'
import { api } from '@/lib/api'

import { LandingHero } from '../_components/landing-hero'
import { LoginModal } from '../_components/login-modal'

const getData = (slug: string) => api.GetLandingPageTemplate({ slug })

export const revalidate = 3600

interface LandingPageTemplateProps {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: LandingPageTemplateProps) {
    const { slug } = await params
    const { landings } = await getData(slug)
    const [data] = landings

    return generateSeo({ noFollow: true, noIndex: true, pathname: `/lp/${slug}`, seo: data?.Seo })
}

export default async function LandingPageTemplate({ params }: LandingPageTemplateProps) {
    const { slug } = await params
    const { landings } = await getData(slug)
    const [data] = landings

    if (!data) {
        notFound()
    }

    return (
        <>
            <GenerateJsonLd faqData={data.Faq} seo={data.Seo} />
            <LandingHero
                customButtonText={data.customButtonText}
                description={data.Description}
                heroImageAlt={data.HeroImageFile?.alternativeText}
                heroImageUrl={data.HeroImageFile?.url}
                subTitle={data.SubTitle}
                title={data.Title}
            />
            <Rating />
            {data.Ladder?.map((section, index) => (
                <BlockWithImage data={section} key={index} />
            ))}
            {data.showPrice && (
                <>
                    <PricingSelector onlyPro={data.Slug === 'cash-flow-forecasting-for-accountants'} />
                    <PricingTable onlyPro={data.Slug === 'cash-flow-forecasting-for-accountants'} />
                </>
            )}
            {data.Faq && <Faq data={data.Faq} />}
            <Reviews />
            <Cta />
            {data.showFooter && <Footer hideMenu />}
            <LoginModal />
        </>
    )
}
