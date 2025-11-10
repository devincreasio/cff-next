import Image from 'next/image'

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
            <div className="flex flex-col gap-3">
                <div className="container mx-auto flex flex-col items-center justify-center gap-4 text-center">
                    <h3 className="text-[40px] font-semibold">{Title}</h3>
                    <p className="text-xl leading-[160%] font-medium text-neutral-600">{Description}</p>
                </div>
                {Items?.map((item, index) => (
                    <div
                        className={cn('pt-[100px] pb-[120px]', {
                            'bg-primary-50': index % 2 !== 0,
                        })}
                        key={item?.Title}
                    >
                        <div className="container mx-auto flex items-center gap-16">
                            <div className="flex flex-col gap-12">
                                <div className="flex flex-col gap-2">
                                    <p className="text-[32px] font-semibold text-primary-200">{item?.Title}</p>
                                    <p className="leading-[140%] font-semibold">{item?.Description}</p>
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
                                                <p className="text-2xl font-semibold text-neutral-700">
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
            </div>
        </section>
    )
}
