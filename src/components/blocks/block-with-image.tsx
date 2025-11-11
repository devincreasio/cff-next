import Markdown from 'markdown-to-jsx'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { LadderFragmentFragment } from '@/graphql/generated/sdk'
import { cn } from '@/lib/utils'

interface BlockWithImageProps {
    data?: LadderFragmentFragment | null
}

export function BlockWithImage({ data }: BlockWithImageProps) {
    const { Description, IconFile, ImageFile, Link: url, reverse, Subtitle, Title } = data ?? {}
    return (
        <section className="relative pt-8 pb-10 lg:py-16">
            <div
                className={cn('container mx-auto flex flex-col-reverse items-center gap-8 lg:flex-row lg:gap-[110px]', {
                    'lg:flex-row-reverse': reverse,
                })}
            >
                {ImageFile?.url && (
                    <Image
                        alt={ImageFile.alternativeText ?? Title ?? ''}
                        className="w-[500px] shrink-0"
                        height={380}
                        src={ImageFile.url}
                        width={500}
                    />
                )}
                <div className="flex flex-col items-start lg:px-8">
                    <div className="mb-3 flex items-center gap-3">
                        {IconFile?.url && (
                            <Image
                                alt={IconFile.alternativeText ?? Title ?? ''}
                                className="size-4"
                                height={16}
                                src={IconFile.url}
                                width={16}
                            />
                        )}
                        {Subtitle && <span className="text-sm text-primary-300">{Subtitle}</span>}
                    </div>
                    <h3 className="mb-4 text-xl leading-[140%] font-semibold lg:text-2xl">{Title}</h3>
                    <div className="prose leading-[160%] prose-li:custom-list">
                        <Markdown>{Description}</Markdown>
                    </div>
                    {url && (
                        <Button asChild className="mt-12">
                            <Link href={url}>Start Free</Link>
                        </Button>
                    )}
                </div>
            </div>
        </section>
    )
}
