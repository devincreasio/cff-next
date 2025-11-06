import Image from 'next/image'

import { cn } from '@/lib/utils'

import { BlurCircle } from '../shared/blur-circle'

interface BenefitsProps {
    data:
        | ({
              description: string
              imageAlt: string
              imageSrc: string
              title: string
          } | null)[]
}
export function Benefits({ data }: BenefitsProps) {
    return (
        <section className="relative py-16">
            <BlurCircle color="blue" left={-361} size={640} top={10} />
            <BlurCircle color="green" left={-311} size={540} top={400} />
            <div className="relative z-10 container mx-auto flex flex-col gap-3">
                <h2 className="text-center text-[28px] font-semibold lg:text-[40px]">Our benefits</h2>
                <div className="flex flex-col gap-8 lg:gap-12">
                    {data.map((benefit, index) => {
                        if (!benefit) return null
                        return (
                            <div
                                className={cn(
                                    `
                                      mx-auto flex max-w-[952px] flex-col-reverse items-center gap-12 rounded-xl px-4
                                      py-6
                                      lg:flex-row-reverse lg:p-12
                                    `,
                                    {
                                        'bg-[#F1F9F5] lg:flex-row': index % 2 !== 0,
                                    },
                                )}
                                key={benefit.title}
                            >
                                <div className="flex shrink-0 items-center justify-center">
                                    <Image
                                        alt={benefit.imageAlt}
                                        className="h-auto w-[290] rounded-lg object-cover"
                                        height={220}
                                        src={benefit.imageSrc}
                                        width={290}
                                    />
                                </div>
                                <div
                                    className={cn('flex flex-col gap-3', {
                                        'lg:pl-12': index % 2 === 0,
                                    })}
                                >
                                    <h3 className="text-2xl leading-[100%] font-semibold lg:text-4xl">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-lg leading-[140%] text-text">{benefit.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
