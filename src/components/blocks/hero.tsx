'use client'

import { usePathname } from 'next/navigation'

import { Button } from '@/components/ui/button'

import { BlurCircle } from '../shared/blur-circle'

export function Hero() {
    const pathname = usePathname()

    return (
        <section className="relative">
            <BlurCircle color="blue" left={-254} size={591} top={-100} />
            <BlurCircle color="green" left={-208} size={500} top={264} />
            <BlurCircle color="green" right={252} size={500} top={0} />
            <BlurCircle color="blue" right={-367} size={591} top={233} />
            <BlurCircle color="blue" right={45} size={591} top={281} />
            <div className="relative z-10 container mx-auto flex flex-col gap-8 pt-20 pb-28 lg:flex-row lg:gap-[77px]">
                <div className="flex shrink-0 flex-col items-start gap-8 lg:gap-[72px]">
                    <div className="flex max-w-[431px] flex-col gap-5">
                        <h1
                            className={`
                              text-center text-[34px] leading-[120%] font-bold text-balance
                              lg:text-left lg:text-[40px]
                            `}
                        >
                            Cash Flow Frog — The Best Cash Flow Forecasting Software
                        </h1>
                        <p className="text-center leading-[160%] font-medium text-text lg:text-left lg:text-xl">
                            Cash Flow Frog connects with QuickBooks, Xero, Sage Intacct & Zoho Books, to give you
                            rolling forecasts up to 36 months. Plan payroll, expenses and growth with confidence, all in
                            minutes.
                        </p>
                    </div>
                    <Button asChild className="w-full lg:w-auto" variant="default">
                        <a
                            href={`https://accounts.cashflowfrog.com/signup?action=signup&section=hero&page=${pathname}`}
                            rel="noreferrer"
                            target="_blank"
                        >
                            Start Free
                        </a>
                    </Button>
                </div>
                <div
                    className={`
                      size-full rounded-xl shadow-[0px_0.6px_23.92px_0px_#42424A05,0px_4.78px_114.83px_0px_#42424A1A]
                    `}
                >
                    <div className={`aspect-video w-full rounded-xl bg-white p-5 shadow-custom`} />
                </div>
            </div>
        </section>
    )
}
