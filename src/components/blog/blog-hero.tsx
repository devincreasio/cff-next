import Markdown from 'markdown-to-jsx'
import Image from 'next/image'

import { BlurCircle } from '@/components/shared/blur-circle'
import { PostFragmentFragment } from '@/graphql/generated/sdk'
import { formatDate } from '@/lib/utils'

interface BlogHeroProps {
    post?: null | PostFragmentFragment
    title: string
}

export function BlogHero({ post, title }: BlogHeroProps) {
    return (
        <section className="relative flex flex-col">
            <BlurCircle color="blue" left={-254} size={590} top={-38} />
            <BlurCircle bottom={-147} color="green" left={-208} size={500} />
            <BlurCircle color="blue" right={-367} size={591} top={295} />
            <BlurCircle bottom={-255} color="blue" right={45} size={591} />
            <BlurCircle bottom={117} color="green" right={252} size={500} />
            <div className="relative z-10 container mx-auto hidden py-3 text-center lg:block">
                <h1 className="text-[32px] font-semibold">{title}</h1>
            </div>
            {post && (
                <div className="relative z-10 container mx-auto pb-10 lg:pb-[120px]">
                    <div
                        className={`
                          flex flex-col items-center justify-center gap-8 rounded-xl bg-white px-4 pt-6 pb-10
                          lg:flex-row lg:gap-16 lg:p-12
                        `}
                    >
                        <div className="flex w-full max-w-[420px] flex-col">
                            <span className="mb-2 text-sm text-neutral-600">{formatDate(post.updatedAt)}</span>
                            <h2 className="mb-5 text-[30px] leading-[120%] font-semibold lg:mb-6 lg:text-[48px]">
                                {post.Title}
                            </h2>
                            <div className="mb-8 line-clamp-4 text-neutral-600 lg:mb-11">
                                <Markdown
                                    options={{
                                        disableParsingRawHTML: true,
                                    }}
                                >
                                    {post.Content}
                                </Markdown>
                            </div>
                        </div>
                        {post.ImageFile?.url && (
                            <Image
                                alt={post.ImageFile.alternativeText ?? ''}
                                height={388}
                                src={post.ImageFile.url}
                                width={500}
                            />
                        )}
                    </div>
                </div>
            )}
        </section>
    )
}
