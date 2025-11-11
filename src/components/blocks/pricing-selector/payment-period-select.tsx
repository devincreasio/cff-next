import { cn } from '@/lib/utils'

const paymentOptions = [
    { id: 0, label: 'Monthly price' },
    { discount: '-20%', id: 1, label: 'Yearly' },
    { discount: '-35%', id: 2, label: '2 Years' },
]

interface PaymentPeriodSelectProps {
    selectedPaymentPeriod: 0 | 1 | 2
    setSelectedPaymentPeriod: (period: 0 | 1 | 2) => void
}

export function PaymentPeriodSelect({ selectedPaymentPeriod, setSelectedPaymentPeriod }: PaymentPeriodSelectProps) {
    return (
        <div className="flex flex-col gap-8">
            <p className="text-2xl leading-[140%] font-semibold">Select the payment period</p>
            <div className="flex w-full justify-around rounded-sm bg-[#F8F8F8] p-2 text-sm md:gap-2 md:text-base">
                {paymentOptions.map(({ discount, id, label }) => {
                    const isSelected = selectedPaymentPeriod === id
                    return (
                        <button
                            className={cn(
                                `
                                  flex basis-1/3 flex-col items-center gap-2.5 rounded-sm p-2 transition-colors
                                  md:px-4
                                  lg:basis-auto lg:flex-row
                                `,
                                isSelected ? 'bg-primary-100 text-white' : 'bg-transparent',
                            )}
                            key={id}
                            onClick={() => {
                                setSelectedPaymentPeriod(id as 0 | 1 | 2)
                            }}
                        >
                            <span>{label}</span>
                            {discount && (
                                <span
                                    className={cn(
                                        'rounded-sm px-1.5 py-1 text-sm md:ml-2',
                                        isSelected ? 'bg-white text-black' : 'bg-secondary',
                                    )}
                                >
                                    {discount}
                                </span>
                            )}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}
