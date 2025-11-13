import Image from 'next/image'

import { BlurCircle } from '@/components/shared/blur-circle'
import { formatDate } from '@/lib/utils'

interface PostHeroProps {
    authorImageAlt?: null | string
    authorImageUrl?: null | string
    authorName?: null | string
    publishedAt: null | string
    title: string
}

export function PostHero({ authorImageAlt, authorImageUrl, authorName, publishedAt, title }: PostHeroProps) {
    return (
        <section className={`relative pt-12 pb-6`}>
            <BlurCircle color="blue" left={-378} size={591} top={-70} />
            <div className="relative z-10 container mx-auto flex flex-col items-center justify-center text-center">
                <span className="mb-0.5 leading-[140%]">{formatDate(publishedAt)}</span>
                <h1 className="mb-5 text-[30px] leading-[100%] font-bold lg:text-[48px] lg:font-semibold">{title}</h1>
                <div className="flex items-center gap-4">
                    {authorImageUrl && (
                        <Image
                            alt={authorImageAlt ?? 'Author Image'}
                            className="size-10 overflow-hidden rounded-full"
                            height={40}
                            src={authorImageUrl}
                            width={40}
                        />
                    )}
                    <span className="leading-[140%]">{authorName}</span>
                </div>
            </div>
        </section>
    )
}
