import Image from 'next/image'
import Link from 'next/link'

import { LadderFragmentFragment } from '@/graphql/generated/sdk'
import { cn } from '@/lib/utils'

import { Button } from '../ui/button'

interface BlockWithImageProps {
    data?: LadderFragmentFragment | null
}

export function BlockWithImage({ data }: BlockWithImageProps) {
    const { Description, ImageFile, Link: url, reverse, Title } = data ?? {}
    return (
        <section className="relative py-16">
            <div
                className={cn('container mx-auto flex flex-col items-center gap-5 lg:flex-row', {
                    'lg:flex-row-reverse': reverse,
                })}
            >
                {ImageFile?.url && (
                    <Image
                        alt={ImageFile.alternativeText ?? Title ?? ''}
                        className="w-[488px] shrink-0"
                        height={331}
                        src={ImageFile.url}
                        width={488}
                    />
                )}
                <div className="flex flex-col items-start gap-5 lg:px-8">
                    <h3 className="text-xl leading-[140%] font-semibold lg:text-2xl">{Title}</h3>
                    <p className="leading-[160%] text-text-light">{Description}</p>
                    {url && (
                        <Button asChild className="mt-7">
                            <Link href={url}>Start Free</Link>
                        </Button>
                    )}
                </div>
            </div>
        </section>
    )
}
