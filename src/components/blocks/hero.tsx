'use client'

import Markdown from 'markdown-to-jsx'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import { BlurCircle } from '@/components/shared/blur-circle'
import { Button } from '@/components/ui/button'
import { ACCOUNTS_URL } from '@/constants'

interface HeroProps {
    buttonSlot?: React.ReactNode
    buttonText?: string
    description?: null | string
    imageAlt?: null | string
    imageUrl?: null | string
    title?: null | string
}

export function Hero({ buttonSlot, buttonText = 'Start free', description, imageAlt, imageUrl, title }: HeroProps) {
    const pathname = usePathname()
    const page = pathname === '/' ? 'home' : pathname.replace('/', '').replaceAll('/', '-')

    return (
        <section className="relative pt-6 pb-10 lg:pt-20 lg:pb-28">
            <BlurCircle color="blue" left={-254} size={591} top={-100} />
            <BlurCircle color="green" left={-208} size={500} top={264} />
            <BlurCircle color="green" right={252} size={500} top={0} />
            <BlurCircle color="blue" right={-367} size={591} top={233} />
            <BlurCircle color="blue" right={45} size={591} top={281} />
            <div className="relative z-10 container mx-auto grid place-items-center gap-8 lg:grid-cols-2 lg:gap-6">
                <div className="flex shrink-0 flex-col items-start gap-8 lg:gap-10">
                    <div className="flex w-full flex-col gap-6">
                        <h1 className={`text-[34px] leading-[120%] font-bold text-balance lg:text-3.5xl`}>{title}</h1>
                        <div className={`prose max-w-none leading-[160%]`}>
                            <Markdown>{description}</Markdown>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-5">
                        <Button asChild className="w-full lg:w-auto" variant="default">
                            <a
                                href={`${ACCOUNTS_URL}/signup?action=signup&section=hero&page=${page}`}
                                rel="noreferrer"
                                target="_blank"
                            >
                                {buttonText}
                            </a>
                        </Button>
                        {buttonSlot}
                    </div>
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
