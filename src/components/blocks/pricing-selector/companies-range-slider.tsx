import * as SliderPrimitive from '@radix-ui/react-slider'

import { Badge } from '@/components/ui/badge'

interface CompaniesRangeSliderProps {
    companiesRange: number[]
    setCompaniesRange: (value: [number]) => void
}

export function CompaniesRangeSlider({ companiesRange, setCompaniesRange }: CompaniesRangeSliderProps) {
    return (
        <div className="flex flex-col">
            <p className="mb-16 text-[24px] leading-[140%] font-semibold">Select your connect up to companies</p>
            <div className="relative flex w-full flex-col items-center">
                <SliderPrimitive.Root
                    className="relative flex w-full touch-none items-center select-none"
                    defaultValue={companiesRange}
                    max={50}
                    min={1}
                    onValueChange={setCompaniesRange}
                    step={1}
                >
                    <SliderPrimitive.Track
                        className={`relative h-1 w-full grow overflow-hidden rounded-full bg-neutral-300`}
                    >
                        <SliderPrimitive.Range className="absolute h-full bg-primary-100" />
                    </SliderPrimitive.Track>
                    <SliderPrimitive.Thumb
                        className={`
                          block size-4 rounded-full bg-primary-100 transition-colors
                          focus-visible:outline-hidden
                          disabled:pointer-events-none disabled:opacity-50
                        `}
                    >
                        <Badge className="absolute -top-6 left-1/2 -translate-1/2 overflow-visible">
                            <span>{companiesRange[0]}</span>
                            <div
                                className={`
                                  absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent
                                  border-t-primary-100
                                `}
                            />
                        </Badge>
                    </SliderPrimitive.Thumb>
                </SliderPrimitive.Root>
                <div className="-mx-1.5 mt-2 flex w-full items-center justify-between text-xs text-neutral-600">
                    {[1, 10, 20, 30, 40, 50].map((expansion) => (
                        <span key={expansion}>{expansion}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}
