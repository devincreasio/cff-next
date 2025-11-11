import { cache, Fragment } from 'react'

import { BlockWithImage } from '@/components/blocks/block-with-image'
import { Cta } from '@/components/blocks/cta'
import { Hero } from '@/components/blocks/hero'
import { Integrations } from '@/components/blocks/integrations'
import PricingSelector from '@/components/blocks/pricing-selector'
import PricingTable from '@/components/blocks/pricing-table'
import { Rating } from '@/components/blocks/rating'
import { Reviews } from '@/components/blocks/reviews'
import { GenerateJsonLd } from '@/components/shared/generate-jsonld'
import { generateSeo } from '@/components/shared/generate-seo'
import { Button } from '@/components/ui/button'
import { ACCOUNTS_URL } from '@/constants'
import { api } from '@/lib/api'

const getData = cache(() => api.GetAccountantsAndBookkeepers())

export default async function AccountantsBookkeepersPage() {
    const { accountantsAndBookkeeper: data } = await getData()
    return (
        <>
            <GenerateJsonLd faqData={data?.Faq} seo={data?.Seo} />
            <Hero
                buttonSlot={
                    <Button asChild variant="outline">
                        <a
                            href={`${ACCOUNTS_URL}/signup?action=demo&section=hero&page=AccountantsAndBookkeepers`}
                            rel="noreferrer"
                            target="_blank"
                        >
                            Book a Demo
                        </a>
                    </Button>
                }
                description={data?.Description}
                imageAlt={data?.HeroImageFile?.alternativeText}
                imageUrl={data?.HeroImageFile?.url}
                title={data?.Title}
            />
            <Rating />
            {data?.AccountantsList?.map((ladderItem, index) => (
                <Fragment key={ladderItem?.Title ?? index}>
                    {index === 5 && (
                        <>
                            <div className="mb-[90px] flex items-center justify-center">
                                <Button asChild>
                                    <a
                                        href={`${ACCOUNTS_URL}/signup?action=signup&section=content&page=AccountantsAndBookkeepers`}
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        Start Free trial now
                                    </a>
                                </Button>
                            </div>
                            <Integrations backgroundColor="primary-50" />
                        </>
                    )}
                    <BlockWithImage data={ladderItem} key={ladderItem?.Title} />
                </Fragment>
            ))}
            <PricingSelector onlyPro />
            <PricingTable onlyPro />
            <Reviews backgroundColor="white" />
            <Cta
                backgroundColor="primary-50"
                buttonText="Start Free Trial Now"
                title="Trusted by thousands of business owners"
            />
        </>
    )
}

export async function generateMetadata() {
    const { accountantsAndBookkeeper: data } = await getData()
    return generateSeo({ pathname: '/accountants-bookkeepers', seo: data?.Seo })
}
