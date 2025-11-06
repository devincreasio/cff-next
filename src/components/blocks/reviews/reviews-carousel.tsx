'use client'

import Image from 'next/image'

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { GetTestimonialsQuery } from '@/graphql/generated/sdk'

interface ReviewsCarouselProps {
    data: GetTestimonialsQuery
}

export default function ReviewsCarousel({ data }: ReviewsCarouselProps) {
    return (
        <Carousel
            className="container mx-auto w-full px-0 md:px-4"
            opts={{
                align: 'center',
                loop: true,
                startIndex: 1,
            }}
        >
            <CarouselContent className="pb-10 md:px-4 md:pb-20">
                {data.testimonials.map((data, index) => {
                    if (!data) return null
                    return (
                        <CarouselItem className="basis-10/12 md:basis-1/2 lg:basis-1/3" key={index}>
                            <div
                                className={`
                                  flex h-full flex-col gap-4 rounded-xl border-t-4 border-green bg-white px-4 py-6
                                  shadow-custom
                                  md:gap-6 md:px-8 md:py-10
                                `}
                            >
                                <div className="flex gap-3">
                                    {data.Author?.AvatarFile?.url && (
                                        <div className="size-[42px] shrink-0 overflow-hidden rounded-full">
                                            <Image
                                                alt={data.Author.AvatarFile.alternativeText ?? data.Author.Name ?? ''}
                                                className="size-full object-cover"
                                                height={100}
                                                loading="lazy"
                                                src={data.Author.AvatarFile.url}
                                                width={100}
                                            />
                                        </div>
                                    )}
                                    <div className="flex flex-col gap-0.5">
                                        <p className="font-semibold">{data.Author?.Name}</p>
                                        <p className="text-xs text-text">{data.Author?.Role}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className={`text-xl leading-[140%] font-semibold text-dark-green md:text-2xl`}>
                                        {data.Title}
                                    </p>
                                    <p className="flex-1">{data.Text}</p>
                                </div>
                            </div>
                        </CarouselItem>
                    )
                })}
            </CarouselContent>
        </Carousel>
    )
}
