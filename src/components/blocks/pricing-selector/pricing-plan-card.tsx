import Image from 'next/image'

import { Button } from '@/components/ui/button'

interface PricingPlanCardProps {
    description: string
    imageUrl: string
    onClick?: () => void
    planName: string
    price: number
    url: string
}

export function PricingPlanCard({ description, imageUrl, onClick, planName, price, url }: PricingPlanCardProps) {
    return (
        <div
            className={`
              flex max-w-[430px] flex-col gap-5 rounded-xl bg-white px-4 py-8
              shadow-[0px_-0.14px_2.83px_0px_#28292E05,0px_-1.1px_22.61px_0px_#28292E0A]
              lg:p-8
            `}
        >
            <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between gap-5">
                    <div className="flex flex-col gap-5">
                        <p className="text-[48px] leading-[100%] font-semibold">
                            ${price}
                            <span className="text-base font-normal text-neutral-600">/month</span>
                        </p>
                        <p className="text-[24px] leading-[140%] font-semibold">{planName}</p>
                    </div>
                    <Image alt="Standard" height={100} loading="lazy" src={imageUrl} width={94} />
                </div>
                <p className="text-neutral-600">{description}</p>
            </div>
            {/* <p className="text-sm text-neutral-600">
                *For Sage Intacct pricing, please{' '}
                <Link className="underline" href="/contact">
                    contact us
                </Link>
            </p> */}
            <Button asChild className="w-full shadow-none!">
                <a href={onClick ? '##' : url} onClick={onClick} rel="noreferrer" target="_blank">
                    Get Started
                </a>
            </Button>
        </div>
    )
}
