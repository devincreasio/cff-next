import Markdown from 'markdown-to-jsx'
import { notFound } from 'next/navigation'

import { Cta } from '@/components/blocks/cta'
import { Faq } from '@/components/blocks/faq'
import { BlurCircle } from '@/components/shared/blur-circle'
import { GenerateJsonLd } from '@/components/shared/generate-jsonld'
import { generateSeo } from '@/components/shared/generate-seo'
import { api } from '@/lib/api'

const getData = (slug: string) => api.GetLegalPageTemplate({ slug })

export const revalidate = 3600

interface LegalPageTemplateProps {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: LegalPageTemplateProps) {
    const { slug } = await params
    const { legalPages } = await getData(slug)
    const [data] = legalPages

    return generateSeo({ pathname: `/${slug}`, seo: data?.SEO })
}

export async function generateStaticParams() {
    const { legalPages } = await api.GetLegalPageTemplateSlugs()
    return legalPages.map((legalPage) => {
        if (!legalPage?.Slug) return null
        return {
            slug: legalPage.Slug,
        }
    })
}

export default async function LegalPageTemplate({ params }: LegalPageTemplateProps) {
    const { slug } = await params
    const { legalPages } = await getData(slug)
    const [data] = legalPages

    if (!data) {
        notFound()
    }
    return (
        <>
            <GenerateJsonLd faqData={data.Faq} seo={data.SEO} />
            <section className={`relative pt-12 pb-6`}>
                <BlurCircle color="blue" left={-378} size={591} top={-70} />
                <div
                    className={`relative z-10 container mx-auto flex flex-col items-center justify-center text-center`}
                >
                    <h1 className={`mb-5 text-[30px] leading-[100%] font-bold lg:text-[48px] lg:font-semibold`}>
                        {data.Name}
                    </h1>
                </div>
            </section>
            <section className="container mx-auto prose py-12">
                <Markdown>{data.content}</Markdown>
            </section>
            <Faq data={data.Faq ?? []} />
            <Cta backgroundColor="primary-50" />
        </>
    )
}
