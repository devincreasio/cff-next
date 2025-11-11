import { BlurCircle } from '@/components/shared/blur-circle'
import { api } from '@/lib/api'

import ReviewsCarousel from './reviews-carousel'

interface ReviewsProps {
    backgroundColor?: 'primary-50' | 'white'
}

export async function Reviews({ backgroundColor = 'primary-50' }: ReviewsProps) {
    const data = await api.GetTestimonials()
    return (
        <section className={`relative pt-10 md:pt-20 ${backgroundColor === 'white' ? 'bg-white' : 'bg-primary-50'}`}>
            <BlurCircle className="z-20" color="green" right={120} size={500} top={109} />
            <BlurCircle className="z-20" color="blue" right={-87} size={591} top={390} />
            <div className="flex flex-col gap-12">
                <p className="container mx-auto text-center text-[28px] leading-[100%] font-semibold md:text-3.5xl">
                    What people are saying about us
                </p>
                <ReviewsCarousel data={data} />
            </div>
        </section>
    )
}
