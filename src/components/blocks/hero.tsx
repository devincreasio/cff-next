'use client'

import Markdown from 'markdown-to-jsx'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import { Button } from '@/components/ui/button'

import { BlurCircle } from '../shared/blur-circle'

interface HeroProps {
    description?: null | string
    imageAlt?: null | string
    imageUrl?: null | string
    title?: null | string
}

export function Hero({ description, imageAlt, imageUrl, title }: HeroProps) {
    const pathname = usePathname()

    return (
        <section className="relative pt-6 pb-10 lg:pt-20 lg:pb-28">
            <BlurCircle color="blue" left={-254} size={591} top={-100} />
            <BlurCircle color="green" left={-208} size={500} top={264} />
            <BlurCircle color="green" right={252} size={500} top={0} />
            <BlurCircle color="blue" right={-367} size={591} top={233} />
            <BlurCircle color="blue" right={45} size={591} top={281} />
            <div className="relative z-10 container mx-auto grid gap-8 lg:grid-cols-2 lg:gap-6">
                <div className="flex shrink-0 flex-col items-start gap-8 lg:gap-10">
                    <div className="flex w-full max-w-[431px] flex-col gap-6">
                        <h1 className={`text-[34px] leading-[120%] font-bold text-balance lg:text-3.5xl`}>{title}</h1>
                        <div className={`prose leading-[160%] font-medium text-neutral-600 lg:text-xl`}>
                            <Markdown>{description}</Markdown>
                        </div>
                    </div>
                    <Button asChild className="w-full lg:w-auto" variant="default">
                        <a
                            href={`https://accounts.cashflowfrog.com/signup?action=signup&section=hero&page=${pathname}`}
                            rel="noreferrer"
                            target="_blank"
                        >
                            Start Free
                        </a>
                    </Button>
                </div>
                {imageUrl && (
                    <Image
                        alt={imageAlt ?? 'Hero Image'}
                        className="pointer-events-none object-contain select-none"
                        height={400}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        src={imageUrl}
                        width={600}
                    />
                )}
            </div>
        </section>
    )
}
