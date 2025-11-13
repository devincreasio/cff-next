'use client'

import Markdown from 'markdown-to-jsx'
import Image from 'next/image'

import { Button } from '@/components/ui/button'

import { useModalStore } from '../_store'

interface LandingHeroProps {
    customButtonText?: null | string
    description?: null | string
    heroImageAlt?: null | string
    heroImageUrl?: null | string
    subTitle?: null | string
    title?: null | string
}

export function LandingHero({
    customButtonText,
    description,
    heroImageAlt,
    heroImageUrl,
    subTitle,
    title,
}: LandingHeroProps) {
    const { setModalOpen } = useModalStore()

    return (
        <div className={`mx-auto grid max-w-[1264px] place-items-center gap-8 px-4 py-10 md:grid-cols-2 md:py-[120px]`}>
            <div className="flex flex-col items-center justify-center text-center md:items-start md:text-left">
                <div className="mb-8 flex flex-col gap-3 md:gap-4">
                    <h1
                        className={`text-[34px] leading-[115%] font-bold text-brown-background uppercase md:text-[41px]`}
                    >
                        {title}
                    </h1>
                    <h2
                        className={`text-[26px] leading-[120%] font-semibold text-primary-100 uppercase md:text-[36px]`}
                    >
                        {subTitle}
                    </h2>
                    <Markdown className="prose text-brown-background">{description}</Markdown>
                </div>
                <Button
                    className="mb-6"
                    onClick={() => {
                        setModalOpen(true)
                    }}
                >
                    {customButtonText ?? 'Start free'}
                </Button>
                <div className="flex items-center gap-3">
                    <svg fill="none" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M21.432 47.92C10.347 46.72 1.572 38.065.14 26.919c-.166-1.29-.166-4.516 0-5.808 1.047-8.15 5.91-15 13.232-18.634 5.807-2.883 12.827-3.27 18.884-1.042 7.725 2.842 13.451 9.42 15.243 17.512.653 2.946.653 7.19 0 10.137-1.599 7.222-6.328 13.277-12.864 16.47-2.325 1.137-4.21 1.744-6.762 2.178-1.48.252-4.928.354-6.441.19Zm1.478-21.635v-11.88l-3.22-.04c-3.691-.04-4.79.056-6.206.527-3.104 1.03-5.394 3.493-6.212 6.685-.332 1.296-.38 3.236-.11 4.461.732 3.311 3.103 5.966 6.33 7.085.972.336 1.211.376 2.475.419l1.4.044V30.21l-1.083-.052c-1.721-.084-2.931-.62-4.146-1.837-1.468-1.471-2.049-3.586-1.585-5.772.371-1.754 1.585-3.285 3.223-4.064 1.205-.573 1.699-.657 3.86-.657h1.842v10.12c0 5.565.033 10.152.073 10.192.04.04.813.06 1.716.044l1.643-.04v-11.88.02Zm9.98 7.173c3.293-.534 6.17-2.76 7.354-5.693.547-1.355.7-2.173.708-3.803.007-1.278-.031-1.679-.231-2.422-.76-2.821-2.61-5.056-5.205-6.288-1.26-.599-2.099-.8-3.606-.87l-1.35-.06.03 1.732.03 1.731 1.213.064c1.308.068 1.812.208 2.683.743 1.29.79 2.254 1.932 2.73 3.232.307.838.38 2.778.14 3.731a5.907 5.907 0 0 1-3.13 3.888c-1.149.569-2.117.741-4.191.746l-1.61.004V9.813H24.97v23.759l3.616-.001c2.024 0 3.92-.049 4.303-.113Z"
                            fill="#252525"
                        />
                    </svg>
                    <div className="flex flex-col">
                        <div className="flex items-center gap-1.5">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <svg
                                    fill="none"
                                    height="15"
                                    key={index}
                                    viewBox="0 0 16 15"
                                    width="16"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="m7.998 11.892 3.458 2.091a.831.831 0 0 0 1.242-.9l-.917-3.933L14.84 6.5c.558-.483.258-1.4-.475-1.458L10.34 4.7 8.765.983C8.48.308 7.515.308 7.23.983L5.656 4.692l-4.025.341c-.733.059-1.033.975-.475 1.459l3.059 2.65-.917 3.933a.831.831 0 0 0 1.242.9l3.458-2.083Z"
                                        fill="#252525"
                                    />
                                </svg>
                            ))}
                        </div>
                        <span className="text-lg leading-[160%]">+150 REVIEWS</span>
                    </div>
                </div>
            </div>
            {heroImageUrl && (
                <Image
                    alt={heroImageAlt ?? ''}
                    className="h-auto overflow-hidden rounded-xl object-contain"
                    height={100}
                    src={heroImageUrl}
                    style={{
                        boxShadow: '0px 14px 64px -4px #18274B1F,-8px 8px 22px -6px #6363631F',
                    }}
                    width={600}
                />
            )}
        </div>
    )
}
