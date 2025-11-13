import Link from 'next/link'

import { Cta } from '@/components/blocks/cta'
import { GenerateJsonLd } from '@/components/shared/generate-jsonld'
import { generateSeo } from '@/components/shared/generate-seo'
import { api } from '@/lib/api'

import { GlossaryHero } from './_components/glossary-hero'
import { HelpCentreCta } from './_components/help-centre-cta'

export const revalidate = 3600

export function generateMetadata() {
    return generateSeo({ pathname: '/glossary', seo: { MetaDescription: 'Glossary of terms', MetaTitle: 'Glossary' } })
}

export default async function GlossaryPage() {
    const { glossaries: data } = await api.GetGlossaryPage()

    const groupedByAlphabet = data.reduce<Record<string, { Name: string; Slug: string }[]>>((acc, item) => {
        const firstLetter = item?.Name.charAt(0).toUpperCase() ?? ''
        acc[firstLetter] ??= []
        acc[firstLetter].push({
            Name: item?.Name ?? '',
            Slug: item?.Slug ?? '',
        })
        return acc
    }, {})

    return (
        <>
            <GenerateJsonLd />
            <GlossaryHero data={groupedByAlphabet} />
            <section className="container mx-auto flex flex-col gap-10 py-12 md:gap-16 md:py-[60px]">
                <p className="text-center text-xl md:text-2xl">Click the term to view its definition</p>
                <div className="grid gap-x-9 gap-y-10 md:grid-cols-3 md:gap-y-16">
                    {Object.entries(groupedByAlphabet)
                        .toSorted(([a], [b]) => a.localeCompare(b))
                        .map(([letter, items]) => (
                            <div className="flex flex-col gap-5" id={letter} key={letter}>
                                <h2 className="border-b border-primary-200 pb-3 text-[46px] leading-[60px] font-medium">
                                    {letter}
                                </h2>
                                <div className="flex flex-col gap-6">
                                    {items
                                        .toSorted((a, b) => a.Name.localeCompare(b.Name))
                                        .map((item) => (
                                            <Link
                                                className={`
                                                  text-base leading-[26px] underline transition-colors
                                                  hover:text-primary-200
                                                `}
                                                href={`/glossary/${item.Slug}`}
                                                key={item.Slug}
                                            >
                                                {item.Name}
                                            </Link>
                                        ))}
                                </div>
                            </div>
                        ))}
                </div>
            </section>
            <HelpCentreCta
                buttonText="Help Centre"
                buttonUrl={`https://help.cashflowfrog.com/en`}
                description="Visit our help center to find answers to your questions about CashFlowFrog."
                text="Looking for more help?"
            />
            <Cta backgroundColor="primary-50" />
        </>
    )
}
