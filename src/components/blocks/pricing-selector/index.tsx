'use client'

import { useState } from 'react'

import { ACCOUNTS_URL, CLOUDINARY_URL } from '@/constants'

import { AnnualRevenueSlider } from './annual-revenue-slider'
import { CompaniesRangeSlider } from './companies-range-slider'
import { getPrice } from './get-price'
import { PaymentPeriodSelect } from './payment-period-select'
import { PricingPlanCard } from './pricing-plan-card'

interface PricingSelectorProps {
    onClick?: () => void
    onlyPro?: boolean
}

export default function PricingSelector({ onClick, onlyPro = false }: PricingSelectorProps) {
    const [selectedPaymentPeriod, setSelectedPaymentPeriod] = useState<0 | 1 | 2>(1)
    const [annualRevenue, setAnnualRevenue] = useState([200_000])
    const [companiesRange, setCompaniesRange] = useState([5])

    return (
        <section className="relative z-10 container mx-auto flex flex-col gap-6 py-16 lg:gap-10 lg:py-14">
            <p className="text-center text-[28px] font-semibold lg:text-[32px]">Pick your plan</p>
            <div className="mx-auto flex flex-col gap-x-[60px] gap-y-10 md:flex-row lg:px-7">
                <div
                    className={`
                      flex w-fit flex-col gap-20 rounded-xl bg-white px-4 py-8
                      shadow-[0px_-0.14px_2.83px_0px_#28292E05,0px_-1.1px_22.61px_0px_#28292E0A]
                      lg:p-8
                    `}
                >
                    <PaymentPeriodSelect
                        selectedPaymentPeriod={selectedPaymentPeriod}
                        setSelectedPaymentPeriod={setSelectedPaymentPeriod}
                    />
                    {onlyPro ? (
                        <CompaniesRangeSlider companiesRange={companiesRange} setCompaniesRange={setCompaniesRange} />
                    ) : (
                        <AnnualRevenueSlider annualRevenue={annualRevenue} setAnnualRevenue={setAnnualRevenue} />
                    )}
                </div>
                <div className="flex flex-1 flex-col gap-6">
                    {!onlyPro && (
                        <PricingPlanCard
                            description="Plan long term cash flow & test scenarios"
                            imageUrl={`${CLOUDINARY_URL}/images/standardPrice.svg`}
                            onClick={onClick}
                            planName="Standard"
                            price={
                                getPrice({
                                    annualRevenue: annualRevenue[0],
                                    companiesRange: companiesRange[0],
                                    onlyPro,
                                    plan: 'standard',
                                    selectedPaymentPeriod,
                                }) ?? 0
                            }
                            url={`${ACCOUNTS_URL}/signup?action=signup&section=pricingStandart&page=pricing`}
                        />
                    )}
                    <PricingPlanCard
                        description="Stay on top of your cash flow with powerful pro features"
                        imageUrl={`${CLOUDINARY_URL}/images/proPrice.svg`}
                        onClick={onClick}
                        planName="Pro"
                        price={
                            getPrice({
                                annualRevenue: annualRevenue[0],
                                companiesRange: companiesRange[0],
                                onlyPro,
                                plan: 'pro',
                                selectedPaymentPeriod,
                            }) ?? 0
                        }
                        url={
                            onlyPro
                                ? `${ACCOUNTS_URL}/signup?action=signup&section=pricingPro&page=accountants-and-bookkeepers`
                                : `${ACCOUNTS_URL}/signup?action=signup&section=pricingPro&page=pricing`
                        }
                    />
                </div>
            </div>
        </section>
    )
}
