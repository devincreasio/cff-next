import Image from 'next/image'

import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { CLOUDINARY_URL } from '@/constants'

interface PricingRowProps {
    item: {
        1: boolean | string
        2: boolean | string
        title: string
        tooltip: {
            content: string
        }
    }
    onlyPro?: boolean
}

export const PricingRow = ({ item, onlyPro = false }: PricingRowProps) => {
    return (
        <tr>
            <td className="flex items-center gap-2 py-[18px] text-sm leading-[140%] md:text-base">
                <p>{item.title}</p>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Image
                            alt="FAQ"
                            className="cursor-pointer"
                            height={20}
                            loading="lazy"
                            src={`${CLOUDINARY_URL}/images/Question.svg`}
                            width={20}
                        />
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>{item.tooltip.content}</p>
                    </TooltipContent>
                </Tooltip>
            </td>
            {!onlyPro && (
                <td>
                    <FeatureCell value={item[1]} />
                </td>
            )}
            <td>
                <FeatureCell value={item[2]} />
            </td>
        </tr>
    )
}

const FeatureCell = ({ value }: { value: boolean | string }) => {
    return (
        <div className="flex items-center justify-center text-center">
            {typeof value === 'boolean' ? (
                <>
                    {value ? (
                        <Image
                            alt="Yes"
                            height={20}
                            loading="lazy"
                            src={`${CLOUDINARY_URL}/images/CheckCircleGreen.svg`}
                            width={20}
                        />
                    ) : null}
                    {value ? null : (
                        <Image
                            alt="No"
                            height={20}
                            loading="lazy"
                            src={`${CLOUDINARY_URL}/images/Close.svg`}
                            width={20}
                        />
                    )}
                </>
            ) : (
                value
            )}
        </div>
    )
}
