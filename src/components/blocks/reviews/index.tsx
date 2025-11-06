import { BlurCircle } from '@/components/shared/blur-circle'
import { api } from '@/lib/api'

import ReviewsCarousel from './reviews-carousel'

export async function Reviews() {
    const data = await api.GetTestimonials()
    return (
        <section className="relative bg-[#F1F9F5] pt-10 md:pt-20">
            <BlurCircle color="green" right={120} size={500} top={109} />
            <BlurCircle color="blue" right={-87} size={591} top={390} />
            <div className="flex flex-col gap-12">
                <p className="container mx-auto text-center text-[28px] leading-[100%] font-semibold md:text-[40px]">
                    What people are saying about us
                </p>
                <ReviewsCarousel data={data} />
            </div>
        </section>
    )
}
