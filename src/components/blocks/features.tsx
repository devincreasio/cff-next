import Image from 'next/image'

import { BlurCircle } from '@/components/shared/blur-circle'
import { Button } from '@/components/ui/button'
import { ACCOUNTS_URL } from '@/constants'
import { cn } from '@/lib/utils'

interface FeaturesProps {
    Description?: null | string
    Items?: ({
        Description?: null | string
        features?: ({
            Description?: null | string
            ImageFile?: {
                alternativeText?: null | string
                url?: null | string
            } | null
            Link?: null | string
            Name?: null | string
            Slug?: null | string
        } | null)[]
        Image?: {
            alternativeText?: null | string
            url?: null | string
        } | null
        Title?: null | string
    } | null)[]
    Title?: null | string
}

export default function Features({ Description, Items, Title }: FeaturesProps) {
    return (
        <section className="relative py-16">
            <BlurCircle color="blue" right={-350} size={590} top={-175} />
            <BlurCircle color="blue" left={-258} size={590} top={300} />
            <BlurCircle className="z-20" color="green" left={-241} size={500} top={769} />
            <BlurCircle bottom={64} color="blue" right={-430} size={590} />
            <BlurCircle bottom={-325} className="opacity-20" color="blue" right={-120} size={590} />
            <div className="relative z-10 flex flex-col gap-3">
                <div className="container mx-auto flex flex-col items-center justify-center gap-4 text-center">
                    <h3 className="text-[28px] font-semibold lg:text-[40px]">{Title}</h3>
                    <p className="leading-[160%] font-medium text-neutral-600 lg:text-xl">{Description}</p>
                </div>
                {Items?.map((item, index) => (
                    <div
                        className={cn('pt-8 pb-10 lg:pt-[100px] lg:pb-[120px]', {
                            'bg-primary-50': index % 2 !== 0,
                        })}
                        key={item?.Title}
                    >
                        <div className="container mx-auto flex flex-col items-center gap-5 lg:flex-row lg:gap-16">
                            <div className="flex flex-col gap-6 lg:gap-12">
                                <div className="flex flex-col gap-2">
                                    <p className="text-2xl font-semibold text-primary-200 lg:text-[32px]">
                                        {item?.Title}
                                    </p>
                                    <p className="leading-[140%] font-semibold text-neutral-600">{item?.Description}</p>
                                </div>
                                <div className="flex flex-col gap-6 divide-y divide-primary-100/40">
                                    {item?.features?.map((feature) => (
                                        <div className="flex items-start gap-4 pb-3" key={feature?.Name}>
                                            {feature?.ImageFile?.url && (
                                                <Image
                                                    alt={feature.ImageFile.alternativeText ?? ''}
                                                    className="size-9 shrink-0 object-contain"
                                                    height={36}
                                                    src={feature.ImageFile.url}
                                                    width={36}
                                                />
                                            )}
                                            <div className="flex flex-col gap-3">
                                                <p className="text-xl font-semibold text-neutral-700 lg:text-2xl">
                                                    {feature?.Name}
                                                </p>
                                                <p className="text-neutral-600">{feature?.Description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <Image
                                alt={item?.Image?.alternativeText ?? ''}
                                height={640}
                                src={item?.Image?.url ?? ''}
                                width={640}
                            />
                        </div>
                    </div>
                ))}
                <div className="flex items-center justify-center">
                    <Button asChild>
                        <a
                            href={`${ACCOUNTS_URL}/signup?action=signup&section=features&page=home`}
                            rel="noreferrer"
                            target="_blank"
                        >
                            Start Free Trial Now
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    )
}
